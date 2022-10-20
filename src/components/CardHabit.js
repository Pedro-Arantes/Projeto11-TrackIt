import styled from 'styled-components';
import check  from "../assets/Vector.png";

export default function CardHabit({item,func}) {

const id = item.id

const VerifyZero = () =>{
    if (item.currentSequence === 0 ) {
        return false
    }else if(item.currentSequence>=item.highestSequence){
        return true
    }else{
        return false
    }
    
}

    return (

        <HabitCard>
            <h2>{item.name}</h2>
            <CheckDiv onClick={()=>func(id,item.done)} bool={item.done}><img alt="nada" src={check}></img></CheckDiv>
            <p>Sequência atual: <SeqStyle bool={item.done}>{item.currentSequence} dia(s)</SeqStyle></p>
            <p>Seu recorde: <RecordStyle bool ={VerifyZero()}>{item.highestSequence} dia(s)</RecordStyle></p>
        </HabitCard>
    )
}


const HabitCard = styled.div`
width: 340px;
height: 94px;
position: relative;
background-color: #FFFFFF;
border-radius: 5px;
padding: 20px;

h2{
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 400;
    color: #666666;
}
p{
    color: #666666;
}
`
const CheckDiv = styled.div`
width: 69px;
height: 69px;
position: absolute;
right: 10px;
bottom: 12px;
background-color: ${props=> props.bool? "#8FC549" : "#EBEBEB"};

display: flex;
align-items: center;
justify-content: center;
`
const SeqStyle = styled.span`
color: ${props=> props.bool? "#8FC549" : "#666666"};

`
const RecordStyle = styled.span`

color: ${props=> props.bool? "#8FC549" : "#666666"};
`