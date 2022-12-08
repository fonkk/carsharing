import * as ST from './styled'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../constants/PATHS'

export const CarCard = () => {
    const navigation = useNavigate()
    return (
        <ST.Wrapper onClick={() => navigation(PATHS.car + '/123')}>
            <ST.Photo />
        </ST.Wrapper>
    )
}
