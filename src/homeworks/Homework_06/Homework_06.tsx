import { ReactNode } from "react";
import "./styles.css";
import { v4 } from "uuid";
import { Car } from "./types";

function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carList:ReactNode = cars.map((car: Car) => {
    return (
      <div key={v4()} className="card-contanier">
        <h1 className="card-title">Car`s info</h1>
        <p className="card-info">Model: {car.brand}</p>
        <p className="card-info">Price: {car.price}</p>
        <p className="card-info">
          Motor: {car.isDiesel ? "Diesel" : "Not Diesel"}
        </p>
      </div>
    );
  });
  return <div className="homework06_wrapper">{carList}</div>;
}

export default Homework_06;
