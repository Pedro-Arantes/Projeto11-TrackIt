import Footer from "../components/Footer";
import Header from "../components/Header";
import { MainStyled, TitleStyle, HabitStyle, WeekBtnStyle, CancSaveStyle, SpanStyle,BtnPlus } from '../style/HabitPgStyle';
import { useContext } from "react";
import { DataContext } from "../context/Auth";
import { useState, useEffect } from 'react';
import BtnDay from "../components/BtnDay";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HabitCard from "../components/HabitCard";
import { ThreeDots } from 'react-loader-spinner'

export default function HabitPage() {

    const { img } = useContext(DataContext)
    const { data } = useContext(DataContext)
    const [status, setStatus] = useState(false)
    const [stat, setStat] = useState(true)
    const [name, setName] = useState("")
    const [days, setDays] = useState([])
    const [habits, setHabits] = useState([])
    const [reload, setReload] = useState("")
    const [clean, setClean] = useState(false)

    const navigate = useNavigate();
    const WeekArray = ["D", "S", "T", "Q", "Q", "S", "S"];
    const CreateHabit = () => {
        if (status === false) {
            setStatus(true)
        }

    }
    useEffect(() => {
        const GetHabit = () => {


            const config = {
                headers: {
                    Authorization: `Bearer ${data}`
                }
            }

            const tratarSucesso = (resposta) => {
                //console.log(resposta.data)
                const dataArray = resposta.data
                setHabits(dataArray)
            }

            const tratarErro = (resp) => {
                //console.log(resp)
                alert(resp.response.data.message)
                navigate("/")
                window.location.reload()
            }


            const requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
            requisicao.then(tratarSucesso)
            requisicao.catch(tratarErro)

        }
        GetHabit()

    }, [reload])

    const SaveHabit = () => {

        if (days.length === 0) {
            alert("Precisa selecionar pelo menos um dia!!")
        } else {
            const obj = {
                name: name,
                days: days
            }
            const config = {
                headers: {
                    Authorization: `Bearer ${data}`
                }
            }

            const tratarSucesso = (resposta) => {
                //console.log(resposta)
                
                setStatus(false)
                setReload(resposta)
                setName("")
                setDays([])
                setStat(true)
                
                
            }

            const tratarErro = (resp) => {
                //console.log(resp)
                alert(resp.response.data.message)

            }


            const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', obj, config);
            requisicao.then(tratarSucesso)
            requisicao.catch(tratarErro)
            setStat(false)
        }

    }

    const DeleteHabit = (id) => {
        const resposta = window.confirm("Deseja excluir esse hábito??")
        if (resposta) {
            const config = {
                headers: {
                    Authorization: `Bearer ${data}`
                }
            }

            const tratarSucesso = (resposta) => {
                //console.log(resposta)

                setReload(id)
            }

            const tratarErro = (resp) => {
                //console.log(resp)
                alert(resp.response.data.message)

            }


            const requisicao = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
            requisicao.then(tratarSucesso)
            requisicao.catch(tratarErro)
        }



    }

    const Cancel = () => {

        setStatus(false)
    }

    const ClickDay = (par) =>{
        if (!days.includes(par) ) {
            
            
            const arr = [...days,par];
            //console.log(arr)
            setDays(arr);
        }else{
            
           
            const arr = days.filter((item)=>item !== par)
            setDays(arr)
            //console.log(arr)
        }
        
    }
    console.log(days)

    return (
        <>
            <Header img={img} />
            <MainStyled>
                <TitleStyle>
                    <p>Meus hábitos</p>
                    <BtnPlus onClick={CreateHabit}>+</BtnPlus>
                </TitleStyle>
                <HabitStyle stat={status} >
                    <input onChange={e => setName(e.target.value)} value={name} placeholder="nome do hábito"></input>
                    <WeekBtnStyle>
                        <BtnDay   days={days} week={WeekArray}  func={ClickDay}  />
                    </WeekBtnStyle>
                    <CancSaveStyle >
                        <a onClick={Cancel}>Cancelar</a>
                        <button onClick={()=>SaveHabit()}>
                            {stat === true ? "Salvar" : <ThreeDots height="80"
                                width="80"
                                radius="9"
                                color="#FFFFFF"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true} />}
                        </button>
                    </CancSaveStyle>

                </HabitStyle>
                {WeekArray.length === 0 ? <SpanStyle>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </SpanStyle> : habits.map((item, id) => <HabitCard del={DeleteHabit} num={id} item={item} key={id} arr={WeekArray} />)}

            </MainStyled>
            <Footer />
        </>
    )
}
