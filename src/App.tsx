import React, { Component } from 'react';
import { BigPlayButton, ControlBar, Player } from 'video-react';
import "video-react/dist/video-react.css";
import './App.css';
import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>


                <Player
                    src="http://media.w3.org/2010/05/bunny/movie.mp4"
                    fluid={false}
                    height="100%">
                    <ControlBar autoHide={true}/>
                    <BigPlayButton position="hide"/>
                </Player>
            </div>


        );
    }
}

export default App;
