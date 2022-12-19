import FlipMove from "react-flip-move";

function TodoItems(props) {
    function remove(key) {
        props.remove(key);
    }

    const createTasks = (item) =>
        <li onClick={() => remove(item.key)} key={item.key}>{item.text}</li>;

    return (
        <ul className="theList">
            <FlipMove duration={250} easing="ease-out">
                {props.entries.map(createTasks)}
            </FlipMove>
        </ul>
    );
}

export default TodoItems;