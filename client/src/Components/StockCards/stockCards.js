import React, { Component } from 'react'
import Bot from '../../API/alpaca'

class stockCards extends Component {

   dataGrab = async () => {
    var bot = new Bot('paper', 'PKV7RSE5YZS4KCV3RTYD', '8Yt2e5xM3LQwq0C2KDXnHUlhNllgEbQjhBLlj5Dd')
     bot.getStats(this.state.value).then((response)=>{
       console.log(response)
     })
   }

 handleChange(event) {
    this.setState({value: event.target.value})
 }

handleSubmit(event){
    alert("Search submited for: " + this.state.value);
    event.preventDefault();
    
}
  render() {

    const cardInfo = [
      {image:"", title:"", text:""}
    ];

    const renderCard = (card, index) => {
      return(
        <div>
          <form className="input" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" value={this.state} onChange={this.handleChange}/>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        <div className="row">
          <div className="col-md-3">
            <div className="card" key={index}>
              <img src={card.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <a href="/login" className="btn btn-success">Show Stock</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
    return <div className="App">{cardInfo.map(renderCard)}</div>
  
  }
}
export default stockCards