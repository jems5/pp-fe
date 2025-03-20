import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
  return (
    <div className="search-container">
      <button class="button-black">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        Search
      </button>
    </div>
  );
};

export default Button;
