import { CardComponent, CardItem } from "./styles";
import { Uni, UniversityListProps } from "./types";

export function UniversityList({ unis }: UniversityListProps) {
  if (unis.length === 0) {
    return "No universities found";
  }

  const unisList = unis.map((uni: Uni) => {
    return (
      <CardComponent>
        <CardItem>Website:{uni.web_pages}</CardItem>
        <CardItem>Name:{uni.name}</CardItem>
        <CardItem>Province:{uni.province}</CardItem>
      </CardComponent>
    );
  });
  return { unisList };
}
export default UniversityList;
