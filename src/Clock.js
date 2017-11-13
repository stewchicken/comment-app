
import React, { Component } from 'react'

class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    // for init task, pulling data from ajax, set up timer
    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 2000)
    }


    // for destory task, clearning data, clear timer etc
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    // for some animation tasks, it must be done after mount (compoent inserted into DOM)
    componentDidMount(){

    }
    
    render() {
        return (
            <div>
                <h1>
                    <p>Current Time : </p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

export default Clock
