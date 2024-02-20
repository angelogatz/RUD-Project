import React, { useEffect, useState } from 'react'
import { Container, Paragraph, Title } from './DashBoardCardStyle'
import { SlNote } from "react-icons/sl";
import { TextArea, Theme, Text, IconButton, Badge, Dialog, Flex, TextField, Button } from '@radix-ui/themes';

const DashBoardCard = ({users = false}) => {

  const handleColor = (label) => {
    if(label == 'Admin'){
      return 'purple'
    }
    if(label == 'Padrão' || label == 'Default'){
      return 'orange'
    }
    if(label == 'Manager'){
      return 'blue'
    }
  }

  return (
    users.length > 0
      ? users.map(data => {
          return (
            <Theme appearance={'inherit'} accentColor="cyan" radius="medium" scaling="90%" >
              <Container key={data.id}>
                <Title>
                  Usuário {data.username} 
                  <Dialog.Root>
                      <Dialog.Trigger>
                        <IconButton variant="solid" style={{float: 'right', cursor:'pointer'}}>
                          <SlNote/>
                        </IconButton>
                      </Dialog.Trigger>
                      <Dialog.Content style={{height: 550, maxWidth: 550, marginLeft: "300px" }}>
                        <Dialog.Title>Nova Anotação</Dialog.Title>
                        <Dialog.Description size="2" mb="4">
                          Escreva uma anotação para o usuário <Badge>{data.username}</Badge>
                        </Dialog.Description>

                        <Flex direction="column" gap="3">
                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                              Data
                            </Text>
                            <TextField.Input
                              type='date'
                            />
                          </label>
                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                              Título
                            </Text>
                            <TextField.Input
                              type='text'
                              placeholder='enter your title'
                            />
                          </label>
                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                              Texto
                            </Text>
                            <TextArea
                              placeholder="Enter your notes"
                              style={{height: '220px'}}
                            />
                          </label>
                        </Flex>

                        <Flex gap="3" mt="4" justify="end">
                          <Dialog.Close>
                            <Button variant="soft" color="gray">
                              Cancel
                            </Button>
                          </Dialog.Close>
                          <Dialog.Close>
                            <Button>Save</Button>
                          </Dialog.Close>
                        </Flex>
                      </Dialog.Content>
                  </Dialog.Root>
                  <br />
                </Title>
                <Text>
                  email: {data.email} <br />
                  permissão: <Badge color={handleColor(data.permission)}>{data.permission}</Badge> <br /> <br />
                  Este usuário foi criado em: <strong>{new Date(data.created_at).toLocaleDateString("pt-BR")}</strong>
                </Text>
              </Container>

            </Theme>

            
          )
        })
      : <Container>
          <Title>
            Crie um usuário! <br />
          </Title>
          <Paragraph>
            Você ainda não possui nenhum usuário
          </Paragraph>
        </Container>
  )
}

export default DashBoardCard