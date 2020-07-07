import React from "react";
import Stockimg from "../Components/Stockimg/index";
import Stockinfo from "../Components/Stockinfo/index"


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