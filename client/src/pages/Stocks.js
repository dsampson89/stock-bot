import React from "react";
import Stockimg from "../Components/Stockimg/stockImg";
import Stockinfo from "../Components/Stockinfo/stockInfo"


class Stocks extends React.Component {
    

    render() {
        return (
            <div className="containter">
                <div>
                    <Stockimg />
                    <Stockinfo />
                </div>
            </div>
        )
    }
}

export default Stocks;