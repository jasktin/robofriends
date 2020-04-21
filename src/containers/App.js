import React, { Component } from 'react'
import CardList from '../components/CardList'
import { robots } from '../robots'
import Nav from '../components/Nav.js'
import SearchBox from '../components/SearchBox'
import ErrorBoundary from '../components/ErrorBoundary'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchValue: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})
        })
    }

    searchChange = (event) => {
        // Set new value for searchValue
        this.setState({ searchValue: event.target.value })
    }

    render() {
        // Filter out the robot
        let filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
        })

        // If the user database is empty
        return !robots.length ? <h1>Loading</h1> :
            // Show the new filtered robots
            <div>
                <Nav />
                <h1 className='tc ttu code yellow'>RoboFriends</h1>
                <SearchBox searchChange={this.searchChange} />
                <ErrorBoundary>
                    <CardList robots={filterRobots} />
                </ErrorBoundary>
            </div>
    }
}