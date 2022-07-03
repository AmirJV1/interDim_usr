import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import './archive.scss';
import Redacted from '../redacted_container/Redacted';
const Archive = (props) => {
	const { dTitle, bCreation, dDate, dMsg } = props.archive;
	const [msg, setMsg] = useState(dMsg);
	let a = '';
	useEffect(() => {
		{
			a = msg.split(' ').map((word) => (word.includes('redacted') ? `<i class="redacted-text">------Redacted------</i>` : word.includes('longRedacted') ? `<i class="redacted-text-long">- Redacted -</i>` : word));
			console.log(a.join("&nbsp;"));
			setMsg(a.join(" "))
		}
	}, []);
	return (
		<Container className="archive-body">
			<div className="archive-info">
				<p className="archive-dimension">
					<b>Dimension:</b> {dTitle}
				</p>
			</div>
			{/* <p className="archive-text">{dMsg}</p> */}
			<div dangerouslySetInnerHTML={{__html:`${msg}`}} className="archive-text"></div>
			<div className="archive-dates">
				<i>
					<b>Recovery date:</b> {dDate}
				</i>
				<i>
					<b>Believed creation date:</b> {bCreation}
				</i>
			</div>
		</Container>
	);
};

export default Archive;
