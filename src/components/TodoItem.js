import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle= () => {
        // return 
        return{
            backgroundColor: '#f4f4f4',
            padding:'10px',
            borderBottom: '1px solid black',
            textDecoration: this.props.todo.completed?
            'line-through':'none'
        }
        
    }
    // markComplete(e){
    //     console.log(this.props);
    // }
    render() {
        const { id, title } = this.props.todo;
        const btnStyle = {
            background:'#ff0000',
            color: '#fff',
            border:'none',
            padding:'5px 9px',
            borderRadius: '50%',
            cursor:'pointer',
            float:'right'
        }
        return (
            <div style={this.getStyle()}>
           <p>
           <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
        {' '}
           {title}
           <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
           </p>
            </div>
        )
    }

}


//Protpypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default TodoItem
