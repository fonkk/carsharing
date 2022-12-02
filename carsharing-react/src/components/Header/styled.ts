import styled from 'styled-components'
import { Colors } from 'constants/colors'
export const Header = styled.div`
    width: 100%;
    min-height: 80px;
    height: 80px;
    background: ${Colors.black};
    box-sizing: border-box;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
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
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const PersonalAccountBlock = styled.div`
    color: ${Colors.white};
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    user-select: none;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const PersonalAccountIconBlock = styled.div`
    background: ${Colors.white};
    width: 35px;
    height: 35px;
    margin-left: 20px;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PersonalAccountIcon = styled.img`
    width: 20px;
`

export const PersonalAccountText = styled.div`
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
`

export const HeaderLeftSide = styled.div`
    display: flex;
`
