import React, { Component } from 'react';
interface ClassComp1Props {
    name?: string; // Optional prop
    age?: number; // Optional prop
    // Define any props you want to use in this component
}
class ClassComp1 extends Component<ClassComp1Props> {
    render() {
        return (
            <div className='alert alert-success'>
                <h2>Thong Tin</h2>
                <br />Name: {this.props.name}
                <br />Age: {this.props.age}
                
            </div>
        );
    }
}

export default ClassComp1;