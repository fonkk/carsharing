import styled from 'styled-components'
import { Colors } from 'constants/colors'

export const Wrapper = styled.div`
    width: 300px;
    height: 450px;
    background: ${Colors.white};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
    transition: box-shadow 0.2s ease-in-out;
    :hover {
        box-shadow: 0px 0px 10px 6px rgba(34, 60, 80, 0.2);
    }
`

export const Photo = styled.div`
    background: blueviolet;
    height: 45%;
    border-radius: 10px 10px 0 0;
`
