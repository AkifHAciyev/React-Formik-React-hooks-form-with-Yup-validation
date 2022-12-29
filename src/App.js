import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ReactFormik from './components/ReactFormik';
import ReactHooksForm from './components/ReactHooksForm';

function App() {
	return (
		<div className="App">
			<div className="header">
				<ul>
					<li>
						<Link to="/">React Formik</Link>
					</li>
					<li>
						<Link to="/hookForm">React Hook Form</Link>
					</li>
				</ul>
			</div>
			<Routes>
				<Route path="/" element={<ReactFormik />} />
				<Route path="/hookForm" element={<ReactHooksForm />} />
			</Routes>
		</div>
	);
}

export default App;
