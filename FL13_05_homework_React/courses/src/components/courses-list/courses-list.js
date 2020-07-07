import React from 'react';
import CourseListItem from '../course-list-item/index'
import './courses-list.css'

const CoursesList = ({courses, onDeleted, onEdited}) => {

    const coursesItems = courses.map((item) => {
        return(
            <li key={item.id} className="courses-item">
                <CourseListItem {...item}
                onDeleted={ () => onDeleted(item.id)}
                onEdited = { () => onEdited(item.id)} />
            </li>
        )
    })

    return (
        <ul className="courses-list">
           {coursesItems}
        </ul>
    )
}

export default CoursesList;