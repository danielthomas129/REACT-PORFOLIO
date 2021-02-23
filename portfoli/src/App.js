import React, { Component } from 'react';
import Header from "./components/Header/Header";
import  "./App.css"
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


class App extends Component {
    render() {
        return (
            
            <div>
                <Header />
                <br />
                <About />
                <br />
                <hr />
                <Portfolio />
                <br />
                <hr />
                <Contact />
                <br />
                <hr />
                <Footer />
                
            </div>
        );
    }
}

export default App;