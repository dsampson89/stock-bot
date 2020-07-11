const Alpaca = require('@alpacahq/alpaca-trade-api')
const assetsTxt = require("./assets.json")
const util = require('./utilities');

class Bot {

    constructor(APCA_API_BASE_URL, APCA_API_KEY_ID, APCA_API_SECRET_KEY){
        this.url = APCA_API_BASE_URL;
        this.id = APCA_API_KEY_ID;
        this.secret = APCA_API_SECRET_KEY;
        this.availableAssets = assetsTxt;

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

    getPos(){
        return new Promise((resolve,reject)=>{
            this.alpaca.getPositions().then((response)=>{
                resolve(response)
            }).catch((e)=>{
                reject(e)
            })
        })
    }

    getStats(symbols){
        return new Promise((resolve,reject)=>{
            this.alpaca.getBars(
                'minute', //'minute' | '1Min' | '5Min' | '15Min' | 'day' | '1D'
                symbols, // which ticker symbols to get bars for
                {
                  limit: 10, //number
                  start: util.getDate(), //date string yyyy-mm-dd
                  end: util.getDate(), //date string yyyy-mm-dd
                }
            ).then((response) => {
                resolve(response)
            }).catch((e)=>{
                reject(e)
            })
        })
    }

    async liquidatePositions(){
        await util.sleep(30000)
        this.alpaca.closeAllPositions()
    }

    automation(pricePoint, budget){
        var today = util.getDate()
        var assetsShuffled = util.shuffle(this.availableAssets)
        var promises = []
        var output = []
        for(var i = 0; i < 100; i++){
            promises.push(this.alpaca.getBars('minute',assetsShuffled[i],{limit: 10,start: today,end: today,}).then((response)=>{
                var objKey = Object.keys(response)
                var asset = response[objKey]
                if(asset){
                    if(asset.length===10){
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
                                        var expectedProf = (normalizedData*10).toFixed(2)
                                        output.push("bought " + numToBuy + " of " + objKey + " at " + asset[0].closePrice + " with an expected profit of " + expectedProf + "%")
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
        return Promise.all(promises).then(()=>{
            this.liquidatePositions()
            //console.log(output)
            return(output)
        }).catch((e)=>{
            console.log(e)
            return(e)
        })
    }
}

export default Bot;
