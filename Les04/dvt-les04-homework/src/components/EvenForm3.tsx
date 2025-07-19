import React, { Component } from 'react';

interface IState {
    name: string;
    age: number;
    career: string;
}

class EvenForm3 extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            career: 'Please choose one'
        };
    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        const val = name === 'age' ? Number(value) : value;
        this.setState(prev => ({
            ...prev,
            [name]: val
        }));
    };
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Name: ${this.state.name}\nAge: ${this.state.age}\nCareer: ${this.state.career}`);
        console.log("Submitted Data:", this.state);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type="number" name="age" onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>Career:
                            <select name="career" value={this.state.career} onChange={this.handleChange}>
                                <option value="" disabled>Please choose one</option>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                                <option value="Data Analyst">Data Analyst</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="QA/QC Engineer">QA/QC Engineer</option>
                            </select>
                        </p>
                    </div>
                    <p></p>
                    <button type="submit" className='btn btn-success'>Submit</button>
                </form>
            </div>
        );
    }
}

export default EvenForm3;