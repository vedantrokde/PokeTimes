import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact="true" path="/" element={<Home/>} />
					<Route path="/about" element={<About/>} />
					<Route path="/contact" element={<Contact/>} />
					<Route path="/:postId" element={<Post/>} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
