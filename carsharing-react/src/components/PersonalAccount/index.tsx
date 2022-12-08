import * as ST from 'components/AdminAccount/styled'
import { useState } from 'react'
import { MainInfo } from 'components/PersonalAccount/UserTabs/MainInfo'
import { MyCar } from 'components/PersonalAccount/UserTabs/MyCar'

const enum Tabs {
    tab1 = 1,
    tab2 = 2,
}

export const PersonalAccount = () => {
    const [tab, setTab] = useState<Tabs>(Tabs.tab1)
    const getTab = () => {
        switch (tab) {
            case Tabs.tab1:
                return <MainInfo />
                break
            case Tabs.tab2:
                return <MyCar />
                break
        }
    }

    return (
        <ST.Wrapper>
            <ST.Menu>
                <ST.MenuItem onClick={() => setTab(Tabs.tab1)}>Личные данные</ST.MenuItem>
                <ST.MenuItem onClick={() => setTab(Tabs.tab2)}>Моя машина</ST.MenuItem>
            </ST.Menu>
            <ST.ContentWrapper>
                <ST.Content>{getTab()}</ST.Content>
            </ST.ContentWrapper>
        </ST.Wrapper>
    )
}
