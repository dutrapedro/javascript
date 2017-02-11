import React, { Component } from 'react';
import dateFetcher from '../date-fetcher';

function getTodayDate() {
    return dateFetcher.fetch();
}

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time:  null
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: ( getTodayDate() ).toLocaleString()
            });
        }, 200);
    }

    render() {
        let currentTime = this.state.time;
        return (
            <div className="clock">
                { currentTime }
            </div>
        );
    }
}

export default Clock;