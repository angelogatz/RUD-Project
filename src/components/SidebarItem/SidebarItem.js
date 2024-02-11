import React from 'react'
import { Container, FooterLink } from './style'
import { Link } from 'react-router-dom'

const SidebarItem = ({ Icon, text, mask }) => {
  return (
    <>
      {(text != 'Home' && text != 'Usuário')
        ? <Link to={text} target="_blank">
            <Container>
              <>
                <Icon />
                <FooterLink href={text}>
                  {mask}
                </FooterLink>
              </>
            </Container>
          </Link>
        : <Link to={text === 'Home' ? '/' : text === 'Usuário' && '/user'}>
            <Container>
              {(text != 'Home' && text != 'Usuário') 
                ? <>
                    <Icon />
                    <FooterLink href={text}>
                      {mask}
                    </FooterLink>
                  </>
                : <>
                    <Icon />
                    {text}
                  </>
              }
            </Container>
          </Link>
      }

    
    </>
  )
}

export default SidebarItem