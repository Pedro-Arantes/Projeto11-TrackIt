import { HabitCardSt, WeekBtnStyle, DayStyHab, ImgStyle } from '../style/HabitPgStyle';
import trash from "../assets/trash.png"

export default function HabitCard({ arr, item,del}) {

const arrayWeek = item.days



    return (
        <HabitCardSt >
            <ImgStyle onClick={()=>del(item.id)}>
                <img src={trash}></img>
            </ImgStyle>
            <h1>{item.name}</h1>
            <WeekBtnStyle>
                {arr.map((it, id) => <DayStyHab  cor={arrayWeek.includes(id)? true: false}key={id} >{it}</DayStyHab>)}
            </WeekBtnStyle>

        </HabitCardSt>
    )
}   