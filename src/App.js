import React, { Component, Fragment } from 'react'
import axios from 'axios';

// componenets
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

// Layout
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// 3rd party
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid'

// Pages
import About from './components/pages/About';

import './App.css'
export class App extends Component {
  state ={
    todos : []
  }
  // HTTP Requests using axios
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}));
  }
  markComplete = (id) =>{
    this.setState({ todos:this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) })
}

delTodo = (id) =>{
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => this.setState({todos : [...this.state.todos.filter(todo=> todo.id !== id
    )]}))

}

addTodo = (title)=>{
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed:false,
    // this line uses the spread operatot [...array] to create a 
    // clone of an array and the second parameter will be added to it.
  }).then(res => this.setState({todos: [...this.state.todos, res.data]}))
}

  render() {
    return (
      <Router>
      <div className="App">
      <div className="container">
      <Header />
      <Route exact path="/" render={props =>(
        <Fragment>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </Fragment>
      )} />
      <Route path="/about" component={About} />
      <Footer />
      </div>
      </div>
      </Router>
      )
  }
}

export default App;
