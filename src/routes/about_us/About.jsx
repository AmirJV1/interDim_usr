import { Container } from 'react-bootstrap';
import Redacted from '../../components/redacted_container/Redacted';
const About = () => {
	return (
		<Container>
			<h1 className="main-title">About us...</h1>
			<p>
				There is not much information that can be given to you without risking our HQ
				location to be exposed or our hacking methods to be discovered by the organization.
			</p>
			<p>
				All we can say is that we are a group of people that joined forces against the
				organization with their "All classified data" policies, since <Redacted /> the
				organization had known about the existence of multiple dimensions, and all the
				wonders and dangers that their discoveries imply had been kept secret since then.
			</p>
			<p>
				All what we can do against them is leak a part of all their archives, so the
				common public can read and not prevail in ignorance...
			</p>
			
		</Container>
	);
};

export default About;
