import * as React from 'react';
import { useState, useEffect } from 'react';
import DynamicComponent from './comps/DynamicComponent';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	const [greeting, setGreeting] = useState<any>([]);

	useEffect(() => {
		async function getGreeting() {
			try {
				const res = await fetch('/api/hello');
				const greeting = await res.json();
				setGreeting(greeting);
			} catch (error) {
				console.log(error);
			}
		}
		getGreeting();
	}, []);

	return (
		<main className="container my-5">
			{greeting.map((data) => {
                return <DynamicComponent key={data.id} data={data} />
            })}
		</main>
	);
};

interface AppProps {}

export default App;