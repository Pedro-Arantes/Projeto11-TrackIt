import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext ,useEffect} from "react";
import { DataContext } from "../context/Auth";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

export default function HistoricPage(){
    const { perc} = useContext(DataContext)
    const { img } = useContext(DataContext)
    const { data } = useContext(DataContext)
    const navigate = useNavigate();
    useEffect(() => {
        if (data === "") {
            alert("Sua Sessão Expirou")
            navigate("/")
            window.location.reload()
        }
    },[data,navigate])
    
    return(
        <>
        <Header img={img}/>
        <MainStyled>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </MainStyled>
        <Footer perc={perc}/>
        </>
    )
}
const MainStyled = styled.main`

margin-top: 70px;
padding: 20px;

h1{
    font-size: 23px;
    color: #126BA5;
    margin-bottom: 15px;
    font-weight: 400;
}
p{
    color: #666666;
    font-weight: 400;
}

`