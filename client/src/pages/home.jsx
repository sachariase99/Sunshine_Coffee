import Header from '../components/header';
import About from '../components/about';
import LineSpacer from '../components/lineSpacer';
import ShopNow from '../components/shopNow';
import Testimonies from '../components/testimonies';

const Home = () => {

  return (
    <div>
      <Header />
      <About />
      <LineSpacer />
      <ShopNow />
      <LineSpacer />
      <Testimonies />
    </div>
  )
}

export default Home