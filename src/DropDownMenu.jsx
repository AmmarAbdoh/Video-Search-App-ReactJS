import { Dropdown } from "react-bootstrap";
import videoData from "./videos_data.json";

const DropDownMenu = ({
  textInput,
  isFocused,
  filteredVideos,
  handleVideoSelection,
  highlightText,
}) => {
  return (
    <>
      {textInput.length === 0 && isFocused && (
        <Dropdown show>
          <Dropdown.Menu>
            {videoData.videos.map((video, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => {
                  handleVideoSelection(video);
                }}
              >
                {video.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
      {textInput.length > 0 && (
        <Dropdown show>
          <Dropdown.Menu>
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video, index) => (
                <Dropdown.Item
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: highlightText(video.name, textInput),
                  }}
                  onClick={() => handleVideoSelection(video)}
                ></Dropdown.Item>
              ))
            ) : (
              <Dropdown.Item className="disabled-item" disabled>
                No videos found
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};
export default DropDownMenu;
