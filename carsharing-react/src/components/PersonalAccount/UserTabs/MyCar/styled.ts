import styled from 'styled-components'
import { Colors } from 'constants/colors'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
`

export const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`

export const RowInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
`

export const RowLabel = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
`

export const RowText = styled.div`
    font-size: 18px;
`

interface IButton {
    isActive: boolean
}

export const Button = styled.button<IButton>`
    min-width: 300px;
    padding: 12px 50px;
    border-radius: 5px;
    transition: 0.3s;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    font-weight: 500;
    background: ${({ isActive }) => (isActive ? ' #b90000' : '#00d300')};
    box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.2);
    :hover {
        box-shadow: 0 0 1px 0 rgba(34, 60, 80, 0.2);
    }
`
