import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import NowPlaying from './nowPlaying/NowPlaying';
import GetStarted from './getStarted/GetStarted';
import './home.scss'
const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular/>
      <TopRated />
      <NowPlaying />
      <GetStarted />
      <div style={{ height: "fit-content" }}></div>
    </div>
  )
}

export default Home