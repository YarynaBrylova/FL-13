import React, {Component} from 'react';
import './add-course-form.css';

export default class AddCourseForm extends Component {
    state = {
        name: '',
        description: '',
        duration: '',
        author: '',
        show: false
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    onDescriptionChange = (e) => {
        this.setState({
            description: e.target.value,
        })
    }

    onDurationChange = (e) => {
        this.setState({
            duration: e.target.value,
        })
    }

    onAuthorChange = (e) => {
        this.setState({
            author: e.target.value, 
        })
    }
    
    onSubmit =(e) => {
        e.preventDefault();
        this.props.onCourseAdded(this.state.name, this.state.description, this.state.duration, this.state.author)
        this.setState({
            name: '',
            description: '',
            duration: '',
            author: ''
        })
    }

    render() {
        return(
            <form onSubmit={this.onSubmit} className="course-form">
                <label > Title*
                    <input onChange={this.onNameChange}
                    value={this.state.name}/>
                </label>
                <label> Description*
                    <input onChange={this.onDescriptionChange}
                    value={this.state.description}/>
                </label>
                <label> Duration*
                    <input onChange={this.onDurationChange}
                    value={this.state.duration}/>
                </label>
                <label> Author*
                    <input onChange={this.onAuthorChange}
                    value={this.state.author}/>
                </label>
                <button>Save</button>
                <button>Cancel</button>
            </form>
        )
    }
}