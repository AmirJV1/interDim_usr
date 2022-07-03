import { Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import CreateForm from '../../components/creationForm/CreateForm';
const Support = () => {
	const [showForm, setShowForm] = useState(false);
	return (
		<Container>
			<h1 className="main-title">Support us! 💛</h1>
			<p>You can help us by creating some archives:</p>
			<Button
				onClick={() => {
					setShowForm(!showForm);
				}}
			>
				{showForm ? 'Hide Creation form' : 'Create!'}
			</Button>
			{showForm ? <CreateForm /> : ''}
			<h2 className="main-title">Or... you can Donate💖:</h2>
		</Container>
	);
};

export default Support;
