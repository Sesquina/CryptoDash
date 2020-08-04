import React from 'react';
import NewsItem from './NewsItem';

const NewsList = (props) => {
	const news = props.news.map((article, index) => {
		return <NewsItem 
				crypto={article} 
				key={index} 
				order={index + 1} />
	});

	return (
		<section>
			<h2 className="section-title">Latest Crypto News</h2>
		    <div className="list news">{news}</div>
	    </section>
	);
};

export default NewsList;