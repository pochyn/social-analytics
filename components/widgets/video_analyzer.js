import Carousel from "../atoms/carousel/carousel";

const VideoAnalyzer = () => {
  const OPTIONS = { dragFree: true, containScroll: "trimSnaps" };
  const SLIDE_COUNT = 16;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <div className="h-20">
        <Carousel slides={SLIDES} options={OPTIONS} />
      </div>
    </>
  );
};

export default VideoAnalyzer;
