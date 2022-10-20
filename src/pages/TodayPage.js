import { useContext,useEffect,useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from 'styled-components';
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br';
import axios from "axios";
import { DataContext } from "../context/Auth";

import { useNavigate } from "react-router-dom";
import CardHabit from "../components/CardHabit";
export default function TodayPage() {

    const { data } = useContext(DataContext)
    const { setPerc } = useContext(DataContext)
    const { perc} = useContext(DataContext)
    const { img } = useContext(DataContext)
    const [Array, setArray] = useState([])
    const [reload, setReload] = useState(0)
    

    let dia = dayjs().locale("pt-br").format("dddd , DD/MM")
    dia = dia[0].toUpperCase() + dia.substring(1).replace('-feira', '');
    

    const navigate = useNavigate();

    

    useEffect(() => {
        const GetHabit = () => {


            const config = {
                headers: {
                    Authorization: `Bearer ${data}`
                }
            }

            const tratarSucesso = (resposta) => {
           
                const dataArray = resposta.data
                setArray(dataArray)

                const ReturnTotal = () =>{
                    let total = 0 
                    for (let i = 0; i < dataArray.length; i++) {
                        const element = dataArray[i];
                        if (element.done) {
                            total++
                        }
                    }
                    return total 
                }
                const CreatePercent = (partialValue,totalValue)=>{
                    
                    let percent = (partialValue)/ totalValue ;
                    percent = percent*100
                    percent = percent.toFixed(0)
                    setPerc( percent ) 
                    
                }
                CreatePercent(ReturnTotal(),dataArray.length);
                //console.log(perc)
            }

            const tratarErro = (resp) => {
                //console.log(resp)
                alert(resp.response.data.message)
                navigate("/")
                window.location.reload()
            }


            const requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
            requisicao.then(tratarSucesso)
            requisicao.catch(tratarErro)

        }
        GetHabit()
        
        
    }, [reload,data,navigate,perc,setPerc])

    const CheckHabit = (id,done) => {
        const config = {
            headers: {
                Authorization: `Bearer ${data}`
            }}
          
        if (done) {

            const tratarSucesso = (resposta) => {
                //console.log(resposta.data)
                const reloa = reload+1
                setReload(reloa)
            }
    
            const tratarErro = (resp) => {
                //console.log(resp)
                
                //console.log(resp)
                navigate("/")
                window.location.reload()
            }
    
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
            const requisicao = axios.post(URL,null,config);
            requisicao.then(tratarSucesso)
            requisicao.catch(tratarErro)
            
            
        }else{
            const tratarSucesso = (resposta) => {
                
                const reloa = reload+1
                setReload(reloa)
            }
    
            const tratarErro = (resp) => {
              
                //navigate("/")
                //window.location.reload()
            }
    
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
            const requisicao = axios.post(URL,null,config);
            requisicao.then(tratarSucesso)
            requisicao.catch(tratarErro)
            
        }

        
        

    }
    return (
        <>
            <Header img={img} />
            <MainStyled>
                <DivDia>
                    <h1>{dia}</h1>
                    <p>{Array.length === 0 ? "Nenhum hábito concluído ainda" : `${perc}% dos hábitos concluídos`}</p>
                </DivDia>
                <HabitBox>
                    
                    {Array.map((item,id)=><CardHabit func={CheckHabit}item={item} key={id}/>)}
                    
                </HabitBox>
            </MainStyled>
            <Footer  perc={perc}/>
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
display: flex;
flex-direction: column;
margin-bottom: 70px;

align-items: center;
gap: 10px;
`
