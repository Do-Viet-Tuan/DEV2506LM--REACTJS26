import React, { Component } from 'react';

interface IState {
    name: string;
    age: number;
}
class EvenForm1 extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'Tung Son Nguyen',
            age: 18,
        };
    }

    handleChange = (event: any) => {
        // Lay thanh phần và dữ liệu trên form
        let name = event.target.name;
        let value = event.target.value;
        const val = name === 'age' ? Number(value) : value; // Nếu là age thì chuyển sang kiểu số, nếu không thì giữ nguyên kiểu chuỗi
        // Cập nhật state
        this.setState(prevState => ({
            ...prevState,
            [name]: val,
        }));
    }

    // Xử lý sự kiện submit
    handleSubmit = (event: any) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form (tải lại trang)
        alert('Name: ' + this.state.name + '\nAge: ' + this.state.age);
    }


    render() {
        return (
            <div>
                <div>
                    <p>Personnel name: {this.state.name}</p>
                    <p>Personnel age: {this.state.age}</p>
                </div>
                <form action="post">
                    <div> Personnel name:
                        <input type="text" name='name' onChange={this.handleChange} />
                    </div>
                    <div> Personnel age:
                        <input type="number" name="age" onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type='submit' className='btn btn-success' onClick={this.handleSubmit}>Submit</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default EvenForm1;