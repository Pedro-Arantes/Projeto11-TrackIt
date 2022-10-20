import { createContext,useState } from "react";

export const DataContext = createContext({})

function DataProvider ({children}){

const [data,setData] = useState("")
const [img,setImg] = useState("")
const [perc,setPerc] = useState("")

return(

    <DataContext.Provider value={{data,setData,img,perc,setImg,setPerc}}>
        {children}
    </DataContext.Provider>
)

}
export default DataProvider