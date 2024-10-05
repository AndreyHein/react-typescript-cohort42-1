import { CardComponent, CardItem } from "./styles";
import { Uni, UniversityListProps} from "./types";
import {v4} from "uuid";

function UniversityList({ unis }: UniversityListProps) {
//   if (unis.length === 0) {
//     return ("No universities found");
//   }

  const unisList = unis.slice(0,15).map((uni: Uni) => {
    return (
      <CardComponent key={v4()}>
        <CardItem>Website:{uni.web_pages}</CardItem>
        <CardItem>Name:{uni.name}</CardItem>
        <CardItem>Country:{uni.country}</CardItem>
      </CardComponent>
    );
  });
  return { unisList };
}
export default UniversityList;
