import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from 'styled-components';
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br';
import { DataContext } from "../context/Auth";
export default function TodayPage() {

    const { data } = useContext(DataContext)
    const { img } = useContext(DataContext)
    let dia = dayjs().locale("pt-br").format("dddd , DD/MM")
    dia = dia[0].toUpperCase() + dia.substring(1).replace('-feira', '');
    console.log()
    return (
        <>
            <Header img={img} />
            <MainStyled>
                <DivDia>
                    <h1>{dia}</h1>
                    <p>Nenhum hábito concluído ainda</p>
                </DivDia>
                <HabitBox>
                    <HabitCard></HabitCard>
                </HabitBox>
            </MainStyled>
            <Footer />
        </>
    )
}

const MainStyled = styled.main`
height: 80vh;
width: 100%;
margin-top: 70px;
background-color: #E5E5E5;
`
const DivDia = styled.div`
padding: 30px;
h1{
    color: #126BA5;
    font-weight: 400;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
}
p{
    font-size: 18px;
    color: #BABABA;
}

`
const HabitBox = styled.div`

`
const HabitCard = styled.div`

`