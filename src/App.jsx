import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
	return (
		<>
			{/* Navbar */}
			<main>
				<NavBar />
				<Outlet />
			</main>
		</>
	);
}

export default App;
