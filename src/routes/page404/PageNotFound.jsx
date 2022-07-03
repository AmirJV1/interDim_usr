import Container from 'react-bootstrap/esm/Container';
import "./pageNotFound.css"
const PageNotFound = () => {
	return (
		<Container className="page-not-found">
			<h1 className="warning"> 404 - Page Not Found!</h1>
            <img className="not-found-icon" src="images/notFoundIcon.png" alt="" />
		</Container>
	);
};

export default PageNotFound;
