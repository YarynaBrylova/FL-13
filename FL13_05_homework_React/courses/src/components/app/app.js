import React, {Component} from 'react';
import AppHeader from '../app-header/index';
import SearchPannel from '../search-pannel/index';
import CoursesList from '../courses-list/index'
// import AddButton from '../add-button/index';
// import AddCourseForm from '../add-course-form/index';
import './app.css'
import AddCourseBlock from '../add-button/add-button';


export default class App extends Component {
  maxId = 0;

  state = {
    coursesData : [
      this.createCourseItem('18.02.2018','Prerequisites','Webpack, AngularCLI, TypeScript','01h 34min'),
      this.createCourseItem('01.02.2018','Components','Components lifecycle, template DSL and data-building, Custom components','01h 34min'),
      this.createCourseItem('15.01.2018','Directives + Pipes','Directives, type of directives, built-in-directives, custom directive, pipes, built-in-pipes, custompipes, async pipe','01h 34min')
    ], 
    term: ''
  }

  createCourseItem (data, name, description, duration) {
    return {
      id: this.maxId++,
      data,
      name,
      description,
      duration,
      additionalFunc: '...'
    }
  }

  deleteItem = (id) => {
    this.setState(({coursesData}) =>{
      const curElemIndex = coursesData.findIndex((el) => el.id === id);
      const updatedCoursesData = [...coursesData.slice(0, curElemIndex), ...coursesData.slice(curElemIndex + 1)];
      return {
        coursesData: updatedCoursesData
      }
    })
  }

  editItem = (id) => {
    this.setState(({coursesData}) => {
      const curElemIndex = coursesData.findIndex((el) => el.id === id);
      const currentItem = coursesData[curElemIndex];
      const updatedItem = {...currentItem, duration: '02h 00min'}
      const updatedCoursesData = [...coursesData.slice(0, curElemIndex), updatedItem, ...coursesData.slice(curElemIndex + 1)];
      
      return {
       coursesData: updatedCoursesData
      }  
    })
  }

  addCourse = (data, name, description, duration) => {
    const newCourse= this.createCourseItem(data, name, description, duration);
  
    this.setState(({coursesData}) => {
      const updatedArray = [...coursesData, newCourse]
      return {
        coursesData: updatedArray
      }
    })
  }

  search(courses, term){
    if (term.length === 0) {
      return courses;
    }

     return courses.filter((course) => {
      return course.name.indexOf(term) > -1
    })
  }

  onSearchChange = (term) => {
    this.setState({term})
  }

  render() {
    const {coursesData, term} = this.state;
    const visibleCourses = this.search(coursesData, term)

    return(
    <div className="app-container">
      <AppHeader />
      <SearchPannel onSearchChange={this.onSearchChange}/>
      <AddCourseBlock onCourseAdded={this.addCourse}/>
      <CoursesList courses = {visibleCourses} 
      onDeleted={ this.deleteItem}
      onEdited={this.editItem}/>
    </div>
    )}
  }
