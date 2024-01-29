import React from 'react'
import { Container } from './style'
import { Link } from 'react-router-dom'

const SidebarItem = ({ Icon, text }) => {
  return (
    <Link to={text === 'Home' ? '/' : '/user'}>
      <Container>
        <Icon />
        {text}
      </Container>
    </Link>
  )
}

export default SidebarItem