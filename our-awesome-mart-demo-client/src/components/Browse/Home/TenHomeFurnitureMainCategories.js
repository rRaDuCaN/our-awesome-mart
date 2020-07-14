import React, { useEffect, useRef, useState } from 'react';
import FurnitureDepartment from './Furniture/FurnitureDepartment';
import {
	furnitureDepartmentsQueries,
	furnitureDepartments,
	subdepartmentNamesQuery,
	mainCategories,
} from '../../../apolloClient/Browse/Home/Furniture/furnitureQueries';
import { Switch, Route } from 'react-router-dom';
import { furnitureRoutes as routes, departmentRoutes } from './routePaths';
import { useQuery } from '@apollo/client';

// dummy components
// create parent level routes
// It's hoisted up because it runs once

let defaultRoute = (
	<Route exact path="/">
		<FurnitureDepartment
			// pass in the categories that are going to be queried from every department for data
			department={furnitureDepartmentsQueries[0].mainQuery}
			// pass in the paths to SideFiltersImplementation component, more exactly, to be used as paths for Link component
			routes={routes}
			category={furnitureDepartments[0]}
			subcategory={'livingRoomFurnitureMain'}
			subdepartments={mainCategories}
		/>
	</Route>
);
// end of dummy components

export default function TenHomeFurnitureMainCategories() {
	// preserve category names with useRef hook
	const categoryNames = useRef([]);
	// preserve children routes with useState, when data changes, a rerender will occur
	// will render only two times, at first load and immediately after calculation of children
	const [depRoutes, setDepRoutes] = useState([]);

	// documentation on apollo client homepage
	const { loading, data } = useQuery(subdepartmentNamesQuery, {
		onCompleted() {
			categoryNames.current = data.shopHomeFurnishing.homeFurniture.subdepartmentNames;
		},
		fetchPolicy: 'cache-first',
		partialRefetch: true,
	});

	// In this particular case behaves as componentDidMount and componentDidUpdate
	useEffect(() => {
		// do not perform unnecessary calculations,
		// rerender only when subdepartmentNames are fetched
		if (loading === false && data !== null) {
			// create children level routes
			const childrenRoutes = ((arr) => {
				let categories = [];
				let oneDepartmentRoutes = [];
					return arr.reduce((acc, _, currIndex) => {
						categories = Object.keys(furnitureDepartmentsQueries[currIndex].query);
						// get routes for one department
						oneDepartmentRoutes = categories.reduce((accInner, currInner, currInnerIndex) => {
							return [
								...accInner,
								// get individual route for every category
								<Route
									key={currIndex + '_' + currInnerIndex}
									exact
									path={departmentRoutes[furnitureDepartments[currIndex]][currInnerIndex]}
								>
									<FurnitureDepartment
										// pass in the categories that are going to be queried from every department for data
										department={furnitureDepartmentsQueries[currIndex].query[currInner][0]}
										// pass in the paths to SideFiltersImplementation component, more exactly, to be used as paths for Link component
										routes={departmentRoutes[furnitureDepartments[currIndex]]}
										category={furnitureDepartments[currIndex]}
										subcategory={currInner}
										subdepartments={arr[currIndex]}
									/>
								</Route>,
							];
						}, []);
						return [...acc, ...oneDepartmentRoutes];
					}, []);
			})(categoryNames.current);
			const parentRoutes = furnitureDepartments.reduce((acc, _, currIndex) => {
				// this function allows to dynamicaly create a query for any page in this particular department

				return [
					...acc, // get individual route for every category
					<Route key={currIndex + '_'} exact path={routes[currIndex]}>
						<FurnitureDepartment
							// pass in the categories that are going to be queried from every department for data
							department={furnitureDepartmentsQueries[currIndex].mainQuery}
							// pass in the paths to SideFiltersImplementation component, more exactly, to be used as paths for Link component
							routes={departmentRoutes[furnitureDepartments[currIndex]]}
							category={furnitureDepartments[currIndex]}
							subcategory={`${furnitureDepartments[currIndex]}Main`}
							subdepartments={categoryNames.current[currIndex]}
						/>
					</Route>,
				];
			}, []);
			const deps = [...parentRoutes, ...childrenRoutes];
			setDepRoutes(deps);
		}
	}, [loading, data]);

	return (
		<div className="fullWidth fullHeight p-rel">
			{loading === false && depRoutes.length !== 0 ? (
				<Switch>
					{defaultRoute}
					{depRoutes}
				</Switch>
			) : null}
		</div>
	);
}
     