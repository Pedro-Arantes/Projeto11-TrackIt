import { FooterStyle } from "../style/FooterStyle";
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';


export default function Footer() {


    return (

        <FooterStyle>
            <h3>Hábitos</h3>
            <CircularProgressbarWithChildren
                value={20}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    strokeLinecap: 'round'
                })} >
                    <p >Hoje</p>
                </CircularProgressbarWithChildren>
            <h3>Histórico</h3>
        </FooterStyle>
    )
}

