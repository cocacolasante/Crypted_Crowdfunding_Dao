import Navigation from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import NFTCard from "./component/NFTCards";
import Crowdfund from "./component/Crowdfund.component";
import NftHeader from "./component/NftHeader.component";


function App() {
  return <div>

  <Navigation />

  <main className=' grid'>
    <section className=' exchange exchange__section--left grid'>

      <Sidebar />


    </section>
    <section>
        <Crowdfund />
    </section>

    
  </main>
  <section className='centerfold'>
      <NftHeader />


      <NFTCard />

      

    </section>



</div>

}

export default App;
