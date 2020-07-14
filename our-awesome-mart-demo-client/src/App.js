import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Home/NavigationBar/NavigationBar';
import TenHomeFurnitureMainCategories from './components/Browse/Home/TenHomeFurnitureMainCategories';

const PopOnSideMenuWrapper = React.lazy(() => import(/* webpackPrefetch: true */ './components/Home/NavigationBar/PopOnSideMenu/PopOnSideMenuWrapper'));

export default function App() {
	return (
		<Router>
			<NavigationBar />
			<Suspense fallback="">
				<PopOnSideMenuWrapper />
			</Suspense>  
			<TenHomeFurnitureMainCategories />
		</Router> 
	);
}
