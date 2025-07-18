import React, { ChangeEvent, Component, FormEvent } from 'react';

interface IState {
    name: string;
    age: number;
    course: string;
}

class EventForm3 extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: "Thanh Tung",
            age: 25,
            course: "ReactJS"
        };
    }

    handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        const val = name === 'age' ? Number(value) : value;
        this.setState(prev => ({
            ...prev,
            [name]: val
        }));
    };

    handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        alert(`Name: ${this.state.name}\nAge: ${this.state.age}\nCourse: ${this.state.course}`);
        console.log("Submitted Data:", this.state);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </p>
                    <p>Age:
                        <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
                    </p>
                    <p>Course:
                        <select name="course" value={this.state.course} onChange={this.handleChange}>
                            <option value="ReactJS">ReactJS</option>
                            <option value="NodeJS">NodeJS</option>
                            <option value="Angular">Angular</option>
                            <option value="VueJS">VueJS</option>
                            <option value="Django">Django</option>
                        </select>
                    </p>
                    <button type="submit" className='btn btn-success'>Submit</button>
                </form>
            </div>
        );
    }
}

export default EventForm3;
