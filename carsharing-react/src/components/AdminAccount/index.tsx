import * as ST from 'components/AdminAccount/styled'
import { useState } from 'react'
import { Setting1 } from 'components/AdminAccount/AdminTabs/Setting1'
import { Setting2 } from 'components/AdminAccount/AdminTabs/Setting2'
import { Setting3 } from 'components/AdminAccount/AdminTabs/Setting3'

const enum Tabs {
    tab1 = 1,
    tab2 = 2,
    tab3 = 3,
}

export const AdminAccount = () => {
    const [tab, setTab] = useState<Tabs>(Tabs.tab1)
    const getTab = () => {
        switch (tab) {
            case Tabs.tab1:
                return <Setting1 />
                break
            case Tabs.tab2:
                return <Setting2 />
                break
            case Tabs.tab3:
                return <Setting3 />
                break
        }
    }

    return (
        <ST.Wrapper>
            <ST.Menu>
                <ST.MenuItem onClick={() => setTab(Tabs.tab1)}>Настройка 1</ST.MenuItem>
                <ST.MenuItem onClick={() => setTab(Tabs.tab2)}>Настройка 2</ST.MenuItem>
                <ST.MenuItem onClick={() => setTab(Tabs.tab3)}>Настройка 3</ST.MenuItem>
            </ST.Menu>
            <ST.ContentWrapper>
                <ST.Content>{getTab()}</ST.Content>
            </ST.ContentWrapper>
        </ST.Wrapper>
    )
}
