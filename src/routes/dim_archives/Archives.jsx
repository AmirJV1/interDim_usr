import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Archive from '../../components/archive/Archive';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import './archives.scss';
import { useEffect, useState } from 'react';
import Loading from '../../components/loading/Loading';
//Firebase

const Archives = () => {
	//state vars
	const [archives, setArchives] = useState([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [counterLoadMore, setCounterLoadMore] = useState(0);
	const url = `${process.env.REACT_APP_API_URL}archive/rand`;

	//obtener la info
	const getData = async () => {
		try {
			const data = await axios.get(url);
			//console.log(data.data);
			setArchives([...archives, ...data.data]);
			setIsLoading(false);
		} catch (error) {
			setIsError(true);
			setIsLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);

	const loadMore = async () => {
		getData();
		setIsLoading(true);
		setCounterLoadMore(counterLoadMore + 1);
	};

	return (
		<Container className="archive-container">
			<h1 className="main-title">InterDim Archives</h1>
			{isLoading ? (
				<Container className="loading-container">
					<Loading />
				</Container>
			) : (
				''
			)}
			{isError ? (
				<Alert key={'danger'} variant={'danger'}>
					Oh no, something went wrong! <Alert.Link href="/archives">Try again</Alert.Link>
				</Alert>
			) : (
				''
			)}
			<Container className="archive-list-container">
				{archives.map((archive) => {
					return <Archive key={archive._id} archive={archive} />;
				})}
			</Container>
			<div className="options-menu">
				<Button onClick={loadMore} variant="dark">
					Load more
				</Button>
			</div>
		</Container>
	);
};

export default Archives;
