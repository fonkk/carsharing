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
`

export const CustomReactSelect = styled(Select)`
    width: 25%;
    margin-right: 10px;
    cursor: pointer;
`

export const TableWrapper = styled.div`
    width: 90%;
    border-radius: 3px;
    box-sizing: border-box;
`

export const Table = styled.table`
    width: 100%;
    table-layout: fixed;
    border: none;
`

export const TableHead = styled.thead``

export const ScrollableTableBody = styled.div`
    overflow-x: auto;
    height: 600px;
`

export const TableBody = styled.tbody`
    height: 500px;
    overflow: scroll;
`

export const ColumnHeader = styled.th``

export const TableRow = styled.tr``

export const TableCell = styled.td`
    text-align: center;
    padding: 10px 0;
    word-wrap: break-word;
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

export const Edit = styled.div`
    transition: 0.3s;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    :hover {
        color: blue;
    }
`
