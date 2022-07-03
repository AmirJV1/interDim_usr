import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Archive from '../../components/archive/Archive';
import axios from 'axios';
import './archives.scss';
import { useEffect, useState } from 'react';
//Firebase

const Archives = () => {
	//state vars
	const [archives, setArchives] = useState([]);
	const url = `${process.env.REACT_APP_API_URL}archive/rand`;

	//obtener la info
	useEffect(() => {
		const getData = async () => {
			const data = await axios.get(url);
			setArchives(data.data);
			console.log(data.data);
		};
		getData();
	}, []);

	return (
		<Container className="archive-container">
			<h1 className="main-title">InterDim Archives</h1>
			<Container className="archive-list-container">
				{archives.map((archive) => {
					return <Archive archive={archive} key={archive.id} />;
				})}
			</Container>
			<div className="options-menu">
				<Button variant="dark">Load more</Button>
			</div>
		</Container>
	);
};

export default Archives;
