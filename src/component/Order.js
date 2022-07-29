import Button from 'react-bootstrap/Button';

const Order = () => {

    return (
      <div className="component exchange__orders">
        <div className='component__header flex-between'>
          <h2>New Order</h2>
          <div className='tabs'>
          <Button variant="primary" size="sm" active>
        Buy
      </Button>{' '}
      <Button variant="secondary" size="sm" active>
        Sell
      </Button>
          </div>
        </div>
  
        <form>
          <input className='input-section' type="text" id='amount' placeholder='0.0000' />
  
          <input className='input-section' type="text" id='price' placeholder='0.0000'/>
  
          <Button variant="primary" size="sm">
          Transact
        </Button>{' '}
        </form>
      </div>
    );
  }
  
  export default Order;