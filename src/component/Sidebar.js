import Order from './Order'
import Balance from './Balance';

import Container from 'react-bootstrap/Container';



function Sidebar() {
  return (
    <Container className='sidebar-container'>
      <div>
        <div>
            <h2 className='title' >Crypted Coders Token Swap</h2>
        </div>
        <div>
            <Balance />
        </div>
        <div>

        <Order />

        </div>
      </div>
    </Container>
  );
}

export default Sidebar;