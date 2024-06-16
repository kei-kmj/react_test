import React, {createContext, FC, ReactNode, useContext, useState} from "react";

type User = {
    name: string;
    age: number;
}

export type UserContextProps = {
    user: User;
    setUser: (user: User) => void
}

// グローバル変数
// createContextで、Contextオブジェクト
// （コンテキストに値を引き渡すContextProviderコンポーネントとコンテキストの変更を受け取るContext.Consumerコンポーネント）を提供する
export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [user, setUser] = useState<User>({name: 'alice', age: 20});

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

