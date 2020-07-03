import React from "react";

function Stockcards() {
  return (
      <div className="row">
          <div className="col-md-3">
          <div className="card">
            <img src="..." class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/login" className="btn btn-success">Show Stock</a>
            </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="card">
            <img src="..." class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/login" className="btn btn-success">Show Stock</a>
            </div>
            </div>
          </div>
      </div>
    

  );
}

export default Stockcards;