import React, {Component} from 'react';
import './course-list-item.css'

export default class CourseListItem extends Component {
    constructor() {
        super();

        this.state = {
            show: false
        }

        this.onDotsClick = () => {
            this.setState((state) => {
                return {
                    show: !state.show
                }
            })
        };
    }

     render() {
        const {data, name, description, duration, onDeleted, onEdited, additionalFunc} = this.props;
        const {show} = this.state;

        let classNames = "hiden"
        if (show) {
            classNames += 'show'
        }
        return (
            <span className='course-list-item'> 
                <span className="data">{data}</span>
                <span className="name">{name}</span>
                <span className="description">{description}</span>
                <span className="duration">{duration}</span>
                <span className="additional-function" onClick={this.onDotsClick}>{additionalFunc}</span>
                <span className={classNames}>
                    <button onClick={onEdited}>Edit</button>
                    <button onClick={onDeleted}>Remove</button>
                </span>
            </span>
        )
    }
}
