
import { DayWeekStyle } from '../style/HabitPgStyle';


export default function BtnDay({ days, func, week,clean }) {
    


    return (
        <>
            {week.map((item, id) => <DayWeekStyle disabled={clean}key={id} onClick={() => func(id)} da={days.includes(id)?"#CFCFCF":"white"}d={days.includes(id)?"white":"#DBDBDB"}>{item}</DayWeekStyle>)}
        </>

    )
}