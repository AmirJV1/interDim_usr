import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
const CreateForm = () => {
	const [dTitle, setDTitle] = useState('');
	const [bCreation, setBCreation] = useState('');
	const [dMsg, setDMsg] = useState('');

	const url = `${process.env.REACT_APP_API_URL}archive/create`;

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(`${dTitle} ${bCreation} ${dMsg}`);
		console.log(url)
		const data = { dTitle, bCreation, dMsg };
		try {
			const res = await axios.post(url, data);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formDimName">
				<Form.Label>Dimension name:</Form.Label>
				<Form.Control
					value={dTitle}
					onChange={(e) => {
						setDTitle(e.target.value);
					}}
					type="text"
					placeholder="Enter the name dimension name"
				/>
				<Form.Text className="text-muted">
					All dimensions must begin with a "D", for example "D-431" or "D-32A"
				</Form.Text>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formDimBDate">
				<Form.Label>Believed creation date</Form.Label>
				<Form.Control
					value={bCreation}
					onChange={(e) => {
						setBCreation(e.target.value);
					}}
					type="text"
					placeholder="MM/DD/YYYY or 'Unknown'"
				/>
			</Form.Group>

			<Form.Group controlId="message" label="Dimention Message">
				<Form.Label>Dimension message</Form.Label>
				<Form.Control
					required
					as="textarea"
					placeholder="Message here"
					style={{ height: '300px' }}
					min="10"
					value={dMsg}
					onChange={(e) => {
						setDMsg(e.target.value);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check required type="checkbox" label="I am +18 years old" />
			</Form.Group>
			<Button variant="success" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default CreateForm;
