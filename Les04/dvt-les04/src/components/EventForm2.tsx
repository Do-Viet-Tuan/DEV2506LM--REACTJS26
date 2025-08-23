import { getValue } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import IStudent from './IStudent';

interface IProps {
    onSubmit: (student: IStudent) => void; // hàm để gửi dữ liệu lên App
    
}

class EventForm2 extends Component<IProps, IStudent> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            id: 1,
            name: "Tung",
            age: 0
        }
    }
    handleChange = (event: any) => {
        // lay thanh phan va du lieu tren form
        let name = event.target.name;
        let value = event.target.value;
        const val = (name === 'age' || name === 'id') ? Number(value) : value; // nếu là age hoặc id thì chuyển sang kiểu số, nếu không thì giữ nguyên kiểu chuỗi
        // cap nhat state
        this.setState(prevState => ({
            ...prevState,
            [name]: val,
        }));
    }
    // xu ly su kien submit
    handleSubmit = (event: any) => {
        event.preventDefault(); // ngăn chặn hành động mặc định của form (tải lại trang)
        // alert('Name: ' + this.state.name + '\nAge: ' + this.state.age + '\nID: ' + this.state.id);

        this.props.onSubmit(this.state); // gọi hàm onSubmit từ props để gửi dữ liệu lên App
    }

    render() {
        return (
            <div>
                <div>

                </div>
                <form method='post'>
                    <div>
                        Student ID:
                        <input type="number" name='id' onChange={this.handleChange} />
                    </div>
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

export default EventForm2;