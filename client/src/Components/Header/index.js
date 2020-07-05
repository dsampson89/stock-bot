import React from "react";

function Header() {
    return (
        <div class="jumbotron">
  <h1 class="display-4">Hello, User</h1>
  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id metus sed diam tristique tristique.</p>
  <hr class="my-4"/>
  <p>Build onto you portfolio</p>
  <a class="btn btn-primary btn-lg" href="/stocks" role="button">Buy Stocks</a>
</div>
    );
}

export default Header;