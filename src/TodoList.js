import React, {useState} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"

function TodoList() {
    const [items, setItems] = useState([]);

    let _inputElement;

    function addItem(e) {
        if (_inputElement.value !== "") {
            const newItem = {
                text: _inputElement.value,
                key: Date.now()
            };

            setItems(items.concat(newItem));

            _inputElement.value = "";
        }

        e.preventDefault();
    }

    function removeItem(key) {
        setItems(items.filter((item) => item.key !== key));
    }

    return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={addItem}>
                    <input ref={(a) => _inputElement = a}
                           placeholder="enter task">
                    </input>
                    <button type="submit">add</button>
                </form>
            </div>
            <TodoItems entries={items}
                       remove={removeItem}/>
        </div>
    );
}

export default TodoList;