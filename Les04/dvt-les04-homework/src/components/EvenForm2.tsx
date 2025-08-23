import React, { Component } from 'react';
import IPersonnel from './IPersonnel';

interface IProps {
    onSubmit: (personnel: IPersonnel) => void;
}

class EvenForm2 extends Component<IProps, IPersonnel> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            id: 1,
            name: 'Thanh Tung',
            age: 18
        };
    }
    handleChange = (event: any) => {
        // lấy thành phần và dữ liệu trên form
        let name = event.target.name;
        let value = event.target.value;
        const val = (name === 'age' || name === 'id') ? Number(value) : value; // nếu là age hoặc id thì chuyển sang kiểu số, nếu không thì giữ nguyên kiểu chuỗi
        // cập nhật state
        this.setState(prevState => ({
            ...prevState,
            [name]: val,
        }));
    }
    // xu ly su kien submit
    handleSubmit = (event: any) => {
        event.preventDefault(); // ngăn chặn hành động mặc định của form (tải lại trang)
        this.props.onSubmit(this.state); // gọi hàm onSubmit từ props để gửi dữ liệu lên App
    }
    render() {
        return (
            <div>
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

                    </div>
                </form>
            </div>
        );
    }
}

export default EvenForm2;