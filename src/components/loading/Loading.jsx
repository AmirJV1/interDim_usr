import { Container } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import './loading.css';
const Loading = () => {
	return (
		<Container className="loading-container">
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
			<b>Loading...</b>
		</Container>
	);
};

export default Loading;
