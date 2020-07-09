import React from "react";
import Stockcards from "../Components/StockCards/stockCards";
import Header from "../Components/Header/header"
import Results from "../Components/Results/results"
import Bot from "../API/alpaca"

class Portfolio extends React.Component {
    state={
        bot: new Bot('paper', 'PKV7RSE5YZS4KCV3RTYD', '8Yt2e5xM3LQwq0C2KDXnHUlhNllgEbQjhBLlj5Dd')
    }
    render() {
        return (
            <div className="containter">
            <div>
                <Header bot={this.state.bot}/>
                <Results />
                <Stockcards />
            </div>
            </div>
        )
    }
}

export default Portfolio;