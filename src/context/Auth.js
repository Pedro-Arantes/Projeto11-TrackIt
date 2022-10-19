import { createContext,useState } from "react";

export const DataContext = createContext({})

function DataProvider ({children}){

const [data,setData] = useState("n")


return(

    <DataContext.Provider value={{name: "Pedro",data,setData}}>
        {children}
    </DataContext.Provider>
)

}
export default DataProvider