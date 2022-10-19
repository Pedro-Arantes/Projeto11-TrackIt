import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from 'styled-components';


export default function HabitPage() {

    return (
        <>
            <Header />
            <MainStyled>
                <TitleStyle>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </TitleStyle>
                <HabitStyle>
                    <input placeholder="nome do hábito"></input>
                    <WeekBtnStyle>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </WeekBtnStyle>
                    <CancSaveStyle>
                        <a>Cancelar</a>
                        <button>Salvar</button>
                    </CancSaveStyle>

                </HabitStyle>
                <SpanStyle>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </SpanStyle>
            </MainStyled>
            <Footer />
        </>
    )
}
const MainStyled = styled.main`
margin-top: 70px;
display: flex;
flex-direction: column;
align-items: center;

height: 100%;
width: 100%;

background-color: #E5E5E5;


p{
    font-size: 23px;
    color: #126BA5;
    font-weight: 400;
}
button{
    border-style: none;
    background-color: #52B6FF;

    color: white;

    width: 40px;
    height: 35px;

    border-radius: 5px;
    font-size: 27px;
}
`
const SpanStyle = styled.span`
width: 338px;
word-wrap: break-word;

color: #666666;
font-size: 18px;
margin-bottom: 160px;
`
const HabitStyle = styled.div`

display: flex;
flex-direction: column;


width: 340px;
height: 180px;
background-color: white;

margin-bottom: 50px;

button{
    width: 30px;
    height: 30px;

    font-size: 20px;

    background-color: white;
    border-width: 1px;
    border-style: solid;
    border-color: #D4D4D4;
    color: #DBDBDB;

    display: flex;
    align-items: center;
}
input{
    height: 45px ;
    width: 303px;
    border-radius: 5px;
    border-color: #D4D4D4;
    border-style: solid;
    border-width: 1px;
    
    font-size: 20px;
    padding: 10px;
    margin-top: 15px;
    margin-left: 15px;

    ::placeholder{
        color: #D4D4D4;
        
    }
}

`
const CancSaveStyle = styled.div`

width: 100%;

display: flex;
gap: 20px;
align-items: flex-end;
justify-content: flex-end;
margin-right: 35px;
margin-top: 20px;


a{
    display: flex;
    height:35px;
    align-items: center;
    font-size: 16px;
    color: #52B6FF;
}
button{
    background-color: #52B6FF;
    width:84px;
    height: 35px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

`
const TitleStyle = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
margin-top: 10px;
margin-bottom: 20px;

`
const WeekBtnStyle = styled.div`
display: flex;
gap: 5px;
justify-content: flex-start;
margin-left: 15px;
margin-top: 10px;

`