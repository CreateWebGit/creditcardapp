import { useState, useEffect, useRef } from 'react';
import './card.css';
import './flip-transition.css';
import Cardlist from '../cardform';
import background from './images/credit.jpeg';
import backgroundChip from './images/chip.jpg';
import MasterCard from './images/mastercard.png';
import Visa from './images/visa.png';
import Discover from './images/discover.png';
import { logDOM } from '@testing-library/react';

function Card({
	onCardNumber,
	onFocusNumber,
	onFocusName,
	onFocusMonth,
	onFocusYear,
	onFocusCCV,
	onCardName,
	onCardMonth,
	onCardYear,
	onCardCCV,
}) {
	const [myfocus, setMyfocus] = useState('1');
	const [mystyle, setMystyle] = useState({});
	const [creditcard, setCreditcard] = useState('visa');

	function getCreditCardType(accountNumber) {
		//start without knowing the credit card type
		var result;

		//first check for MasterCard
		if (/^5[1-5]/.test(accountNumber)) {
			result = 'mastercard';
			setCreditcard('mastercard');
		}

		//then check for Visa
		else if (/^4/.test(accountNumber)) {
			result = 'visa';
			setCreditcard('visa');
		}

		//then check for AmEx
		else if (/^3[47]/.test(accountNumber)) {
			result = 'amex';
			setCreditcard('amex');
		}

		return result;
	}

	let logo;
	if (creditcard == 'mastercard') {
		logo = <img src={MasterCard} height="40" width="50" />;
	} else if (creditcard == 'visa') {
		logo = <img src={Visa} height="40" width="50" />;
	} else if (creditcard == 'amex') {
		logo = <img src={Discover} height="40" width="50" />;
	}

	useEffect(() => {
		console.log(getCreditCardType(onCardNumber));
		//alert(onCardNumber);
		//GetCardType({ onCardNumber });
		if (onFocusNumber === true) {
			setMyfocus('2');
			setMystyle({
				marginTop: '92px',
				marginLeft: '50px',
				width: '200px',
				height: '30px',
				opacity: 1,
			});
		} else if (onFocusName === true) {
			setMyfocus('3');
			setMystyle({
				marginTop: '155px',
				marginLeft: '10px',
				width: '200px',
				height: '45px',
				opacity: 1,
			});
		} else if (onFocusMonth === true) {
			setMyfocus('3');
			setMystyle({
				marginTop: '155px',
				marginLeft: '220px',
				width: '70px',
				height: '45px',
				opacity: 1,
			});
		} else if (onFocusYear === true) {
			setMyfocus('3');
			setMystyle({
				marginTop: '155px',
				marginLeft: '220px',
				width: '70px',
				height: '45px',
				opacity: 1,
			});
		} else if (onFocusCCV === true) {
			setMyfocus('3');
			setMystyle({
				marginTop: '0px',
				marginLeft: '50px',
				width: '200px',
				height: '100px',
				opacity: 0,
			});
		}
	});

	return (
		<div className="card">
			<div
				style={{
					backgroundImage: `url(${background})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
				className="card-back">
				<div className="card-back-top"></div>
				<div className="card-back-ccv">
					<div className="card-back-ccv-title">ccv</div>
					<div className="card-back-ccv-number">{onCardCCV}</div>
				</div>
				<div className="card-back-loggo">{logo}</div>
			</div>
			<div
				style={{
					backgroundImage: `url(${background})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
				className="card-front">
				<div className="focusContainer" style={mystyle}></div>
				<div className="card-front-top">
					<div
						style={{
							backgroundImage: `url(${backgroundChip})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
						}}
						className="card-front-chip"></div>

					<div className="card-front-logo">{logo}</div>
				</div>
				<div className="card-front-midle">{onCardNumber}</div>
				<div className="card-front-bottom">
					<div className="cardHolderContainer">
						<div className="cardHolderTitle">Card Hold</div>
						<div className="cardHolderName">{onCardName}</div>
					</div>
					<div className="expiresContainer">
						<div className="cardHolderTitle">Expires</div>
						<div className="expiresNumber">
							{onCardMonth} / {onCardYear}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
