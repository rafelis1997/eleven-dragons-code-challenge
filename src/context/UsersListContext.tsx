import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { NewUserFormInputs } from "../pages/new-user-form";

export type User = {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}


interface UserListContextType {
  usersList: User[];
  handleNewUserAdd: (data : NewUserFormInputs) => void;
  handleUserEdit: (data : User) => void;
}

interface UserListContextProviderProps {
  children: ReactNode;
}

export const UserListContext = createContext({} as UserListContextType)

export function UserListContextProvider({children} : UserListContextProviderProps) {
  const [usersList, setUserList] = useState<User[]>([])

  useEffect(() => {
    fetchUserList()
  }, [])

  async function fetchUserList() {
    let users = [];
    try {
      
      users = await axios.get('https://gorest.co.in/public/v2/users')
        .then(res => (res.data))
  
    } catch(err) {
      console.log(err)
    }

    setUserList(users)
  }

  function handleNewUserAdd(data : NewUserFormInputs) {

    const newUser = {
      id: usersList[0].id + 1,
      ...data,
    }
    
    setUserList(state => [newUser, ...state])
    alert('Usuário criado com sucesso')
  }

  function handleUserEdit(data : User) {
    const editedUserList = usersList.map(user => {
      if (user.id == data.id) {
        return {
          id: data.id,
          name: data.name,
          email: data.email,
          status: data.status
        };
      }
      return user
    })
    setUserList(editedUserList)
    alert('Usuário editado com sucesso')
  }

  return (
    <UserListContext.Provider
      value={{ usersList, handleNewUserAdd, handleUserEdit }}
    >
      {children}
    </UserListContext.Provider>
  )
}