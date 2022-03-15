import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/actions";

const App = () => {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<h1>Counter: {counter}</h1>
			<button onClick={() => dispatch(increment(5))}>increment</button>
			<button onClick={() => dispatch(decrement(8))}>decrement</button>
		</div>
	);
};

export default App;
