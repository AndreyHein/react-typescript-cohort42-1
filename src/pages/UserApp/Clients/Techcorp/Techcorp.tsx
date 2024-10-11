import { useNavigate } from "react-router-dom";
import { PageWrapper, ButtonControl } from "./styles";
import Button from "components/Button/Button";

function Techcorp() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      TechCorp is an innovative IT company specializing in software development
      and automation solutions for business processes.
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Techcorp;
