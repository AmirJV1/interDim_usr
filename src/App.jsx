import { Route, Routes } from 'react-router-dom';

import './App.css';
import MainNavbar from './components/navbar/MainNavbar';
//Routes
import Home from './routes/home/Home';
import About from './routes/about_us/About';
import Archives from './routes/dim_archives/Archives';
import PageNotFound from './routes/page404/PageNotFound';
import Support from './routes/support/Support';
import ViewArchive from "./routes/viewArchive/ViewArchive"
function App() {
	return (
		<div className="App">
			<MainNavbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/archives" element={<Archives />} />
				<Route path="/support" element={<Support />} />
				<Route path="/archive/:id" element={<ViewArchive />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
