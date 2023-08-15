import { Fragment } from 'react';
import '../../../styles/text.css';

function GrayedOut(props) {
	return <p className='grayed-text'>{props.children}</p>;
}

export default GrayedOut;
