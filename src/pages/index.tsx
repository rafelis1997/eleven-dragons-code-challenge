import Head from 'next/head'

import {  useContext, useState } from 'react';
import { Header } from '../components/Header';
import { User, UserListContext } from '../context/UsersListContext';
import { HomeContainer, SearchBar, UsersList } from '../styles/pages/home'


interface HomeProps {
  users: User[];
}

export default function Home() {
  const { usersList } = useContext(UserListContext)
  const [search, setSearch] = useState("")

  let filteredUser = search.length > 0 ? usersList.filter(user => user.name.toLowerCase().includes(search)) : []

  return (
    <>
      <Head>
          <title>Users | Eleven Dragons </title>
      </Head>

      <Header url="/new-user-form" buttonText='Criar novo usuário'/>

      <HomeContainer>
        <h1>Users List</h1>

        <SearchBar>
          <input type="text" placeholder="Busca por nome do  usuário" onChange={(e) => setSearch(e.currentTarget.value)}/>
        </SearchBar>

        <UsersList>
          <thead>
            <tr>
              <th>Usuário</th>
              <th>E-mail</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUser.length > 0 ? (
              filteredUser.map(user => {return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                </tr>
              )})
            )
            : 
            (usersList.map(user => {return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status === "active" ? "Ativo" : "Inativo"}</td>
              </tr>
            )}))}
          </tbody>
          
        </UsersList>
      </HomeContainer>
    </>
  )
}