import React from "react";
import Stockcards from "../Components/StockCards/index";
import Header from "../Components/Header/index"
import Results from "../Components/Results/index"


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