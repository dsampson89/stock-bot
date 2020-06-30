const Alpaca = require('@alpacahq/alpaca-trade-api')
const fs = require('fs')

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
        this.alpaca.getAccount().then((account) => {
            console.log('Current Account:', account)
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
        this.alpaca.getBars(
            timeFrame,
            symbols, // which ticker symbols to get bars for
            {
              limit: limit,
              start: start,
              end: end,
            }
        ).then((response) => {
            console.log(response)
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

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    getDate(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;

        return today
    }


    async automation(pricePoint){
        var today = this.getDate()
        var assetsShuffled = this.shuffle(this.availableAssets)
        var promises = []
        var prices = []
        for(var i = 0; i < 3; i++){
            promises.push(this.alpaca.getBars('minute',assetsShuffled[i],{limit: 1,start: today,end: today,}).then((response)=>{
                prices.push(response)
                console.log(response)
            }))
        }
        Promise.all(promises).then(()=>{
            console.log('done')
        }).catch((e)=>{
            console.log(e)
        })
    }
}

/*var bot = new Bot('paper', 'PKV7RSE5YZS4KCV3RTYD', '8Yt2e5xM3LQwq0C2KDXnHUlhNllgEbQjhBLlj5Dd')

//bot.automation(200);

var today = bot.getDate()
bot.alpaca.getBars('minute', 'AAPL', {limit:1,start: today,end: today}).then((response)=>{
    console.log(response.AAPL[0].closePrice)
})*/



module.exports = Bot;