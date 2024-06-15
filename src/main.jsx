import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import Feauters from './pages/Feauters.jsx';
import Resources from './pages/Resources.jsx';
import Pricing from './pages/Pricing.jsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/features',
				element: <Feauters />,
			},
			{
				path: '/pricing',
				element: <Pricing />,
			},
			{
				path: '/resources',
				element: <Resources />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
