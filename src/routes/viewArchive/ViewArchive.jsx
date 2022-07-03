import { Container } from 'react-bootstrap';
import Archive from '../../components/archive/Archive';
import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/loading/Loading';
const ViewArchive = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState({});
	const { id } = useParams();
	const url = `${process.env.REACT_APP_API_URL}archive/${id}`;
	const getData = async () => {
		try {
			const data = await axios.get(url);
			setIsLoading(false);
			if (data.data.success) {
				setUser(data.data.archive);
			} else {
				setIsError(true);
			}
		} catch (error) {
			setIsError(true);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<Container>
			<h1>Thanks for helping us!</h1>
			{isError ? (
				<Alert key={'danger'} variant={'danger'}>
					Oh no, something went wrong! <Alert.Link href={`/archive/${id}`}>Try again</Alert.Link>
				</Alert>
			) : (
				''
			)}
			{isLoading ? <Loading /> : <Archive archive={user} />}
		</Container>
	);
};

export default ViewArchive;
