import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import videoData from "./videos_data.json";

import AppIcon from "./AppIcon";
import AppTitle from "./AppTitle";
import Video from "./Video";
import SearchBar from "./SearchBar";

const App = () => {
  const [textInput, setTextInput] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    const searchText = event.target.value;
    setTextInput(searchText);

    const filtered = videoData.videos.filter((video) =>
      video.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredVideos(filtered);
  };

  const handleVideoSelection = (video) => {
    setSelectedVideo(video.url);
    setTextInput("");
    setIsFocused(false);
  };

  const highlightText = (text, search) => {
    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(regex, '<span class="highlight">$&</span>');
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  return (
    <>
      <Container fluid>
        <Row
          style={{ width: "100%" }}
          className="d-flex justify-content-center"
        >
          <AppTitle />

          <AppIcon />

          <Col md={6} sm={12}>
            <SearchBar
              textInput={textInput}
              handleInputChange={handleInputChange}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
              isFocused={isFocused}
              filteredVideos={filteredVideos}
              handleVideoSelection={handleVideoSelection}
              highlightText={highlightText}
            />

            {selectedVideo && (
              <div>
                <Video selectedVideo={selectedVideo}></Video>
                <Button
                  className="remove-button"
                  onClick={() => {
                    setSelectedVideo("");
                  }}
                >
                  Remove Video
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
