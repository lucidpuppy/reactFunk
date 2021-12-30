import React, { Component } from 'react';

class Header extends React.Component {
    state = {
        // "../public/dryclean.png",
        imageUrl: "https://picsum.photos/200",
    }
    render() { 
        return <React.Fragment className='App-header'>
                    <img src={this.state.imageUrl} alt=""/>
                    <h1>Sawan Drycleaners</h1>
                </React.Fragment>;
    }
}
 
export default Header;