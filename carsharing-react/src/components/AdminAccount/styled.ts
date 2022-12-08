import styled from 'styled-components'
import { Colors } from 'constants/colors'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`

export const Menu = styled.div`
    width: 15%;
    height: 100%;
    background: ${Colors.white};
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 20px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 9;
`

export const MenuItem = styled.div`
    color: ${Colors.gray50};
    display: block;
    cursor: pointer;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
    user-select: none;
    :hover {
        color: ${Colors.black};
    }
`

export const ContentWrapper = styled.div`
    width: 85%;
    height: 100%;
    background: ${Colors.white};
    padding: 50px;
    box-sizing: border-box;
    display: flex;
`
export const Content = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
`
