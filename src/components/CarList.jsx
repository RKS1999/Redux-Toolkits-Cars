import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../Features/Store/Store";
import { FaCar } from "react-icons/fa";

const CarList = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{ color: "#87CEEB" }}>
              SL No.
            </th>
            <th scope="col" style={{ color: "#87CEEB" }}>
              <FaCar />
              Name
            </th>
            <th scope="col" style={{ color: "#87CEEB" }}>
              Price ₹
            </th>
            <th scope="col" style={{ color: "#87CEEB" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, i) => {
            return (
              <tr key={car.id}>
                <td>{i + 1}</td>
                <td>{car.name}</td>
                <td>₹{car.cost}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleCarDelete(car)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default CarList;
