import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function FriendsDetail(props) {
  const [isContactClicked, setIsContactClicked] = useState(false);
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
            }}
          >
            <p>messages</p>
            <p onClick={() => setIsContactClicked(true)}>contacts</p>
            <p>about me</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p>security</p>
            <p>about me</p>
          </div>
          <div style={{ display: isContactClicked ? "block" : "none" }}>
            <p>phone: {chosenFriend.phone}</p>
            <p>
              adres: {chosenFriend.location.street.name}
              {chosenFriend.location.street.number}
            </p>
            <p>email: {chosenFriend.email}</p>
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
`;
const MoreInfo = styled.div`
  width: 40%;
`;
