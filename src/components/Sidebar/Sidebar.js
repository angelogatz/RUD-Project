import React from 'react'
import { Container, Content, Title } from './styles'
import {
  FaHome,
  FaUserAlt
} from 'react-icons/fa'
import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = ({ active }) => {

  return (
    <Container sidebar={active}>
      <Title>
        Register <br />
        User <br />
        Dashboard
      </Title>
      <Content>
        <SidebarItem Icon={FaHome} text={'Home'}/>
        <SidebarItem Icon={FaUserAlt} text={'Usuário'}/>
      </Content>
    </Container>
  )
}

export default Sidebar