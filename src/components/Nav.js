import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        let navItem = {
            textDecoration: 'none',
            color: 'gold',
            padding: '10px 20px',
        }
        return (
            <nav>
                <ul>
                   <li><a href="#home" style={navItem}>Home</a></li> 
                   <li><a href="#about" style={navItem}>About</a></li> 
                   <li><a href="#login" style={navItem}>Login</a></li> 
                </ul> 
            </nav>
        )
    }
}
