import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Todos = () => {
	const [todos, setTodos] = useState([]);
	const [value, setValue] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:3000/todos/")
			.then((res) => setTodos(res.data));
	}, []);

	const addTodo = () => {
		if (value.trim().length === 0) return;

		axios
			.post("http://localhost:3000/todos/", {
				title: value,
				completed: false,
			})
			.then((res) => setTodos([...todos, res.data]))
			.then(() => setValue(""));
	};

	return (
		<div className="container">
			<div className="input-form">
				<input
					type="text"
					value={value}
					placeholder="What do you want to do?"
					onChange={(event) => setValue(event.target.value)}
				/>
				<button className="btn" onClick={addTodo}>
					add
				</button>
			</div>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<Link to={`/${todo.id}`}>{todo.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Todos;
