import * as ST from './styled'
import { CarCard } from '../../../CarCard'
import { useState } from 'react'
export const MyCar = () => {
    const [isActiveTrip, setIsActiveTrip] = useState(false)
    const handleIsActiveTrip = () => {
        setIsActiveTrip((prevState) => !prevState)
    }
    return (
        <ST.Wrapper>
            <CarCard />
            <ST.InfoBlock>
                <ST.RowInfo>
                    <ST.RowLabel>Машина:</ST.RowLabel>
                    <ST.RowText>Киа астра</ST.RowText>
                </ST.RowInfo>
                <ST.Button onClick={handleIsActiveTrip} isActive={isActiveTrip}>
                    {isActiveTrip ? `Закончить поездку` : `Начать поездку`}
                </ST.Button>
            </ST.InfoBlock>
        </ST.Wrapper>
    )
}
