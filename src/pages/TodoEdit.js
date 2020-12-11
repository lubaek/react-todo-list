import { useState, useEffect } from "react";
import axios from "axios";
const TodoEdit = (props) => {
	console.log(props);
	const [todo, setTodo] = useState(null);
	const [value, setValue] = useState("");
	const { id } = props.match.params;
	const { history } = props;

	useEffect(() => {
		axios
			.get(`http://localhost:3000/todos/${id}`)
			.then((res) => {
				setTodo(res.data);
				setValue(res.data.title);
			});
	}, [id]);

	const updateTodo = () =>
		axios
			.put(`http://localhost:3000/todos/${id}`, {
				...todo,
				title: value,
			})
			.then(() => history.push("/"));

	const removeTodo = () =>
		axios
			.delete(`http://localhost:3000/todos/${id}`)
			.then(() => history.push("/"));

	return (
		todo && (
			<div className="container edit-form">
				<input
					type="text"
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
				<div>
					<button className="dark-btn" onClick={updateTodo}>
						update
					</button>
					<button className="dark-btn" onClick={removeTodo}>
						remove
					</button>
				</div>
			</div>
		)
	);
};

export default TodoEdit;
