import styled from 'styled-components'
import { Colors } from 'constants/colors'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`

export const Content = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 40px;
    padding: 50px 150px;
    grid-template-columns: repeat(auto-fill, 300px);
    align-items: center;
    justify-content: center;
`

export const Header = styled.div`
    width: 100vw;
    height: 80px;
    background: ${Colors.black};
    box-sizing: border-box;
    padding: 0 100px;
    display: flex;
    justify-content: start;
    align-items: center;
`

export const HeaderItem = styled.div`
    color: ${Colors.white};
    margin-right: 50px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
`
