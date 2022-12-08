import styled from 'styled-components'
import Select from 'react-select'

export const ModalWrapper = styled.div`
    width: 600px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -300px;
    margin-top: -300px;
    z-index: 999;
    border: 2px solid #000;
    background: white;
    border-radius: 20px;
    padding: 50px;
    box-sizing: border-box;
`

export const ModalOverlay = styled.div`
    background: rgba(0, 0, 0, 0.45);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
`

export const Wrapper = styled.div`
    position: relative;
`

export const TopBlock = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

export const BottomBlock = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

export const StyledInput = styled.input`
    min-width: 100px;
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
    margin-bottom: 30px;
    box-shadow: 0 0 5px 0 rgba(34, 60, 80, 0.2);
`

export const CustomReactSelect = styled(Select)`
    min-width: 209px;
    margin-bottom: 30px;
    cursor: pointer;
`

export const Button = styled.button`
    min-width: 209px;
    padding: 10px 0;
    border-radius: 5px;
    transition: 0.3s;
    font-family: 'Source Sans Pro', sans-serif;
    background: white;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 0 5px 0 rgba(34, 60, 80, 0.2);
    :hover {
        box-shadow: 0 0 1px 0 rgba(34, 60, 80, 0.2);
    }
`

export const Close = styled.div`
    position: absolute;
    right: -30px;
    top: -35px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`
