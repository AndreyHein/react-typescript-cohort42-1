import { AvatarComponent, CardItem, PageWrapper } from "./styles";

import { SimpsonsCardProps } from "./types";

// function SimponsCard(props) {
function SimponsCard({
  firstName,
  lastName,
  avatar,
  job,
  hobby = "No Hobby",
}: SimpsonsCardProps) {
  // PROPS
  // 1. props - это обьект
  // 2. props - возможность передвать данные из одного компонента(родительского компонента) в другой(дочерний)

  // const image = <img className="avatar" src={homerSimpson.avatar} alt="Avatar" />;
  // const userhobby = getHomerHobby();
  // console.log(simpsonsData.default()); //  это getHomerHobby. default - это то что вы экспортировали как default

  const getSimpsonName = (): string => {
    return `${firstName} ${lastName}`;
  };

  return (
    <PageWrapper>
      {/* {image} */}
      {/* {homerSimpson.avatar ? (
        <img className="avatar" src={homerSimpson.avatar} alt="Avatar" />
      ) : (
        <img
          className="avatar"
          src={
            "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png"
          }
          alt="Avatar"
        />
      )} */}
      {/* Условный рендеринг */}
      {/* {homerSimpson.avatar && <img className="avatar" src={""} alt="Avatar" />} */}
      <AvatarComponent src={avatar} alt="Avatar" />
      <CardItem>Full name: {getSimpsonName()} </CardItem>
      <CardItem>Job: {job}</CardItem>
      <CardItem>Hobby: {hobby}</CardItem>
    </PageWrapper>
  );
}

export default SimponsCard;
