import styled from 'styled-components'
import { Colors } from 'constants/colors'
import Select from 'react-select'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Filters = styled.div`
    width: 90%;
    height: 8%;
    display: flex;
    align-items: center;
    padding: 30px;
    background: ${Colors.gray10};
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 30px;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 30px;
`

export const CustomReactSelect = styled(Select)`
    width: 25%;
    margin-right: 10px;
    cursor: pointer;
`

export const ButtonsWrapper = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
`

export const SelectsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin-right: 20px;
`

export const Button = styled.button`
    min-width: 180px;
    padding: 12px 50px;
    border-radius: 5px;
    transition: 0.3s;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    font-weight: 500;
    :hover {
        background: #d9d9d9;
    }
`

export const CarsWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 40px;
    padding: 50px 150px;
    grid-template-columns: repeat(auto-fill, 300px);
    align-items: center;
    justify-content: center;
`
