import FriendCard from "./FriendCard";
import styled from "styled-components";
import FriendButton from "./FriendButton";

export default function Container(props) {
  return (
    <ContainerBox>
      <FriendButton handleClick={props.handleClick} />
      {props.isFriendBtnClicked && (
        <FriendsSection>
          {props.data.map((friend) => {
            return (
              <FriendCard
                image={friend.picture.thumbnail}
                name={friend.name.first}
                surname={friend.name.last}
              />
            );
          })}
        </FriendsSection>
      )}
    </ContainerBox>
  );
}
const ContainerBox = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
`;
const FriendsSection = styled.section`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;
