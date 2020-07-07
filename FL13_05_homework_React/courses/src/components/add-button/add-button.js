import React, {Component} from 'react';
import './add-button.css'

export default class AddCourseBlock extends Component {
    state = {
        data: '',
        name: '',
        description: '',
        duration: '',
        show: false
    }

    onDataChange = (e) => {
        this.setState({
            data: e.target.value,
        })
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
    
    onSubmit =(e) => {
        e.preventDefault();
        this.props.onCourseAdded(this.state.data, this.state.name, this.state.description, this.state.duration)
        this.setState({
            data: '',
            name: '',
            description: '',
            duration: ''
        })
    }

    onAddButtonClick  = () => {
        this.setState(() => {
            return {
                show: true
            }
        })
    };

    onSaveButtonClick = () => {
        this.setState(() => {
            return {
                show: false
            }
        });
    }

    render(){
        const {show} = this.state;

        let classNames = "hiden";
        if (show) {
            classNames += 'show'
        }

        return(
        <div>
           <button className="add-button"  onClick={this.onAddButtonClick}>Add course</button> 
           <form  className={classNames} onSubmit={this.onSubmit}> 
                <label > Data*
                    <input onChange={this.onDataChange}
                    value={this.state.data}
                    required/>
                </label>
                <label> Title*
                    <input onChange={this.onNameChange}
                    value={this.state.name}
                    required/>
                </label>
                <label> Description*
                    <input onChange={this.onDescriptionChange}
                    value={this.state.description}
                    required/>
                </label>
                <label> Duration*
                    <input onChange={this.onDurationChange}
                    value={this.state.duration}
                    required/>
                </label>
                <button onClick={this.onSaveButtonClick}>Save</button>
                <button>Cancel</button>
            </form>
        </div>
        )
    }
 }