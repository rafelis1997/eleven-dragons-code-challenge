import Head from 'next/head'
import {  useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { 
  EditButton, 
  EditButtonContainer, 
  FilterButtons, 
  FilterButtonsContainer, 
  HomeContainer, SearchBar, 
  UsersList } from '../styles/pages/home'
import { Header } from '../components/Header';
import { User, UserListContext } from '../context/UsersListContext';
import PenIcon from '../assets/pen.svg'


export default function Home() {
  const { usersList } = useContext(UserListContext)
  const [search, setSearch] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("")

  let filteredUser : User[] = []

  if (search.length > 0 && selectedFilter === "") {
    filteredUser = usersList.filter(user => user.name.toLowerCase().includes(search));
  }

  if (search.length > 0 && selectedFilter !== "") {
    filteredUser = usersList.filter(user => user.name.toLowerCase().includes(search) && selectedFilter === user.status);
  }

  if (search.length === 0 && selectedFilter !== "") {
    console.log("to aqui")
    filteredUser = usersList.filter(user => selectedFilter === user.status);
  }

  return (
    <>
      <Head>
          <title>Usuários | Eleven Dragons </title>
      </Head>

      <Header url="/new-user-form" buttonText='Criar novo usuário'/>

      <HomeContainer>
        <h1>Lista de usuários</h1>

        <SearchBar>
          <input type="text" placeholder="Busca por nome do  usuário" onChange={(e) => setSearch(e.currentTarget.value.toLocaleLowerCase())}/>

          <FilterButtonsContainer 
            type='single'
            value={selectedFilter}
            onValueChange={(value) => {
              if (value) {
                setSelectedFilter(value)
              } else {
                setSelectedFilter("")
              }
            }}
          >
            <FilterButtons value='active'>ATIVO</FilterButtons>
            <FilterButtons value='inactive'>INATIVO</FilterButtons>
          </FilterButtonsContainer>
        </SearchBar>

        <UsersList>
          <thead>
            <tr>
              <th>Usuário</th>
              <th>E-mail</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0 ? (
              filteredUser.length > 0 ? (
                filteredUser.map(user => {
                  return (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.status === "active" ? "Ativo" : "Inativo"}</td>
                      <EditButtonContainer>
                        <Link href={`/editUser/${user.id}`}>
                            <EditButton><Image src={PenIcon} alt="" width={20} height={20}/></EditButton>
                        </Link>
                      </EditButtonContainer>
                    </tr>
                  )}
                ))
                :
                (
                  <span>Nenhum usuário encontrado</span>
                )
              )
            : 
            (
              filteredUser.length === 0 ?
                usersList.map(user => {
                  return (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.status === "active" ? "Ativo" : "Inativo"}</td>
                      <EditButtonContainer>
                        <Link href={`/editUser/${user.id}`} >
                          <EditButton><Image src={PenIcon} alt="" width={20} height={20}/></EditButton>
                        </Link>
                      </EditButtonContainer>
                    </tr>
                  )
                })
              :
              filteredUser.map(user => {
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.status === "active" ? "Ativo" : "Inativo"}</td>
                    <EditButtonContainer>
                        <Link href={`/editUser/${user.id}`}>
                          <EditButton><Image src={PenIcon} alt="" width={20} height={20}/></EditButton>
                        </Link>
                    </EditButtonContainer>
                  </tr>
                )})
            )}
          </tbody>
        </UsersList>
      </HomeContainer>
    </>
  )
}