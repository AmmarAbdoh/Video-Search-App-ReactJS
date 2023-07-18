const Video = ({ selectedVideo }) => {
  return (
    <div className="video-container">
      <iframe src={selectedVideo} title="Selected Video"></iframe>
    </div>
  );
};
export default Video;
