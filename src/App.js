import { useState } from 'react';
import './App.css';
import FlippableCard from './components/flippable-card';
import CardForm from './components/cardform';

function App() {
	const [cardNumber, setCardNumber] = useState('XXXX XXXX XXXX XXXX');
	const [cardNumberFocus, setCardNumberFocus] = useState();
	const [focusNumber, setFocusNumber] = useState();
	const [focusName, setFocusName] = useState();
	const [focusMonth, setFocusMonth] = useState();
	const [focusYear, setFocusYear] = useState();
	const [focusCCV, setFocusCCV] = useState();
	const [cardName, setCardName] = useState('Kaj');
	const [cardMonth, setCardMonth] = useState('MM');
	const [cardYear, setCardYear] = useState('YY');
	const [cardCCV, setCardCCV] = useState('');
	const [focus, setFocus] = useState('');
	//const [cardBackside, setCardBackside] = useState();
	//const haha = 'haha';

	return (
		<div className="appContainer">
			<FlippableCard
				onCardNumber={cardNumber}
				onCardNumberFocus={cardNumberFocus}
				onFocusNumber={focusNumber}
				onFocusName={focusName}
				onFocusMonth={focusMonth}
				onFocusYear={focusYear}
				onFocusCCV={focusCCV}
				onCardName={cardName}
				onCardMonth={cardMonth}
				onCardYear={cardYear}
				onCardCCV={cardCCV}
				onFocus={focus}
			/>
			<CardForm
				onCardNumber={setCardNumber}
				cardNumber={cardNumber}
				onCardNumberFocus={setCardNumberFocus}
				onFocusNumber={setFocusNumber}
				onFocusName={setFocusName}
				onFocusMonth={setFocusMonth}
				onFocusYear={setFocusYear}
				onFocusCCV={setFocusCCV}
				cardNumberFocus={cardNumberFocus}
				onCardName={setCardName}
				cardName={cardName}
				onCardMonth={setCardMonth}
				cardMonth={cardMonth}
				onCardYear={setCardYear}
				cardYear={cardYear}
				onCardCCV={setCardCCV}
				cardCCV={cardCCV}
				onFocus={setFocus}
				//mycardBackside={setCardBackside}
			/>
		</div>
	);
}

export default App;
