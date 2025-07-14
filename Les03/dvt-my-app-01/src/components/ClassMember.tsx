import React, { Component } from 'react';

//Dinh nghia kieu cho state
interface classMemberState {
    name: string;
    age: number;
    email: string;
}

class ClassMember extends Component<{}, classMemberState> {
    // State 
    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'Tung Thanh Nguyen',
            age: 31,
            email: 'mtpentertainment@gmail.com'
        };  
    }
        //handleChange
    handleChange = () => {
        this.setState({
            name: 'Nguyen Thanh Tung',
            age: 32,
            email: 'mtpentertainment@gmail.com'
        });
    }

    render() {
        return (
            <div className='alert alert-success'>
                <h2>Ban co the doc du lieu trong state</h2>
                <hr />
                <p>Xin chao, {this.state.name}</p>
                <p>Tuoi: {this.state.age}</p>
                <p>Email: {this.state.email}</p>
                <hr />
                <p>Ban co the thay doi du lieu trong state bang cach click vao nut duoi day</p>
                <button onClick={this.handleChange}>Chanage info</button>
            </div>
        );
    }
}

export default ClassMember;