import React, { useState, useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";
import { PlayIcon } from "../Playbtn";
import "./videoSection.scss";

const VideoSection = ({ data, loading }) => {
  const carouselContainer = useRef();
  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 70)
        : container.scrollLeft + (container.offsetWidth + 70);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="videosSection">
      <BsFillArrowLeftCircleFill
        className="carouselLeftNav arrow"
        onClick={() => navigation("left")}
      />
      <BsFillArrowRightCircleFill
        className="carouselRighttNav arrow"
        onClick={() => navigation("right")}
      />
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos" ref={carouselContainer}>
            {data?.results?.map((item) => (
              <div
                key={item.id}
                className="videoItem"
                onClick={() => {
                  setShow(true);
                  setVideoId(item.key);
                }}
              >
                <div className="videoThumbnail">
                  <Img
                    src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`}
                  />
                  <PlayIcon />
                </div>
              </div>
            ))}
            <VideoPopup
              show={show}
              setShow={setShow}
              videoId={videoId}
              setVideoId={setVideoId}
            />
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default VideoSection;
