import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import './archive.scss';

const Archive = (props) => {
	const { dTitle, bCreation, dDate, dMsg, autor } = props.archive;
	const [msg, setMsg] = useState(dMsg);
	let a = '';
	let b = '';
	useEffect(() => {
		try {
			a = msg.replace(/<\/?[^>]+(>|$)/g, '<b style="color:red"> corrupted file </b>');
			b = a
				.split(' ')
				.map((word) =>
					word.includes('@R')
						? `<i class="redacted-text">------Redacted------</i>`
						: word.includes('@LR')
						? `<i class="redacted-text">-----------------------Redacted-------------------------</i>`
						: word
				);
			//console.log(b.join('&nbsp;'));
			setMsg(b.join(' '));
		} catch (error) {}
	}, []);
	return (
		<Container className="archive-body">
			<div className="archive-info">
				<p className="archive-dimension">
					<b>Dimension:</b> {dTitle} <b>Autor:</b> {autor}
				</p>
			</div>
			{/* <p className="archive-text">{dMsg}</p> */}
			<div dangerouslySetInnerHTML={{ __html: `${msg}` }} className="archive-text"></div>
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
