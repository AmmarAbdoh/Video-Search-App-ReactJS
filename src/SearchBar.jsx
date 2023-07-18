import DropDownMenu from "./DropDownMenu";
import { InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const SearchBar = ({
  textInput,
  handleInputChange,
  handleFocus,
  handleBlur,
  isFocused,
  filteredVideos,
  handleVideoSelection,
  highlightText,
}) => {
  return (
    <>
      <InputGroup className="mb-3 mt-3">
        <FormControl
          placeholder="Search for a video.."
          value={textInput}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <DropDownMenu
          textInput={textInput}
          isFocused={isFocused}
          filteredVideos={filteredVideos}
          handleVideoSelection={handleVideoSelection}
          highlightText={highlightText}
        />
      </InputGroup>
    </>
  );
};
export default SearchBar;
