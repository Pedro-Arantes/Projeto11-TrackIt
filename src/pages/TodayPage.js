import {useContext} from "react";

import { DataContext } from "../context/Auth";
export default function TodayPage(){

    const { name }= useContext(DataContext)

    return(
        <>
            <h1>{name}</h1>
        </>
    )
}