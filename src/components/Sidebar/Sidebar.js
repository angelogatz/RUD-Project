import React from 'react'
import { Container, Content, LogosContainer, Title } from './styles'
import {
  FaHome,
  FaUserAlt,
  FaReact
} from 'react-icons/fa'
import { DiRubyRough } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = ({ active }) => {

  return (
    <Container sidebar={active}>
      <Content>
        <LogosContainer>
          <FaReact />
          <DiRubyRough />
          <SiMongodb />
        </LogosContainer>
        <SidebarItem Icon={FaHome} text={'Home'}/>
        <SidebarItem Icon={FaUserAlt} text={'Usuário'}/>
      </Content>
    </Container>
  )
}

export default Sidebar