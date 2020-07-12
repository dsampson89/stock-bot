import React from "react";
import Stockimg from "../Components/Stockimg/stockImg";
import Stockinfo from "../Components/Stockinfo/stockInfo"
import Bot from "../API/alpaca"
import { response } from "express";


class Stocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: [],
            money: 0
        }
    }

    initiate = async () => {
        var bot = new Bot('paper', 'PKV7RSE5YZS4KCV3RTYD', '8Yt2e5xM3LQwq0C2KDXnHUlhNllgEbQjhBLlj5Dd')
    
        bot.automation(20,600).then((response)=>{
          return response
        }).then((res)=>{
          this.setState((state)=>{
            return {output: res}
          })
        })
    }

    checkMoney = async () => {
        var bot = new Bot('paper', 'PKV7RSE5YZS4KCV3RTYD', '8Yt2e5xM3LQwq0C2KDXnHUlhNllgEbQjhBLlj5Dd')
        bot.getAcc().then((response)=>{
            this.setState((state)=>{
                return{money:response.portfolio_value}
            })
        })
    }
    

    render() {
        return (
            <div className="containter">
                <div>
                    <Stockinfo  initiate={this.initiate} checkMoney={this.checkMoney} money={this.state.money}/>
                    <Stockimg output={this.state.output}/>
                </div>
            </div>
        )
    }
}

export default Stocks;