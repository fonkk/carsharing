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
    border-radius: 3px;
    box-sizing: border-box;
    margin-bottom: 30px;
`

export const CustomReactSelect = styled(Select)`
    width: 15%;
    margin-right: 10px;
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
