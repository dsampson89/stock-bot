import React from "react";
import Stockcards from "../Components/StockCards/stockCards";
import Header from "../Components/Header/header"
import Charts from "../Components/Charts/charts"
import Bot from "../API/alpaca"

class Portfolio extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        chartData: {
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          datasets:[
            {
              label:'Price',
              data:[]
            }
          ]
        },
      }
    }
     componentWillMount(){
       this.getChartData()
     }
    getChartData=()=>{
      var bot = new Bot('paper', 'PKA3G204E3WWS555WJ09', 'g6mMfSPU1F9SuKHrG0GfN2HS5loLAEDKbMtnabpX')
      var prices = []
      bot.getStats("AAPL").then((response)=>{    
        var objKey= Object.keys(response)
        var whatever = (response[objKey])
        for(var i = 0; i < whatever.length; i ++){
          prices.push(whatever[i].closePrice)
               
        }
      })
      this.setState({
        chartData:{
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          datasets:[
            {
              label:'Price',
              data: prices,
              borderColor: "#822E65",
              fill: false
            }
          ]
        }
      });
    }


    render() {
        return (
            <div className="containter" id="stockImg">
            <div>
                <Header />
                <Charts output={this.state.chartData}/>
                <Stockcards dataGrab={this.getChartData} />
            </div>
            </div>
        )
    }
}

export default Portfolio;