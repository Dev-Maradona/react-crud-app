import React, { Component, Fragment } from 'react'

class List extends Component {

    state = {
        isEdit: false
    }

    updateValue = e => {
        e.preventDefault()
        this.props.editItem(this.props.index, this.input.value)
        this.toggleEdit()
    }

    // Render List
    renderList = () => {
        return (
            <>
                <div className="btns">
                    <button className="edit" onClick={() => this.toggleEdit()}>Edit Course</button>
                    <button className="delete" onClick={this.props.deleteItem}>Delete Item</button>
                </div>
                <div className="title">
                    {this.props.details.name}
                </div>
            </>
        )
    }

    // Render Update
    renderUpdate = () => {
        return (
            <form onSubmit={this.updateValue}>
                <input type="text" ref={(v) => this.input = v} defaultValue={this.props.details.name} placeholder="Update Item" />
                <button className="update">Update</button>
            </form>
        )
    }

    //Toggle Edit
    toggleEdit = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    render() {
        const {isEdit} = this.state
        return (
            <Fragment>
                { isEdit ? this.renderUpdate() : this.renderList()}
            </Fragment>
        )
    }
}

export default List