import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function FriendsDetail(props) {
  let { name } = useParams();

  let chosenFriend =
    props.fetched &&
    props.data.find((friend) => {
      return friend.name.first === name;
    });
  console.log(chosenFriend);
  return (
    props.fetched && (
      <DetailSection>
        <BigImg src={chosenFriend.picture.large} />
        <MoreInfo>
          <h1>
            {chosenFriend.name.first}&nbsp;&nbsp;
            {chosenFriend.name.last}
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",

              border: "1px solid blue",
            }}
          >
            <p>messages</p>
            <p>contacts</p>
            <p>about me</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p>security</p>
            <p>about me</p>
          </div>
        </MoreInfo>
      </DetailSection>
    )
  );
}

const BigImg = styled.img`
  width: 200px;
`;
const DetailSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border: 1px solid green;
`;
const MoreInfo = styled.div`
  border: 1px solid red;
  width: 40%;
`;
