import React from "react";

const Signup = () => {

        return (
            <div className="container" id="signUp">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://specials-images.forbesimg.com/imageserve/1201457952/960x0.jpg?fit=scale" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block" id="caption">
                                <h1>61% of daily stock trades are high frequency trading bots.</h1>
                                <p>The biggest names in stocks are all using algorithmic trading. Why shouldn't you?</p>
                                <p>Only 10% of trades are done manually, and those traders are losing out to Wall Street firms with computers that
                                    can make trades faster than you can click "buy"
                                </p>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://specials-images.forbesimg.com/imageserve/1201457952/960x0.jpg?fit=scale" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block" id="caption">
                                <h1>We wanted to even the playing field.</h1>
                                <p>Passive income for a more comfortable life.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://specials-images.forbesimg.com/imageserve/1201457952/960x0.jpg?fit=scale" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block" id="caption">
                                <h1>Our bot is easy to use</h1>
                                <ol>
                                    <li>Sign up for a trading account with alpaca.markets</li>
                                    <li>Enter your api information <a href="/" role="button">here</a></li>
                                    <li>Click go and watch the profits come in, like a true Wolf of Wall Street</li>
                                </ol>
                            </div>
                        </div>
                     </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
export default Signup