import React from "react";
import  {Card } from "react-bootstrap";
import CryptoNewsApi from 'crypto-news-api'

const Api = new CryptoNewsAPI('804efd0db4edd6a6c0a0b3d1e69a55db')

const ProxyApi = new CryptoNewsAPI('804efd0db4edd6a6c0a0b3d1e69a55db', 'http://cryptocontrol_proxy/api/v1/public')

// Enable the sentiment datapoints
Api.enableSentiment()
 
// Get top news for Bitcoin
Api.getTopNewsByCoin("bitcoin")
    .then(function (articles) { console.log(articles) })
    .catch(function (error) { console.log(error) })



const News = (props) => {
  return (
    <div className="deck-of-cards">
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Bitcoin</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      The 1st Fiat Currency
    </Card.Text>
  </Card.Body>
</Card>
    </div>
  );
};

export default News;
