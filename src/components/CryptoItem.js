import React from 'react';

const CryptoItem = (props) => {
	const { CoinInfo } = props.crypto;

	return (
		<div className="item" onClick={() => props.openModal(CoinInfo.Name, CoinInfo.FullName)}>
			<span className="pos">{props.order}</span>
			<div className="image-wrap">
				<img src={`https://www.cryptocompare.com/${CoinInfo.ImageUrl}`} 
					alt={CoinInfo.Name} 
					className="image" />
			</div>
			<div className="text-wrap">
				<h2 className="title">{CoinInfo.FullName}</h2>
				<span className="symbol">{CoinInfo.Name}</span>
			</div>
	    </div>
	)
};

export default CryptoItem;