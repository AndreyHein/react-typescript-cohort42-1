import { CompanyNav, CompanyLink } from "./styles";
import { APP_ROUTES } from "constants/routes";

function Clients() {
  return (
    <CompanyNav>
      <CompanyLink to={APP_ROUTES.CLIENTS + "/techcorp"}>TechCorp</CompanyLink>
      <CompanyLink to={APP_ROUTES.CLIENTS + "/greenenergy"}>
        GreenEnergy
      </CompanyLink>
      <CompanyLink to={APP_ROUTES.CLIENTS + "/healthplus"}>
        HealthPlus
      </CompanyLink>
    </CompanyNav>
  );
}

export default Clients;
