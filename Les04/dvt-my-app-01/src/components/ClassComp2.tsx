import React, { Component } from 'react';

interface Student {
    name: string;
    age: number;
    email: string;
    address?: string; // Optional property
}
interface ClassComp2Props {
    student: Student;
}
class ClassComp2 extends Component<ClassComp2Props> {
    render() {
        return (
            <div className='alert alert-primary'>
                <h2>Hello:
                    <br />
                    Name: {this.props.student.name}
                    <br /> Age: {this.props.student.age}
                    <br /> Email: {this.props.student.email}
                    <br /> Address: {this.props.student.address}
                </h2>
            </div>
        );
    }
}

export default ClassComp2;