import * as ST from './styled'
import { CarCard } from '../CarCard'

export const Main = () => {
    return (
        <ST.Wrapper>
            <ST.Header>
                <ST.HeaderItem>Главная</ST.HeaderItem>
                <ST.HeaderItem>Машины</ST.HeaderItem>
                <ST.HeaderItem>QA</ST.HeaderItem>
            </ST.Header>
            <ST.Content>
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </ST.Content>
        </ST.Wrapper>
    )
}
