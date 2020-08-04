import React from 'react';
import moment from 'moment';

//moment.unix is a timestamp

const NewsItem = (props) => {
	const { crypto } = props;

	return (
		<div className="item">
			<a href={crypto.url} target="_blank" rel="noopener noreferrer">
				<h3 className="title">{crypto.title}</h3>
				<span className="date">{moment.unix(crypto.published_on).format("DD MMM YYYY hh:mm a")}</span>
				<span className="source">Source: {crypto.source_info.name}</span>
			</a>
	    </div>
	)
};

export default NewsItem;