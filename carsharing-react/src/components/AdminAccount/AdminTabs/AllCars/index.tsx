import * as ST from './styled'
import { useState } from 'react'
import { GroupBase } from 'react-select'
import Select from 'react-select/base'
import EditCarInfo from 'components/modals/EditCarInfo'

const filters = {
    colors: [
        { value: 1, label: 'Зеленый' },
        { value: 2, label: 'Красный' },
    ],
    company: [
        { value: 1, label: 'Renault' },
        { value: 1, label: 'BMW' },
    ],
    type: [
        { value: 1, label: 'Сидан' },
        { value: 1, label: 'Внедорожник' },
    ],
    tariff: [
        { value: 1, label: 'Эконом' },
        { value: 2, label: 'Комфорт' },
        { value: 3, label: 'Бизнес' },
    ],
}

export const AllCars = () => {
    const [isShow, setIsShow] = useState(false)

    const handleIsShow = () => {
        setIsShow((prevState) => !prevState)
    }

    const selectsRefs: Select<unknown, boolean, GroupBase<unknown>>[] = []

    const [colorSelectValue, setColorSelectValue] = useState(null)

    const handleColorSelectValue = (value: any) => {
        setColorSelectValue(value)
    }

    const [companySelectValue, setCompanySelectValue] = useState(null)

    const handleCompanySelectValue = (value: any) => {
        setCompanySelectValue(value)
    }

    const [typeSelectValue, setTypeSelectValue] = useState(null)

    const handleTypeSelectValue = (value: any) => {
        setTypeSelectValue(value)
    }

    const [tariffSelectValue, setTariffSelectValue] = useState(null)

    const handleTariffSelectValue = (value: any) => {
        setTariffSelectValue(value)
    }

    const resetFilters = () => {
        selectsRefs.map((item) => {
            //@ts-ignore
            item.clearValue()
        })
    }
    const handleSelectsRefs = (reference: Select<unknown, boolean, GroupBase<unknown>>) => {
        selectsRefs.push(reference)
    }

    return (
        <>
            <ST.Wrapper>
                <ST.Filters>
                    <ST.SelectsWrapper>
                        <ST.CustomReactSelect
                            options={filters.colors}
                            placeholder={'Цвет'}
                            onChange={handleColorSelectValue}
                            isClearable={true}
                            ref={(ref) => {
                                if (ref) {
                                    handleSelectsRefs(ref)
                                }
                            }}
                        />
                        <ST.CustomReactSelect
                            options={filters.company}
                            placeholder={'Марка'}
                            onChange={handleCompanySelectValue}
                            isClearable={true}
                            ref={(ref) => {
                                if (ref) {
                                    handleSelectsRefs(ref)
                                }
                            }}
                        />
                        <ST.CustomReactSelect
                            options={filters.type}
                            placeholder={'Тип'}
                            onChange={handleTypeSelectValue}
                            isClearable={true}
                            ref={(ref) => {
                                if (ref) {
                                    handleSelectsRefs(ref)
                                }
                            }}
                        />
                        <ST.CustomReactSelect
                            options={filters.tariff}
                            placeholder={'Тариф'}
                            onChange={handleTariffSelectValue}
                            isClearable={true}
                            ref={(ref) => {
                                if (ref) {
                                    handleSelectsRefs(ref)
                                }
                            }}
                        />
                    </ST.SelectsWrapper>
                    <ST.ButtonsWrapper>
                        <ST.Button onClick={resetFilters}>Сбросить</ST.Button>
                        <ST.Button>Поиск</ST.Button>
                    </ST.ButtonsWrapper>
                </ST.Filters>
                <ST.TableWrapper>
                    <ST.Table>
                        <ST.TableHead>
                            <ST.TableRow>
                                <ST.ColumnHeader>Редактирование</ST.ColumnHeader>
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
                                    <ST.TableCell>
                                        <ST.Edit onClick={handleIsShow}>ред</ST.Edit>
                                    </ST.TableCell>
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
            <EditCarInfo isShow={isShow} handleIsShow={handleIsShow} />
        </>
    )
}
