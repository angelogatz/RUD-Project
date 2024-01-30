import React from 'react'
import { Container, Paragraph, Title, UserCard, UserImageBubble } from './styles'
import {FaUser} from 'react-icons/fa'

const userImage = false;

const UserConfig = () => {
  return (
    <>
      <Container>
          <UserCard>
            {userImage
              ? <>
                  <UserImageBubble />
                  <Title/>
                </>
              : <>
                  <FaUser />
                  <Title>Sem usuários</Title>
                  <Paragraph>
                    Você não possui usuários cadastrados ainda.
                  </Paragraph>
                </>
            }
          </UserCard>
      </Container>
    </>
  )
}

export default UserConfig