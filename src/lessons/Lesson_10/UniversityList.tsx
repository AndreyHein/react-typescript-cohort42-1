import { v4 } from "uuid";

import { CardItem } from "./styles";
import { Uni, UniversityListProps } from "./types";

export function UniversityList({ unis }: UniversityListProps) {
  return (
    <>
      {unis.map((uni: Uni) => (
        <div key={v4()}>
          {uni.web_pages.map((webPage) => (
            <CardItem>Website: {webPage}</CardItem>
          ))}
          <CardItem>Name: {uni.name}</CardItem>
          {uni.country && <CardItem>Country: {uni.country}</CardItem>}
        </div>
      ))}
    </>
  );
}
export default UniversityList;
