import React from 'react';
import ToDoItem from './ToDoItem';
import './App.css'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentItem: "",
            items: []
        }
    }

    changeHandler = (e) => {
        this.setState({
            currentItem: e.target.value
        });
    }

    addItem = (e) => {
        e.preventDefault();
        if (this.state.currentItem!==""){
            this.setState({
                items: [this.state.currentItem, ...this.state.items],
                currentItem: ""
            })
        }
    }

    deleteItem = (id) => {
        const newItems = this.state.items.filter((item,index) => index!==id);
        this.setState({
            items: newItems
        })
    }

    render() {
        return (
            <div className="body">
                <h1 className="heading">To Do App</h1>
                <div className="main-div">
                    <form onSubmit={this.addItem}>
                        <input 
                        type="text"
                        placeholder="Enter item..."
                        onChange={this.changeHandler}
                        value={this.state.currentItem}
                        />
                        <button type="submit">Add</button>
                    </form>
                    <div className="item-box">
                    {this.state.items.map((data, index) => 
                        <ToDoItem text={data} key={index} id={index} deleteItem={this.deleteItem}/>
                    )}
                    </div>

                        
                </div>
                <p className="footer">Made with ReactJS by me.<br/><a href="https://github.com/hellcatWahran"
                style={{textDecoration: `none`,
                        color: `greenyellow`}}
                target="_blank"
                rel="noreferrer"
                >My Github</a></p>
            </div>

        )
    }
}