import axios from 'axios';
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import { HomeContainer, SearchBar, UsersList } from '../styles/pages/home'
import { api } from './api/hello';

type User = {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
}

interface HomeProps {
  users: User[];
}

export default function Home({ users } : HomeProps) {
  return (
    <>
      <Head>
          <title>Users | Eleven Dragons </title>
      </Head>

      <HomeContainer>
        <h1>Users List</h1>

        <SearchBar>
          <input type="text" placeholder="Busca por nome do  usuário"/>
          <button type='submit'>Buscar</button>
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
            <tr>
              <td>Rodrigo</td>
              <td>rodrigo@uk.com</td>
              <td>Ativo</td>
            </tr>
            <tr>
              <td>Rodrigo</td>
              <td>rodrigo@uk.com</td>
              <td>Ativo</td>
            </tr>
            <tr>
              <td>Rodrigo</td>
              <td>rodrigo@uk.com</td>
              <td>Ativo</td>
            </tr>
          </tbody>
          
        </UsersList>
      </HomeContainer>
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async () => {
  try{
  
    let users = await api.get('https://gorest.co.in/public/v2/users?access-token=1a3fdda9c4722cde4eeef14308ed8ed0f402297982dc4d28b44ae1491d2db87e')
    
    console.log(users)
  } catch(err) {
    console.log(err)
  }
  
  
  
   


  return {
    props: {}
  }
} 