import React from 'react'
import * as ST from './styled'
import Icon from 'assets/PersonalAccounIconPic.png'
import { useNavigate } from 'react-router-dom'
import { PATHS } from 'constants/PATHS'

export const Header = () => {
    const navigation = useNavigate()

    return (
        <ST.Header>
            <ST.HeaderLeftSide>
                <ST.HeaderItem onClick={() => navigation(PATHS.main)}>Главная</ST.HeaderItem>
                <ST.HeaderItem onClick={() => navigation(PATHS.cars)}>Машины</ST.HeaderItem>
                <ST.HeaderItem onClick={() => navigation(PATHS.qa)}>QA</ST.HeaderItem>
            </ST.HeaderLeftSide>
            <ST.PersonalAccountBlock>
                <ST.PersonalAccountText onClick={() => navigation(PATHS.personal)}>
                    Личный кабинет
                </ST.PersonalAccountText>
                <ST.PersonalAccountIconBlock onClick={() => navigation(PATHS.personal)}>
                    <ST.PersonalAccountIcon src={Icon} />
                </ST.PersonalAccountIconBlock>
            </ST.PersonalAccountBlock>
        </ST.Header>
    )
}
