import styled from "styled-components";

export default function FriendButton(props) {
  return <Button onClick={props.handleClick}>Friends</Button>;
}

const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 20px;
  border: 2px solid gray;
`;
