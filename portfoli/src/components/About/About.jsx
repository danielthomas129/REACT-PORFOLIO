import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <main class="container">
            <section class="row">
              <div class="col-md-8">
                <article class="block">
                  <h1 class="block-header">About Me</h1>
                  <hr />
                  <img src="assets/imgs/hs.png" alt="" id="about-image" />
                  <p>I'm a Full Stack Web Developer who utilizes experience in design and marketing to develop professional stylish and dynamic web applications that offer an aesthetically pleasing interactive user experience. My desire to create and learn lead to earn a certificate in Full Stack Web Development through the University of Georgia Tech.</p>
                  <br />
                  <p>This experience taught me the technical skills needed such as HTML, CSS, JavaScript, JQuery,  along with my strong desire to learn and utilize my problem solving skills when debugging applications and working on team projects.  I worked with my team to develop an app called “Picky” which is a mobile friendly designed application to help the user find recipes targeted towards certain dietary restrictions, food allergies, and specific ingredients.
                    I am eager to utilize my skills in web development, marketing, and sales as part of an ever changing fast-paced team to build dynamic web experience that connects with the user. 
                   
                  </p>
                </article>
              </div>
            </section>
          </main>
        );
    }
}

export default About;