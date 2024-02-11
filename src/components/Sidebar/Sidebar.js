import React from 'react';
import { Container, Content, Footer, FooterLink, LogosContainer, Title } from './styles';
import {
  FaHome,
  FaUserAlt,
  FaReact,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { DiRubyRough } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import SidebarItem from '../SidebarItem/SidebarItem';

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
        <Footer>
          <SidebarItem Icon={FaGithub} mask={'Github'} text={'https://github.com/angelogatz'}/>
          <SidebarItem Icon={FaLinkedin} mask={'LinkedIn'} text={'https://www.linkedin.com/in/angelo-gatz-29151a200/'}/>
        </Footer>
      </Content>
    </Container>
  )
}

export default Sidebar