import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../Features/Store/Store";
import { FaCar } from "react-icons/fa";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="container-fluid">
      <hr />
      <h3 className="subtitle is-3" style={{ color: "#87CEEB" }}>
        ADD New Car Details
      </h3>
      <form onSubmit={handleSubmit}>
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
            Name
          </span>
          <input
            type="text"
            className="input is-expanded"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div
          className="mb-3 input-group"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span
            className="input-group-text"
            id="basic-addon1"
            style={{ color: "#87CEEB" }}
          >
            Price ₹
          </span>
          <br />
          <input
            className=""
            value={cost || ""}
            onChange={handleCostChange}
            type="number"
          />
        </div>

        <button
          type="submit"
          className="btn btn-info"
          style={{ color: "white" }}
        >
          Submit
        </button>
      </form>
      <br />
    </div>
  );
}

export default CarForm;
