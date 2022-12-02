import * as ST from './styled'

const filters = {
    colors: [
        {
            value: 1,
            label: 'Зеленый',
        },
    ],
    company: [{ value: 1, label: 'Зеленый' }],
    type: [{ value: 1, label: 'Зеленый' }],
    tariff: [{ value: 1, label: 'Зеленый' }],
}

export const AllCars = () => {
    return (
        <ST.Wrapper>
            <ST.Filters>
                <ST.CustomReactSelect
                    options={filters.colors}
                    className='basic-multi-select'
                    classNamePrefix='select'
                />
                <ST.CustomReactSelect options={filters.company} />
                <ST.CustomReactSelect options={filters.type} />
                <ST.CustomReactSelect options={filters.tariff} />
            </ST.Filters>
            <ST.TableWrapper>
                <ST.Table>
                    <ST.TableHead>
                        <ST.TableRow>
                            <ST.ColumnHeader>РЕД</ST.ColumnHeader>
                            <ST.ColumnHeader>ID</ST.ColumnHeader>
                            <ST.ColumnHeader>Марка</ST.ColumnHeader>
                            <ST.ColumnHeader>Название</ST.ColumnHeader>
                            <ST.ColumnHeader>Тип</ST.ColumnHeader>
                            <ST.ColumnHeader>Год выпуска</ST.ColumnHeader>
                            <ST.ColumnHeader>Занятость</ST.ColumnHeader>
                            <ST.ColumnHeader>Пробег</ST.ColumnHeader>
                            <ST.ColumnHeader>Тариф</ST.ColumnHeader>
                            <ST.ColumnHeader>Цвет</ST.ColumnHeader>
                        </ST.TableRow>
                    </ST.TableHead>
                </ST.Table>
                <ST.ScrollableTableBody>
                    <ST.Table>
                        <ST.TableBody>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renaultфывфывфывлдоапртфыжлвптьфзщываопр</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                            <ST.TableRow>
                                <ST.TableCell>Ред</ST.TableCell>
                                <ST.TableCell>1</ST.TableCell>
                                <ST.TableCell>Renault</ST.TableCell>
                                <ST.TableCell>Logan</ST.TableCell>
                                <ST.TableCell>Сидан</ST.TableCell>
                                <ST.TableCell>2012</ST.TableCell>
                                <ST.TableCell>Свободен</ST.TableCell>
                                <ST.TableCell>11200</ST.TableCell>
                                <ST.TableCell>Эконом</ST.TableCell>
                                <ST.TableCell>Зеленый</ST.TableCell>
                            </ST.TableRow>
                        </ST.TableBody>
                    </ST.Table>
                </ST.ScrollableTableBody>
            </ST.TableWrapper>
        </ST.Wrapper>
    )
}
