import styled from "@emotion/styled";

import { colors } from "styles/colors";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  flex: 1;
  padding: 40px;
  background-color: ${colors.BACKGROUND_WHITE};
`;

export const HEADER = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const H1 = styled.p`
  font-size: 24px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  color: ${colors.TEXT_BLUE};
`;

export const H2 = styled.p`
  font-size: 18px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${colors.TEXT_BLUE};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1420px;
  gap: 20px;
`;

export const SearchForm = styled.form`
  @media (max-width: 650px) {
    width: 100%;
  }
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 650px;
  gap: 20px;
  padding: 25px 0px;
`;

export const InputComponent = styled.div`
  width: 100%;
  border-radius: 4px;
  box-shadow: 0.5px 2px 7px ${colors.SHADOW_BLUE};
`;

export const ButtonsContainer = styled.div`
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const ButtonComponent = styled.div`
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  width: 20%;
  min-width: 200px;
  padding: 0px 0px;
  border-radius: 4px;

  &:hover {
    box-shadow: 1px 2px 10px ${colors.PRIMARY_BLUE};
  }
`;

export const CardComponent = styled.div`
  max-width: 1420px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin: 0px auto;
  padding: 25px 0px;
`;

export const CardItem = styled.div`
  @media (max-width: 650px) {
    width: 100%;
  }
  position: relative;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 1px 2px 7px ${colors.SHADOW_BLUE};
  padding: 20px;
  height: 200px;
  width: 450px;
  gap: 10px;
  color: ${colors.TEXT_BLUE};
  &:hover {
    box-shadow: 1px 2px 10px ${colors.PRIMARY_BLUE};
  }
`;

export const UniName = styled.p`
  font-size: 24px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  font-style: normal;
  text-align: left;
  padding-bottom: 10px;
`;

export const StateName = styled.p`
  font-size: 18px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  padding-bottom: 10px;
`;

export const Country = styled.p`
  font-size: 18px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  padding-bottom: 10px;
`;

export const Domain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  font-size: 18px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  padding-bottom: 10px;
`;

export const WebSiteLink = styled.a`
  font-size: 18px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  padding-bottom: 10px;
`;

export const ErrorComponent = styled.p`
  font-size: 32px;
  color: red;
  font-weight: bold;
  text-align: center;
`;
