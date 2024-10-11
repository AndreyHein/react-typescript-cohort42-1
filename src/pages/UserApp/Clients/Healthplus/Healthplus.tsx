import { useNavigate } from "react-router-dom";
import { PageWrapper, ButtonControl } from "./styles";
import Button from "components/Button/Button";

function Healthplus() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      HealthPlus is a network of medical clinics providing a wide range of
      healthcare services and promoting a healthy lifestyle.
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Healthplus;
