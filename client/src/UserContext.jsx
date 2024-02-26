import { createContext, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [username, setusername] = useState(null);
  const [id, setId] = useState(null);
  return (
    <UserContext.Provider value={{ username, setusername, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}
