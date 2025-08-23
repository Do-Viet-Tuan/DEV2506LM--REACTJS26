import { getValue } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';

interface IState {
    name: string;
    age: number;
}

class EventForm1 extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "Tung",
            age: 0
        }
    }
    handleChange = (event: any) => {
        // lay thanh phan va du lieu tren form
        let name = event.target.name;
        let value = event.target.value;
        const val = name === 'age' ? Number(value) : value; // nếu là age thì chuyển sang kiểu số, nếu không thì giữ nguyên kiểu chuỗi
        // cap nhat state
        this.setState(prevState => ({
            ...prevState,
            [name]: val,
        }));
    }
    // xu ly su kien submit
    handleSubmit = (event: any) => {
        event.preventDefault(); // ngăn chặn hành động mặc định của form (tải lại trang)
        alert('Name: ' + this.state.name + '\nAge: ' + this.state.age);

    }
    render() {
        return (
            <div>
                <div>
                    <p>Student Name: {this.state.name}</p>
                    <p>Student Age: {this.state.age}</p>
                </div>
                <form method='post'>
                    <div>
                        Student Name:
                        <input type="text" name='name' onChange={this.handleChange} />
                    </div>
                    <div>
                        Student Age:
                        <input type="number" name='age' onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type='submit' className='btn btn-success' onClick={this.handleSubmit}>Submit</button>
                        <button type='reset' className='btn btn-danger'>Reset</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default EventForm1;