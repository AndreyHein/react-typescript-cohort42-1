import { ReactNode } from "react";

import { v4 } from "uuid";
import { Car } from "./types";
import { CardContainer, CardInfo, CardTitle, PageWrapper } from "./styles";

function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carList: ReactNode = cars.map((car: Car) => {
    return (
      <CardContainer key={v4()}>
        <CardTitle>Car`s info</CardTitle>
        <CardInfo>Model: {car.brand}</CardInfo>
        <CardInfo>Price: {car.price}</CardInfo>
        <CardInfo>Motor: {car.isDiesel ? "Diesel" : "Not Diesel"}</CardInfo>
      </CardContainer>
    );
  });
  return <PageWrapper>{carList}</PageWrapper>;
}

export default Homework_06;
