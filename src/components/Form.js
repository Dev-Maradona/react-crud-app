import React, {useState} from 'react'

function Form(props) {
    return (
        <form onSubmit={props.addItem}>
            <input type="text" onChange={props.updateItem} value={props.current} placeholder="Enter your item name"></input>
            <button className="add">Add</button>
        </form>
    )
}

export default Form