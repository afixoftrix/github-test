import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 2.4rem 0;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    div.bio {
        font-size: 1.4rem;
    }
`;
const NameBox = styled.div`
    display: flex;
    margin-bottom: 1rem;
`;
const User = styled.div`
    font-size: 2rem;
    color: #0366d6;
    margin-right: 1rem;
`
const Name = styled.div`
    font-size: 1.6rem;
    line-height: 2.4rem;
`

const UserCard = ({user, name, bio}) => {
  return (
      <Container>
          <NameBox>
              <User>{user}</User>
              <Name>{name}</Name>
          </NameBox>
          <div className="bio">
              {bio}
          </div>
      </Container>
  );
}

UserCard.defaultProps = {
    user: "Anon",
    name: "Anon Yeemus",
    bio: "I like turtles"
}

export default UserCard
