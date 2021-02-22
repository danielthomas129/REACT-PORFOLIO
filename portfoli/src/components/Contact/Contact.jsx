import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <main class="container flex-fill">
  <section class="row">
    <div class="col-lg-8">
      <form class="block form-horizontal">
        <h1 class="block-header">Contact</h1>
        <hr />
        <a href="https://github.com/danielthomas129">
          <img src="assets/imgs/gh.jpg" id=linkText alt="HTML tutorial" style="width:42px;height:42px;align-items: center;">Github
          </a>
          <a href="https://linkedin.com/in/danieltguadalupe">
            <img src="assets/imgs/linkedin.png" id=linkText alt="HTML tutorial" style="width:42px;height:42px;align-items: center;">LinkedIn
            </a>
            <a href="https://docs.google.com/document/d/1y-RjGFHzKfZxiMaW_7ag79V-THFbk2RGatbTLg4O_oI/edit?usp=sharing">
              <img src="assets/imgs/resume.png" id=linkText alt="HTML tutorial" style="width:42px;height:42px;align-items: center;">Resume
              </a>
            <a href= "mailto: danieltguadalupe@gmail.com"><img src="assets/imgs/Gmail-Logo.png" id=linkText alt="HTML tutorial" style="width:70px;height:42px;align-items: center;">Send Email</a>

          <hr/>
        <div class="form-group">
          <label for="name" class="col-sm-2 control-label">Name</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="name" placeholder="Name">
          </div>
        </div>
        <div class="form-group">
          <label for="email" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="email" placeholder="Email">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label" for="msg">Message</label>
          <div class="col-sm-10">
            <textarea id="msg" class="form-control" rows="3" placeholder="Message"></textarea>
          </div>
        </div>
        <button type="button" class="btn submit-btn btn-outline-dark" data-mdb-ripple-color="dark">
          Submit
        </button>        
      </form>
    </div>
  </section>
</main>
        );
    }
}

export default Contact;