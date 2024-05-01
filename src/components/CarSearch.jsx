import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../Features/Store/Store";
import { FaCar } from "react-icons/fa";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="container">
      <hr />
      <div
        className="mb-3 input-group"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <span
          className="input-group-text"
          id="basic-addon1"
          style={{ color: "#87CEEB" }}
        >
          <FaCar />
          Search
        </span>
        <input
          type="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      <hr />
    </div>
  );
}
export default CarSearch;
