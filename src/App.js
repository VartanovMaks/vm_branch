import './App.css';
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timedId = setInterval(
            ()=>this.tick(),
            this.props.interval
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({date: new Date()});
    }
     render() {
        return (
            <div>
                <h1>Привет, мир!</h1>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function App() {

    return (
        <div className="App">
           <Clock interval={1000}/>
            <Clock interval={2000}/>
            <Clock interval={3000}/>
        </div>
    );

}

export default App;
