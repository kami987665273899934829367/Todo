import React, {Component} from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {items: []};
        this.addItems = this.addItems.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
    }

    addItems(e){
       if(this._inputElement.value !== "")
       {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }
        

        this.setState((prevState) => {
            return {
                items: prevState.items.concat(newItem)
            }
        });

        this._inputElement.value = "";
       }
        console.log(this.state.items);
        e.preventDefault();

    }

    deleteItems(key)
    {
        var filteredItems = this.state.items.filter(function(item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        })

    }


    render(){
        return(
            <div className="todolistMain">
                <div className="header">
                    <form onSubmit={this.addItems}>
                        <input type="text" placeholder="Enter your task" ref={(a) => this._inputElement = a}></input>
                        <button type="submit">Add</button>
                    </form>
                    <TodoItems entries={this.state.items} delete={this.deleteItems}/>
                </div>
                
            </div>
        )
    }

}

export default TodoList; 