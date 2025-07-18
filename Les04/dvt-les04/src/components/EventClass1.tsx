import React, { Component } from 'react';

type IState = {
  name: string;
  age: number;
};

class EventClass1 extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: 'Nguyễn Thanh Tùng',
      age: 31,
    };
  }
  changeInfo = () => {
    this.setState({
      name: 'Son Tung',
      age: 30,
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to, {this.state.name}; tuoi: {this.state.age}</h2>
        <button type="button" className='btn btn-success' onClick={this.changeInfo}>Change Info</button>
      </div>
    );
  }
}

export default EventClass1;
