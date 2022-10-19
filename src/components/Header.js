import { HeaderStyle } from "../style/HeaderStyle";
import track from '../assets/track.png'

export default function Header(){


    return(
        <HeaderStyle>
            <h1>TrackIt</h1>
            <img src={track} alt="Imagem de Perfil"></img>
        </HeaderStyle>
    )
}