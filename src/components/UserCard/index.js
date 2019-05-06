import React from 'react'
import styled from 'styled-components'
import avy from '../../assets/images/anon.png'

const Container = styled.div`
    padding: 2.4rem 0;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    div.bio {
        font-size: 1.4rem;
    }
`;
const Flex = styled.div`
    display: flex;
`
const Avatar = styled.img`
    width: 48px;
    height: 48px;
    margin-right: 1rem;
`
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

const UserCard = ({avatar, user, name, bio, link}) => {
  return (
      <Container>
          <Flex>
              <div>
                  <Avatar src={avatar} alt="avatar" />
              </div>
              <div>
                  <NameBox>
                      <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <User>{user}</User>
                      </a>
                      <Name>{name}</Name>
                  </NameBox>
                  <div className="bio">{bio}</div>
              </div>
          </Flex>
      </Container>
  );
}

UserCard.defaultProps = {
    avatar: avy,
    bio: "I like turtles",
    name: "Anon Yeemus",
    user: "Anon",
}

export default UserCard
