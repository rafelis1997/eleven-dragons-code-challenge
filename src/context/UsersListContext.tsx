import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
}

interface UserListContextType {
  usersList: User[];
  handleNewUserAdd: (user : User) => void;
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
      
      console.log(users)
    } catch(err) {
      console.log(err)
    }

    setUserList(users)
  }

  function handleNewUserAdd(user : User) {
    setUserList(state => [...state, user])
  }

  return (
    <UserListContext.Provider
      value={{ usersList, handleNewUserAdd }}
    >
      {children}
    </UserListContext.Provider>
  )
}