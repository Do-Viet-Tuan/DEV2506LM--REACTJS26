import React, { Component } from 'react';

type IState = {
    name: string;
    age: number;
    };

class EventClass1 extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'Thanh Tùng',
            age: 31,
        };
    }
    changeInfo = () => {
        this.setState({
            name: 'Son Tung',
            age: 18,
        });
    }

    render() {
        return (
            <div>
                <h2>Welcome, {this.state.name}</h2>
                <p>Your age is: {this.state.age}</p>
                <button type="button" className='btn btn-success' onClick={this.changeInfo}>Change Info</button>
            </div>
        );
    }
}

export default EventClass1;