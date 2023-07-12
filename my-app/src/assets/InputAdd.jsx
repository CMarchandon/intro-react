export function InputAdd(props) {
    return (
        <div className="inputAdd">
        <input type="text" id="inputTodoList" name="newToDo" placeholder="Insert a new task"></input>
        <button onClick={props.onClick}>Add todo</button>
        </div>
    )

}
