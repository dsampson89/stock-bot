import React from "react";
import Stockimg from "../Components/Stockimg/stockImg";
import Stockinfo from "../Components/Stockinfo/stockInfo"
import Bot from "../API/alpaca"


class Stocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: [],
            money: 0
        }
    }

    initiate = async () => {
        var bot = new Bot('paper', 'PKA3G204E3WWS555WJ09', 'g6mMfSPU1F9SuKHrG0GfN2HS5loLAEDKbMtnabpX')
        bot.automation(20,600).then((response)=>{
          return response
        }).then((res)=>{
          this.setState((state)=>{
            return {output: res}
          })
        })
    }

    checkMoney = async () => {
        var bot = new Bot('paper', 'PKA3G204E3WWS555WJ09', 'g6mMfSPU1F9SuKHrG0GfN2HS5loLAEDKbMtnabpX')
        bot.getAcc().then((response)=>{
            this.setState((state)=>{
                return{money:response.portfolio_value}
            })
        })
    }
    

    render() {
        return (
            <div className="containter">
                <div className="row">
                    <div className="col-lg-12">
                        <Stockinfo  initiate={this.initiate} checkMoney={this.checkMoney} money={this.state.money}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="container" id="stockImg"><Stockimg output={this.state.output}/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stocks;