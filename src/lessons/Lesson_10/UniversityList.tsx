import { v4 } from "uuid";

import { CardItem, Domain, UniName, Country, WebSiteLink } from "./styles";
import { Uni, UniversityListProps } from "./types";

export function UniversityList({ unis }: UniversityListProps) {
  return (
    <>
      {unis.map((uni: Uni) => (
        <CardItem key={v4()}>
          <UniName>{uni.name}</UniName>
          {uni.country && <Country>Country: {uni.country}</Country>}
          <Domain>
            Website:
            {uni.web_pages.map((webPage) => (
              <WebSiteLink>
                {
                  <a href={webPage} target="_blank">
                    {webPage}
                  </a>
                }
              </WebSiteLink>
            ))}
          </Domain>
        </CardItem>
      ))}
    </>
  );
}
export default UniversityList;
