import { HeaderStyle } from "../style/HeaderStyle";
import track from '../assets/track.png'

export default function Header({img}){


    return(
        <HeaderStyle>
            <h1>TrackIt</h1>
            <img src={img !== "" ? img : track} alt="Imagem de Perfil"></img>
        </HeaderStyle>
    )
}