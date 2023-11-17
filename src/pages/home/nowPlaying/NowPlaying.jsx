import React, {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Carousel from '../../../components/carousel/Carousel'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'

const NowPlaying = () => {
    const [endpoint, setEndpoint] = useState('movie');
    const {data, loading} = useFetch(`/${endpoint}/now_playing`);
    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    }
  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Now_Playing</span>
            <SwitchTabs
            data={["Movies", "TV Shows"]}
            onTabChange={onTabChange}
            />
        </ContentWrapper>
        <Carousel
        data={data?.results}
        loading={loading}
        endpoint={endpoint}
        />
    </div>
  )
}

export default NowPlaying