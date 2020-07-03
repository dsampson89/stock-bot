import React from "react";
import Stockcards from "../Components/StockCards/index"

class Portfolio extends React.Component {
    

    render() {
        return (
            <div className="containter">
            <div>
                <Stockcards />
            </div>
            </div>
        )
    }
}

export default Portfolio;