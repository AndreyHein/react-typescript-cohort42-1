import { useNavigate } from "react-router-dom";
import { PageWrapper, ButtonControl } from "./styles";
import Button from "components/Button/Button";

function Greenenergy() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      GreenEnergy focuses on renewable energy, offering eco-friendly solutions
      for both residential and industrial use.
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Greenenergy;
