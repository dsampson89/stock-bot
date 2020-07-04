const Alpaca = require('@alpacahq/alpaca-trade-api')
const fs = require('fs');
const util = require('./utilities')

class Bot {

    constructor(APCA_API_BASE_URL, APCA_API_KEY_ID, APCA_API_SECRET_KEY){
        this.url = APCA_API_BASE_URL;
        this.id = APCA_API_KEY_ID;
        this.secret = APCA_API_SECRET_KEY;
        this.availableAssets = fs.readFileSync("./assets.txt").toString('utf-8').split(',');

        this.alpaca = new Alpaca({
            keyId: this.id,
            secretKey: this.secret,
            paper: true,
            usePolygon: false
        })
    }

    getAcc(){
        return new Promise((resolve,reject)=>{
            this.alpaca.getAccount().then((account) => {
                resolve(account)
            }).catch((e)=>{
                reject(e)
            })
        })
    }

    placeOrder(symbol, qty, side, type, tif, limit, stop,){
        this.alpaca.createOrder({
            symbol: symbol,
            qty: qty,
            side: side,
            type: type,
            time_in_force: tif,
            limit_price: limit,
            stop_price: stop
          }).then((response)=>{
              console.log(response);
          })
    }

    getStats(timeFrame, symbols, limit, start, end){
        return new Promise((resolve,reject)=>{
            this.alpaca.getBars(
                timeFrame,
                symbols, // which ticker symbols to get bars for
                {
                  limit: limit,
                  start: start,
                  end: end,
                }
            ).then((response) => {
                resolve(response)
            }).catch((e)=>{
                reject(e)
            })
        })
    }

    getAssetList(){
        var assets = []
        this.alpaca.getAssets({
            status: 'active',
            exchange: 'NASDAQ',
            class: 'us_equity'
        }).then((response)=>{
            console.log(response.length)
            for(var i = 0; i < response.length; i++){
                assets.push(response[i].symbol)
            }
            console.log(assets)
            fs.writeFile('assets.txt', assets, (err)=>{
                if(err) throw err;
            })
        })
    }

    async liquidatePositions(){
        await util.sleep(30000)
        this.alpaca.closeAllPositions()
    }

    async automation(pricePoint, budget){
        var today = util.getDate()
        var assetsShuffled = util.shuffle(this.availableAssets)
        var promises = []
        var output = []
        for(var i = 0; i < 100; i++){
            promises.push(this.alpaca.getBars('minute',assetsShuffled[i],{limit: 10,start: today,end: today,}).then((response)=>{
                var objKey = Object.keys(response)
                var asset = response[objKey]
                if(asset){
                    if(asset.length=10){
                        try{
                            if(asset[0].closePrice <= pricePoint){
                                var priceGuess = 0;
                                var volumeGuess = 0;
                                for(var j = 1; j < asset.length; j++){
                                    priceGuess += (asset[j].closePrice - asset[j-1].closePrice)/asset[j].closePrice
                                    volumeGuess += (asset[j].volume - asset[j-1].volume)/asset[j].volume
                                }
                                var normalizedData = util.normalize(priceGuess,volumeGuess, 1, -1)
                                if(normalizedData>0){
                                    var randomMult = Math.floor((Math.random()*10)+1)
                                    var numToBuy = Math.floor((Math.floor(budget/asset[0].closePrice))/randomMult)
                                    if(numToBuy>0){
                                        output.push("bought " + numToBuy + " of " + objKey + " at " + asset[0].closePrice)
                                        var moneySpent = numToBuy*asset[0].closePrice
                                        budget -= moneySpent
                                        this.alpaca.createOrder({
                                            symbol: objKey.toString(),
                                            qty: numToBuy,
                                            side: 'buy',
                                            type: 'market',
                                            time_in_force: 'fok'
                                        })
                                    }
                                }
                            }
                        } catch (e){
                            //oof
                        }
                    }
                }
            }))
        }
        Promise.all(promises).then(()=>{
            this.liquidatePositions()
            return(output)
        }).catch((e)=>{
            console.log(e)
            return('something is broken. try again.')
        })
    }
}

//module.exports = Bot;
var bot = new Bot('paper', 'PKV7RSE5YZS4KCV3RTYD', '8Yt2e5xM3LQwq0C2KDXnHUlhNllgEbQjhBLlj5Dd')
bot.automation(200);