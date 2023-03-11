import { useState, useEffect } from 'react';
import './cardform.css';
import Cardlist from './card/card';

function CardForm({
	onCardNumber,
	onCardNumberFocus,
	onFocusNumber,
	onFocusName,
	onFocusMonth,
	onFocusYear,
	onFocusCCV,
	onFocus,
	onCardName,
	onCardMonth,
	onCardYear,
	onCardCCV,
	mycardBackside,
	onClick,
	props,
}) {
	const [cardNumber, setCardNumber] = useState();
	const [cardNumberFocus, setCardNumberFocus] = useState(false);
	const [cardName, setCardName] = useState();
	const [cardMonth, setCardMonth] = useState();
	const [cardYear, setCardYear] = useState();
	const [cardCCV, setCardCCV] = useState();

	const [val, setVal] = useState('');

	function cc_format(value) {
		const v = value
			.replace(/\s+/g, '')
			.replace(/[^0-9]/gi, '')
			.substr(0, 16);
		const parts = [];

		for (let i = 0; i < v.length; i += 4) {
			parts.push(v.substr(i, 4));
		}

		return parts.length > 1 ? parts.join(' ') : value;
	}

	const onCardNumberInput = e => {
		onCardNumber(val);
		setVal(e.target.value);
	};

	const onCardInputFocusNumber = () => {
		onCardNumberFocus(false);
		onFocusNumber(true);
	};

	const onCardInputFocusName = () => {
		onCardNumberFocus(false);
		onFocusName(true);
	};

	const onCardInputFocusMonth = () => {
		onCardNumberFocus(false);
		onFocusMonth(true);
	};

	const onCardInputFocusYear = () => {
		onCardNumberFocus(false);
		onFocusYear(true);
	};

	const onCardInputFocusCVV = () => {
		onCardNumberFocus(true);
		onFocusCCV(true);
	};

	const onCardNameInput = e => {
		onCardName(e.target.value);
	};

	const onCardMonthSelect = e => {
		onCardMonth(e.target.value);
	};

	const onCardYearSelect = e => {
		onCardYear(e.target.value);
	};

	const onCardCCVInput = e => {
		onCardCCV(e.target.value);
	};

	return (
		<div className="cardFormContainer">
			<div className="cardFormContent">
				<div className="inputTitle">Card Number</div>
				<input
					className="input"
					//value={cardNumber}
					value={cc_format(val)}
					onChange={onCardNumberInput}
					onFocus={onCardInputFocusNumber}
					onBlur={onFocusNumber(false)}
					type="text"
					name="name"
				/>
				<div className="inputTitle">Card Name</div>
				<input
					className="input"
					value={cardName}
					onChange={onCardNameInput}
					onFocus={onCardInputFocusName}
					onBlur={onFocusName(false)}
					type="text"
					name="name"
				/>
				<div className="cardDateContainer">
					<div>
						<div className="inputTitle">Expiration Date</div>
						<select
							name="month"
							className="inputMonth"
							value={cardMonth}
							onChange={onCardMonthSelect}
							onFocus={onCardInputFocusMonth}
							onBlur={onFocusMonth(false)}>
							<option value="month">Month</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="05">05</option>
							<option value="06">06</option>
							<option value="07">07</option>
							<option value="08">08</option>
							<option value="09">09</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</select>
						<select
							name="Year"
							className="inputYear"
							value={cardYear}
							onChange={onCardYearSelect}
							onFocus={onCardInputFocusYear}
							onBlur={onFocusYear(false)}>
							<option value="year">Year</option>
							<option value="23">2023</option>
							<option value="24">2024</option>
							<option value="25">2025</option>
							<option value="26">2026</option>
							<option value="27">2027</option>
							<option value="28">2028</option>
							<option value="29">2029</option>
						</select>
					</div>
					<div>
						<div className="inputTitle">CVV</div>
						<input
							className="input"
							//value={searchTerm}
							//onChange={onSearchInput}
							type="text"
							name="name"
							onChange={onCardCCVInput}
							onFocus={onCardInputFocusCVV}
							onBlur={onFocusCCV(false)}
						/>
					</div>
				</div>
				<div className="submitContainer">
					<button className="btnSubmit">Submit</button>
				</div>
			</div>
		</div>
	);
}

export default CardForm;
