import React, { FC, useState } from 'react'
import * as ST from './styled'
import Select from 'react-select/base'
import { GroupBase } from 'react-select'
import { Close } from './styled'
interface IEditCarInfo {
    isShow: boolean
    handleIsShow: () => void
}

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

const EditCarInfo = ({ isShow, handleIsShow }: IEditCarInfo) => {
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
            {isShow ? (
                <ST.ModalOverlay
                    onClick={(event) => {
                        handleIsShow()
                    }}
                >
                    <ST.ModalWrapper
                        onClick={(event) => {
                            event.stopPropagation()
                        }}
                    >
                        <ST.Wrapper>
                            <ST.Close onClick={handleIsShow}>X</ST.Close>
                            <ST.TopBlock>
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
                            </ST.TopBlock>
                            <ST.BottomBlock>
                                <ST.StyledInput placeholder={'Пробег'} />
                                <ST.StyledInput placeholder={'Название'} />
                                <ST.StyledInput placeholder={'Год производства'} />
                                <ST.Button>Создать</ST.Button>
                            </ST.BottomBlock>
                        </ST.Wrapper>
                    </ST.ModalWrapper>
                </ST.ModalOverlay>
            ) : null}
        </>
    )
}

export default EditCarInfo
