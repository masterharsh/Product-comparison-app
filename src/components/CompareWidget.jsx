import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

const CompareWidget = ({ compare }) => {
  return (
    <>
      {compare.length >= 2 && (
        <div
          className="compare-widget"
          onClick={() => (window.location.href = "#compare-section")}
        >
          <FontAwesomeIcon icon="fa-solid fa-scale-balanced" />
        </div>
      )}
    </>
  );
};

export default CompareWidget;
