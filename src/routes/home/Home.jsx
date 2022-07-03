import { useNavigate } from 'react-router-dom';

import './home.css';

import Redacted from '../../components/redacted_container/Redacted';
//Bootstrap
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";

const Home = () => {
	const navigate = useNavigate();
	const navigateTo = (url) => {
		navigate(`/${url}`);
	};
	return (
		<Container className="home-container">
			<h1 className="main-title">Welcome to the inter-dimensional Archives</h1>
			<div className="intro-description">
				<p>
					Dear explorer, we, in use of our experimental interdumensionnal airtifacts have
					managed to intercept some of the organization comms, and were able to leak them
					through here, the administrators may delete some extra classified leaks or
					redact some information from existing leaks, we know that this might be
					frustrating sometimes, but there is nothing we can do, those are the rules{' '}
				</p>
				<p>
					We believe that information is valuable and must be shared, so that's our main
					goal, also we have found some usefull information at the west coast of{' '}
					<Redacted />
					<Redacted />
					<Redacted />,
					<Redacted /> including technologies that will help with further research, so
					please if anyone is near of that area, please contact <Redacted />
					<Redacted />, <Redacted />
					<Redacted />
					<Redacted />
					<Redacted /> in worst case scenario, please send an email to
					<Redacted />
					<Redacted />
					<Redacted />
					<Redacted />
					<Redacted />, thanks.
				</p>
			</div>
			<div className="warning-container">
				<h2>Warning</h2>
				<p>
					some contents over here may be traumatizing or even corrupt, so we do not take
					responsibility for anything that appears on this site
				</p>
				<i>
					If connection flickers or fails more than 3 times in a row, please abandon the
					site inmediately or the lurker may visit you
				</i>
			</div>
			<Button
				onClick={() => {
					navigateTo('archives');
				}}
				className="btn-continue"
				variant="outline-success"
			>
				Continue
			</Button>
		</Container>
	);
};

export default Home;
