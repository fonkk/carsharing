import * as ST from './styled'
export const MainInfo = () => {
    return (
        <ST.Wrapper>
            <ST.RowInfo>
                <ST.RowLabel>Имя:</ST.RowLabel>
                <ST.RowText>Денис</ST.RowText>
            </ST.RowInfo>
            <ST.RowInfo>
                <ST.RowLabel>Фамилия:</ST.RowLabel>
                <ST.RowText>Утяганов</ST.RowText>
            </ST.RowInfo>
            <ST.RowInfo>
                <ST.RowLabel>Отчество:</ST.RowLabel>
                <ST.RowText>Александрович</ST.RowText>
            </ST.RowInfo>
        </ST.Wrapper>
    )
}
