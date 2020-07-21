import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


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
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="chart" style={{width: 600, height: 300}}>
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
                      },
                      padding: {
                        left: 50,
                        right: 0,
                        top: 0,
                        bottom: 0
                      },
                      
                    
                }}
              />
            </div>
          </div>
        </div>
      </div>        
    )
}
}
export default Charts