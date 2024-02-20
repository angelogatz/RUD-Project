import React from 'react'
import { Table, Flex, Text, Card, Badge, Dialog, Button, IconButton, TextArea, TextField, Theme } from '@radix-ui/themes';
import { Container } from './style';
import { MdOutlineStickyNote2, MdEditNote } from "react-icons/md";

const AnnotationsList = ({users}) => {

  const haveAnnotations = () => {
    const annotations = users.map((data) => data.annotations)
    if(users.length > 0 && annotations.length > 0){
      return true
    }else{
      return false
    }
  };

  return (
    <Container>
      <Theme appearance={'inherit'} accentColor="cyan" radius="medium" scaling="100%">
        { haveAnnotations()
          ? 
            <Table.Root variant="ghost">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Usuário</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Permissão</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Anotação</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Editar</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              {users.map((data) => {
                return (
                  data.annotations.length > 0 && data.annotations.map((note) => {
                    return (
                      <Table.Body key={data.id}>
                        <Table.Row>
                          <Table.RowHeaderCell>{data.username}</Table.RowHeaderCell>
                          <Table.Cell>{data.email}</Table.Cell>
                          <Table.Cell>{data.permission}</Table.Cell>
                          <Table.Cell width={80} justify={'center'}>
                            <Dialog.Root>
                              <Dialog.Trigger>
                                <IconButton  variant="solid" style={{cursor:'pointer'}}>
                                  <MdOutlineStickyNote2 style={{fontSize: '25px'}}/>
                                </IconButton>
                              </Dialog.Trigger>
                              <Dialog.Content style={{height: "fit-content", maxWidth: 550, marginLeft: "300px" }}>
                              <Dialog.Title>Visualizando anotação de <Badge>{data.username}</Badge></Dialog.Title>
                              <Dialog.Description size="2" mb="4">
                                 <strong>Título:</strong> {note.title}
                              </Dialog.Description>
    
                                <Flex direction="column" gap="3">
                                  <label>
                                    <Text as="div" size="2" mb="1" weight="bold">
                                      Data
                                    </Text>
                                    <Text style={{color: '#858585'}}>
                                      {new Date(note.created_at).toLocaleDateString("pt-BR")}
                                    </Text>
                                  </label>
                                  <label>
                                    <Text as="div" size="2" mb="1" weight="bold">
                                      Texto
                                    </Text>
                                    <Text style={{color: '#858585'}}>
                                      {note.body}
                                    </Text>
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
                          </Table.Cell>
                          <Table.Cell width={60} justify={'center'}>
                            <Dialog.Root>
                              <Dialog.Trigger>
                                <IconButton variant="solid" style={{cursor:'pointer'}}>
                                  <MdEditNote style={{fontSize: '25px'}}/>
                                </IconButton>
                              </Dialog.Trigger>
                              <Dialog.Content style={{height: 550, maxWidth: 550, marginLeft: "300px" }}>
                                <Dialog.Title>Editando Anotação</Dialog.Title>
                                <Dialog.Description size="2" mb="4">
                                  Modificado pela última vez em <strong>{new Date(note.updated_at).toLocaleDateString('pt-BR')}</strong>
                                </Dialog.Description>
    
                                <Flex direction="column" gap="3">
                                  <label>
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
                                      defaultValue={note.title}
                                    />
                                  </label>
                                  <label>
                                    <Text as="div" size="2" mb="1" weight="bold">
                                      Texto
                                    </Text>
                                    <TextArea
                                      placeholder="Enter your notes"
                                      style={{height: '220px'}}
                                      defaultValue={note.body}
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
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    )
                  })
                )
              })}
            </Table.Root>
          : 
            <Flex 
              direction="column" 
              gap="3" 
              style={
                {
                  backgroundColor: "rgb(230, 237, 250)", 
                  boxShadow: "3px 3px 5px 1px #bac5d9", 
                  padding: '10px'
                }
              }
            >
              <Card variant="ghost">
                <Text as="div" size="4" weight="bold">
                  Crie uma Anotação!
                </Text>
                <Text as="div" color="gray" size="2">
                  Nenhum usuário possui Anotações ainda.
                </Text>
                <Text as="div" color="gray" size="2">
                  Todas as suas anotações aparecerão aqui em lista quando houverem.
                </Text>
              </Card>
            </Flex>
        }
      </Theme>
    </Container>
  )
}

export default AnnotationsList