import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function FriendCard(props) {
  let navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/${props.name}`)}>
      <Image src={props.image} />
      <Name>
        {props.name}&nbsp;&nbsp;
        {props.surname}
      </Name>
    </Card>
  );
}
const Card = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
  cursor: pointer;
`;
const Image = styled.img`
  border-radius: 50%;
`;
const Name = styled.h3``;
