import Button from 'react-bootstrap/Button';

const Balance = () => {

    return (
      <div className='component exchange__transfers'>
        <div className='component__header flex-between'>
          <h2 className='balance-title' >Balance</h2>
          <div className='tabs'>
          <Button variant="primary" size="sm" active>
        Withdraw
      </Button>{' '}
      <Button variant="secondary" size="sm" active>
        Deposit
      </Button>
          </div>
        </div>
  
        {/* Deposit/Withdraw Component 1 (DApp) */}
  
        <div className='exchange__transfers--form'>
          <div className='flex-between'>
  
          </div>
  
          <form>
            <label htmlFor="token0"></label>
            <input className='input-section' type="text" id='token0' placeholder='0.0000' />
  
            <Button variant="primary" size="sm">
          Transact
        </Button>{' '}
          </form>
        </div>
  
        <hr />
  
        {/* Deposit/Withdraw Component 2 (mETH) */}
  
        <div className='exchange__transfers--form'>
          <div className='flex-between'>
  
          </div>
  
          <form>
            <label htmlFor="token1"></label>
            <input className='input-section' type="text" id='token1' placeholder='0.0000'/>
  
            <Button variant="primary" size="sm">
          Transact
        </Button>{' '}
          </form>
        </div>
  
        <hr />
      </div>
    );
  }
  
  export default Balance;