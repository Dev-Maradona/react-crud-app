import { Component } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

class App extends Component {

  state = {
    courses: [
      {name: "HTML5"},
      {name: "CSS"},
      {name: "JAVASCRIPT"}
    ],
    current: ''
  }

  render() {
    // Update List ..
    const updateItem = (e) => {
      this.setState({
        current: e.target.value
      })
    }

    // Add Item
    const addItem = e => {
      e.preventDefault()
      let current = this.state.current;
      let courses = this.state.courses;

      // Fix Issues
      if (current === '') {
        return
      }
      for (let i = 0; i < courses.length; i++) {
        if (current === this.state.courses[i].name) {
          console.log('You enter the same value whos in')
          return
        }
      }
      // Fix Issues

      courses.push({name: current})
      this.setState({
        courses: courses,
        current: ''
      })
    }
    
    // Delete Item
    const deleteItem = (index) => {
      let courses = this.state.courses;
      courses.splice(index, 1)
      this.setState({
        courses: courses
      })
    }

    const editItem = (index, value) => {
      let courses = this.state.courses;
      let course = courses[index];
      course['name'] = value;
      this.setState({
        courses
      })
    }
    
    // For List.js
    const {courses} = this.state;
    const CourseList = courses.map((c, index) => {
      return <List details={c} key={index} index={index} deleteItem={deleteItem} editItem={editItem} />
    })

    return (
      <section className="App">
        <h2>Add Course</h2>
        {/* <p>Course Is {this.state.courses[2].name}</p> */}
        <Form addItem={addItem} updateItem={updateItem} current={this.state.current} ></Form>
        {CourseList}
      </section>
    );
  }
}

export default App;