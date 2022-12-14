import styled from 'styled-components'
import { Colors } from 'constants/colors'
import Select from 'react-select'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const FormWrapper = styled.div`
    width: 70%;
    border: 2px solid ${Colors.gray10};
    border-radius: 40px;
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: start;
    flex-direction: row;
`

export const TopBlock = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
`

export const BottomBlock = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
`

export const StyledInput = styled.input`
    min-width: 100px;
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
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
