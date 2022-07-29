import Navigation from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import NFTCard from "./component/NFTCards";


function App() {
  return <div>

  <Navigation />

  <main className=' grid'>
    <section className=' exchange exchange__section--left grid'>

      <Sidebar />


    </section>
    <section className='centerfold'>

      <NFTCard />

      

    </section>
  </main>

  {/* Alert */}

</div>

}

export default App;
