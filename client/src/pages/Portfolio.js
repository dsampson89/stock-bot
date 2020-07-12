import React from "react";
import Stockcards from "../Components/StockCards/stockCards";
import Header from "../Components/Header/header"
import Charts from "../Components/Charts/charts"
import Bot from "../API/alpaca"

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            output: [],
        }
    }
    
    dataGrab = async () => {
        var bot = new Bot('paper', 'PKV7RSE5YZS4KCV3RTYD', '8Yt2e5xM3LQwq0C2KDXnHUlhNllgEbQjhBLlj5Dd')
         bot.getStats("AAPL").then((response)=>{
            var prices = []
            var objKey= Object.keys(response)
            var whatever = (response[objKey])
            for(var i = 0; i < whatever.length; i ++){
                prices.push(whatever[i].closePrice)
                console.log(whatever[i].closePrice)
            }
            this.setState((state)=>{
                return {output: prices}
            })
        })
    }


    render() {
        return (
            <div className="containter">
            <div>
                <Header />
                <Charts output={this.state.output}/>
                <Stockcards dataGrab={this.dataGrab} />
            </div>
            </div>
        )
    }
}

export default Portfolio;