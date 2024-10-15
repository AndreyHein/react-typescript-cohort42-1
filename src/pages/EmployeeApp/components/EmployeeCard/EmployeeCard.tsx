import { CardContainer, CardWrapper, CardItem } from "./styles";
import { useContext } from "react";
import { EmployeeContext } from "pages/EmployeeApp/components/EmployeeLayout/EmployeeLayout";

function EmployeeCard() {
  const { userData } = useContext(EmployeeContext);
  console.log(userData);
  return (
    <CardContainer>
      <CardWrapper>
        {userData && (
          <>
          <CardItem>{userData.name}</CardItem>
          <CardItem>{userData.surname}</CardItem>
          <CardItem>{userData.age}</CardItem>
          <CardItem>{userData.jobPosition}</CardItem>
        </>
        )}
      </CardWrapper>
    </CardContainer>
  );
}
export default EmployeeCard;