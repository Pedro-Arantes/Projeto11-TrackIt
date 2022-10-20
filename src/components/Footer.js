import { FooterStyle } from "../style/FooterStyle";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Link } from "react-router-dom";

export default function Footer() {


    return (

        <FooterStyle>
            <Link to="/habitos">
                <h3>Hábitos</h3>
            </Link>

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
                <Link to="/hoje">
                    <p >Hoje</p>
                </Link>
            </CircularProgressbarWithChildren>
            <Link to="/historico">
                <h3>Histórico</h3>
            </Link>
        </FooterStyle>
    )
}

