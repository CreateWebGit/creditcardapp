import './flippable-card.css';
import Card from './card/card';
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';

function FlippableCard(props) {
	const [showFront, setShowFront] = useState(true);
	//alert(props.oncardBackside);

	useEffect(() => {
		if (props.onCardNumberFocus == true) {
			setShowFront(false);
		} else {
			setShowFront(true);
		}
	});
	const [focus, setFocus] = useState();
	useEffect(() => {
		if (props.onFocus === 'hej') {
			setFocus('hej');
		}
	});
	return (
		<>
			{showFront ? (
				<div className="flippable-card-container">
					<CSSTransition in={true} timeout={300} classNames="flip">
						<Card
							onCardNumber={props.onCardNumber}
							onCardNumberFocus={props.onCardNumberFocus}
							onFocusNumber={props.onFocusNumber}
							onFocusName={props.onFocusName}
							onFocusMonth={props.onFocusMonth}
							onFocusYear={props.onFocusYear}
							onFocusCCV={props.onFocusCCV}
							onCardName={props.onCardName}
							onCardMonth={props.onCardMonth}
							onCardYear={props.onCardYear}
							onCardCCV={props.onCardCCV}
							onFocus={focus}
							onClick={() => {
								setShowFront(false);
							}}
						/>
					</CSSTransition>
				</div>
			) : (
				<div className="flippable-card-container">
					<CSSTransition in={false} timeout={300} classNames="flip">
						<Card
							onCardNumber={props.onCardNumber}
							onCardNumberFocus={props.onCardNumberFocus}
							onFocusNumber={props.onFocusNumber}
							onFocusName={props.onFocusName}
							onFocusMonth={props.onFocusMonth}
							onFocusYear={props.onFocusYear}
							onFocusCVV={props.onFocusCVV}
							onCardName={props.onCardName}
							onCardMonth={props.onCardMonth}
							onCardYear={props.onCardYear}
							onCardCCV={props.onCardCCV}
							onFocus={focus}
							onClick={() => {
								setShowFront(false);
							}}
						/>
					</CSSTransition>
				</div>
			)}
		</>
	);
}

export default FlippableCard;
