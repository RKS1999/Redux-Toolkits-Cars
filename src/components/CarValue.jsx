import { useSelector } from "react-redux";
import { FaCar } from "react-icons/fa";


function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );

  return (
    <div className="container">
      <hr />
      <h1 style={{ color: "#87CEEB" }}><FaCar />Total Price ₹ :</h1>
      <h2 style={{ color: "brown" }}>₹{totalCost}</h2>
    </div>
  );
}

export default CarValue;
