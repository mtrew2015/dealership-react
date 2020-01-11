import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import axios from 'axios';

function App() {
	const [ data, setData ] = useState([]);

	useEffect(() => {
		axios
			.get('https://carapi.mtrew.now.sh/api/cars')
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='App'>
			<Header />
            <LandingPage data={data} />
		</div>
	);
}

export default App;
