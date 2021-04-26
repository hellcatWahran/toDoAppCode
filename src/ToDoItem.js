import React from 'react';

const ToDoItem = (props) => {
    return (
        <div className="item">
            <p>{props.text}</p>
            <button onClick={() => props.deleteItem(props.id)}>x</button>
        </div>

    )
}

export default ToDoItem;