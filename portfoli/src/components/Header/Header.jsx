import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <a class="navbar-brand" href="index.html" id="logo">Daniel Thomas Guadalupe</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
  </nav>
        );
    }
}

export default Header;