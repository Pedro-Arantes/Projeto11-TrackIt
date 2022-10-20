import { useContext } from "react";
import { DataContext } from "../context/Auth";
import track from '../assets/track.png'
import { Link, useNavigate } from "react-router-dom";
import { MainStyled, FormStyled, LoadingBtn,BtnStyle } from '../style/LogCadStyle';
import { useState } from 'react';
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [status, setStatus] = useState(false)
    const { setData } = useContext(DataContext)
    const { setImg } = useContext(DataContext)
  
    const navigate = useNavigate();
    const submit = (e) => {
        VerificaLogin();
        e.preventDefault();

    }
    const VerificaLogin = () => {

        const obj = {
            email: email,
            password: senha
        }

        const tratarSucesso = (resposta) => {

            const token = resposta.data.token
            const img = resposta.data.image
            setData(token)
            setImg(img)
            navigate("/hoje")
        }

        const tratarErro = (resp) => {

            alert(resp.response.data.message)
            setStatus(false)

        }


        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', obj);
        requisicao.then(tratarSucesso)
        requisicao.catch(tratarErro)
        setStatus(true)

    }

    return (
        <MainStyled>
            <img src={track} alt="nada" />
            <FormStyled onSubmit={submit}>
                <input disabled={status} onChange={e => setEmail(e.target.value)} required placeholder='email' value={email} type="email" />
                <input disabled={status} onChange={e => setSenha(e.target.value)} required placeholder='senha' value={senha} type="password" />
                <BtnStyle state={status}>Entrar</BtnStyle>
                <LoadingBtn state={status}>
                    <ThreeDots height="80"
                        width="80"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true} />
                </LoadingBtn>
            </FormStyled>
            <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </MainStyled>
    )
}

