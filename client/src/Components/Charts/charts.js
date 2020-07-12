import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';

class Charts extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          chartData:props.output
        }
      }
      static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right'
      }

    render() {
        return(
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:"Featured stock",
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                          }
                        
                    }}
                    />
            </div>
            
        )
    }
}
export default Charts