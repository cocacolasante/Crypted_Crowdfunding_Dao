import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NFTCard() {
  return (
    <div className='card-container' >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>NFT Name 1</Card.Title>
        <Card.Text>
          Meta about the nft
        </Card.Text>
        <Button variant="primary">Shop Now</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default NFTCard;