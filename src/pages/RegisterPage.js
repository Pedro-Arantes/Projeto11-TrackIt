import { useState } from 'react';
import track from '../assets/track.png'
import { Link, useNavigate } from "react-router-dom";
import { MainStyled, FormStyled,BtnStyle,LoadingBtn } from '../style/LogCadStyle';
import   axios  from "axios";
import { ThreeDots } from 'react-loader-spinner'

export default function RegisterPage() {
const [email,setEmail] = useState('')
const [name,setName] = useState('')
const [image,setImage] = useState('')
const [pass,setPass] = useState('')
const [status, setStatus] = useState(false)
    const navigate = useNavigate();
    const submit = (e) => {
        VerificaCadastro();
        e.preventDefault();
        navigate("/")
    }
    
    const VerificaCadastro = () => {

        const obj = {
            email: email,
            name: name,
            image: image,
            password: pass
        }

        const tratarSucesso = (resposta) => {
            console.log(resposta)

            navigate("/")
            
        }
        const tratarErro = (resp) => {
            console.log(resp)
            setStatus(false)
        }


        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', obj);
        requisicao.then(tratarSucesso)
        requisicao.catch(tratarErro)
        setStatus(true)
    }

    return (
        <MainStyled>
            <img src={track} alt="nada" />
            <FormStyled onSubmit={submit} >
                <input required placeholder='email' type="email" value={email}  onChange={e => setEmail(e.target.value)}  disabled={status}/>
                <input required placeholder='senha' onChange={e => setPass(e.target.value)} value={pass}  type="password" disabled={status}/>
                <input required placeholder='nome' onChange={e => setName(e.target.value)}  value={name}  disabled={status}/>
                <input required placeholder='foto' type="url" value={image}  onChange={e => setImage(e.target.value)}  disabled={status}/>
                <BtnStyle state={status}>Cadastrar</BtnStyle>
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
            <Link to='/'>Já tem uma conta? Faça login!</Link>
        </MainStyled>
    )
}

