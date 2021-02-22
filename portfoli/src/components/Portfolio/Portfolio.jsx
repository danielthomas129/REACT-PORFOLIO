import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card">
        <img src="assets/imgs/demo.gif" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>Cobalt</strong></h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="btn-group" role="group" aria-label="Basic example">
          <a type="button"  style="text-align: center; color: #3a5a40; font-size: 60px;"class="fab fa-github btn-lg"href="https://github.com/danielthomas129/Cobalt" ></a>
          <a type="button"  style="text-align: center; color: #3a5a40; font-size: 60px;" class="fad fa-browser" href="https://cobalt-canvas.herokuapp.com/" role="button"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="assets/imgs/picky-app.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>Picky</strong></h5>
          <p class="card-text">This app was designed to help busy people find recipes quickly while still being mindful of allergies and diet preferences.</p>
          <a type="button"  style="text-align: center; color: #3a5a40; font-size: 60px;"class="fab fa-github" href="https://github.com/ncastaldi/project1" role="button"></a>
          <a type="button"  style="text-align: center; color: #3a5a40; font-size: 60px;" class="fad fa-browser" href="https://www.castaldi.dev/project1/index.html" role="button"></a>

        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="assets/imgs/weather.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>Weather Dashboard</strong></h5>
          <p class="card-text">This application was created to find a weather condition of a given city both the current and 5-Days forecast at the same time.
            The server-side API used to get response data object is retrieved from the Open Weather APi.</p>
            <a type="button"  style="text-align: center; color: #3a5a40; font-size: 60px;" class="fab fa-github" href="https://github.com/danielthomas129/Weather-Dashboard-API" role="button"></a>
            <a type="button"  style="text-align: center; color: #3a5a40; font-size: 60px;" class="fad fa-browser" href="https://danielthomas129.github.io/Weather-Dashboard-API/"" role="button"></a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="assets/imgs/mab.gif" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>Munch A Burger</strong></h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a type="button"  style="text-align: center; color: #3a5a40; font-size: 60px;" class="fab fa-github" href="https://github.com/danielthomas129/BURGER" role="button"></a>
            <a type="button"  style="text-align: center; color: #3a5a40; font-size: 60px;" class="fad fa-browser" href="https://burger-much.herokuapp.com/" role="button"></a>
        </div>
      </div>
    </div>
  <div class="col">
    <div class="card">
      <img src="assets/imgs/emt.gif" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"><strong>Employee Trak</strong></h5>
        <p class="card-text">A command-line application that allows the user to track employees and managers. It a node application whioch allowas the user to create, add , view and remove data.</p>
        <a type="button"  style="text-align: center; color: #3a5a40; font-size: 60px;" class="fab fa-github" href="https://github.com/danielthomas129/EMPLOYEE-TRACK-V2.0---FIGLET-LOLCAT--MySQL-" role="button"></a>
          <!-- <a class="btn fad fa-browser" href="https://burger-much.herokuapp.com/" role="button"></a> -->
      </div>
    </div>
  </div>
</div>
        );
    }
}

export default Portfolio;