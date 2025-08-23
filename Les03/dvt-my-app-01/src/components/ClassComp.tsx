import React, { Component } from 'react';

interface ClassCompProps {
    studentName: string;
}
    
class ClassComp extends Component<ClassCompProps> {
    render() {
        return (
            <div className='alert alert-danger'>
                <h2> Lay du lieu trong props</h2>
                <p>Student Name: {this.props.studentName}</p>
            </div>
        );
    }
}

export default ClassComp;