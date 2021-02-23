import React, { Component } from 'react';

import CobaltImg from '../../imgs/demo.gif';
import Weather from '../../imgs/weather.png';
import Picky from '../../imgs/Picky.gif';
import Burger from '../../imgs/mab.gif';
import Trak from '../../imgs/Emt.gif';
import Fit from '../../imgs/ftd.gif';




class Portfolio extends Component {
    render() {
        return (
        <div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src={CobaltImg} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title"><strong>Cobalt</strong></h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <a type="button"  class="anchor-tag fab fa-github btn-lg"href="https://github.com/danielthomas129/Cobalt" ></a>
                                <a type="button"  class="anchor-tag fad fa-browser" href="https://cobalt-canvas.herokuapp.com/" role="button"></a>
                            </div>
                        </div>
                    </div>
                </div>


        <div class="col">
            <div class="card">
                <img src={Picky} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"><strong>Picky</strong></h5>
                    <p class="card-text">This app was designed to help busy people find recipes quickly while still being mindful of allergies and diet preferences.</p>
                    <a type="button"  class="anchor-tag fab fa-github" href="https://github.com/ncastaldi/project1" role="button"></a>
                    <a type="button"  class="anchor-tag fad fa-browser" href="https://www.castaldi.dev/project1-picky/" role="button"></a>

                </div>
            </div>
        </div>

    

        <div class="col">
            <div class="card">
                <img src={Weather} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"><strong>Weather Dashboard</strong></h5>
                    <p class="card-text">This application was created to find a weather condition of a given city both the current and 5-Days forecast at the same time. The server-side API used to get response data object is retrieved from the Open Weather APi.</p>
                    <a type="button"  class="anchor-tag fab fa-github" href="https://github.com/danielthomas129/Weather-Dashboard-API" role="button"></a>
                    <a type="button"  class="anchor-tag fad fa-browser" href="https://danielthomas129.github.io/Weather-Dashboard-API/" role="button"></a>
                </div>
            </div>
        </div>


        <div class="col">
            <div class="card">
                <img src={Burger} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"><strong>Munch A Burger</strong></h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a type="button"  class="anchor-tag fab fa-github" href="https://github.com/danielthomas129/BURGER" role="button"></a>
                    <a type="button"  class="anchor-tag fad fa-browser" href="https://burger-much.herokuapp.com/" role="button"></a>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card">
                <img src={Fit} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"><strong>Fitness-Tracker</strong></h5>
                    <p class="card-text">This is a Fitness Tracking App. which allows users to to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.</p>
                    <a type="button"  class="anchor-tag fab fa-github" href="https://github.com/danielthomas129/Fitness-Tracker" role="button"></a>
                    <a type="button"  class="anchor-tag fad fa-browser" href="https://floating-plateau-83723.herokuapp.com/" role="button"></a>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card">
            <img src={Trak} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"><strong>Employee Trak</strong></h5>
                    <p class="card-text">A command-line application that allows the user to track employees and managers. It a node application whioch allowas the user to create, add , view and remove data.</p>
                    <a type="button"  class="anchor-tag fab fa-github" href="https://github.com/danielthomas129/EMPLOYEE-TRACK-V2.0---FIGLET-LOLCAT--MySQL-" role="button"></a>
                </div>
            </div>
        </div>
    </div>
            </div>
        );
    }
}

export default Portfolio;