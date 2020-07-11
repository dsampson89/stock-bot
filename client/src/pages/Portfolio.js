import React from "react";
import Stockcards from "../Components/StockCards/stockCards";
import Header from "../Components/Header/header"
import Results from "../Components/Results/results"
import Bot from "../API/alpaca"

class Portfolio extends React.Component {
    render() {
        return (
            <div className="containter">
            <div>
                <Header />
                <Results />
                <Stockcards />
            </div>
            </div>
        )
    }
}

export default Portfolio;