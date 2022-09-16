import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { NewUserFormInputs } from "../pages/new-user-form";

export type User = {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
}

interface newUserAddFunctionProps extends NewUserFormInputs {
  reset: () => void;
}

interface UserListContextType {
  usersList: User[];
  handleNewUserAdd: (data : NewUserFormInputs) => void;
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
  }

  return (
    <UserListContext.Provider
      value={{ usersList, handleNewUserAdd }}
    >
      {children}
    </UserListContext.Provider>
  )
}