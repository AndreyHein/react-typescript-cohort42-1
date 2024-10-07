import { v4 } from "uuid";

import { CardComponent, CardItem, Domain, UniName, Country } from "./styles";
import { Uni, UniversityListProps } from "./types";

export function UniversityList({ unis }: UniversityListProps) {
  return (
    <>
      {unis.map((uni: Uni) => (
        <CardItem key={v4()}>
          
          <UniName>{uni.name}</UniName>
          {uni.country && <Country>Country: {uni.country}</Country>}
          {uni.web_pages.map((webPage) => (
            <Domain>Website: {webPage}</Domain>
          ))}
        </CardItem>
      ))}
    </>
  );
}
export default UniversityList;
