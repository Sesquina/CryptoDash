import React from 'react';
import CryptoItem from './CryptoItem';

const CryptoList = (props) => {
	const cryptos = props.cryptos.map((crypto, index) => {
		return <CryptoItem 
				crypto={crypto} 
				key={index} 
				order={index + 1}
				openModal={props.openModal} />
	});

	return (
		<section>
			<h2 className="section-title">Current Most Popular Cryptos</h2>
		    <div className="list cryptos">{cryptos}</div>
		</section>
	);
};

export default CryptoList;