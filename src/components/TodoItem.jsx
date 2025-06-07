function TodoItem(props) {
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    // Simplified delete function using filter
    function handleDelete(deleteid) {
        const updatedArr = activityArr.filter(item => item.id !== deleteid);
        setActivityArr(updatedArr);
    }

    return (
        <div className="flex justify-between items-center py-3 px-4 border-b border-gray-200">
            <p className="text-lg text-gray-800">{props.index + 1}. {props.activity}</p>
            <button 
                className="text-red-600 hover:text-red-800 transition duration-200"
                onClick={() => handleDelete(props.id)}
            >
                Delete
            </button>
        </div>
    );
}

export default TodoItem;
