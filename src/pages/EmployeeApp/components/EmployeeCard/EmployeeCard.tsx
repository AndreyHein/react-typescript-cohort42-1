import { useContext } from "react";

import { EmployeeContext } from "pages/EmployeeApp/components/EmployeeLayout/EmployeeLayout";

import { CardLabel, CardContainer, CardItem } from "./styles";

function EmployeeCard() {
  const { userData } = useContext(EmployeeContext);
  console.log(userData);
  return (
    <CardContainer>
      {userData && (
        <>
          <CardLabel>
            Name:
            <CardItem>{userData.name}</CardItem>
          </CardLabel>
          <CardLabel>
            Surname:
            <CardItem>{userData.surname}</CardItem>
          </CardLabel>
          <CardLabel>
            Age:
            <CardItem>{userData.age}</CardItem>
          </CardLabel>
          <CardLabel>
            Job Position:
            <CardItem>{userData.jobPosition}</CardItem>
          </CardLabel>
        </>
      )}
    </CardContainer>
  );
}
export default EmployeeCard;
