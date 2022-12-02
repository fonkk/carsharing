import * as ST from 'components/AdminAccount/styled'
import { useState } from 'react'
import { AddNewCar } from 'components/AdminAccount/AdminTabs/AddNewCar'
import { AllCars } from 'components/AdminAccount/AdminTabs/AllCars'

const enum Tabs {
    allCars = 1,
    addNewCar = 2,
}

export const AdminAccount = () => {
    const [tab, setTab] = useState<Tabs>(Tabs.allCars)
    const getTab = () => {
        switch (tab) {
            case Tabs.allCars:
                return <AllCars />
                break
            case Tabs.addNewCar:
                return <AddNewCar />
                break
        }
    }

    return (
        <ST.Wrapper>
            <ST.Menu>
                <ST.MenuItem onClick={() => setTab(Tabs.allCars)}>Все машины</ST.MenuItem>
                <ST.MenuItem onClick={() => setTab(Tabs.addNewCar)}>Добавить новую машину</ST.MenuItem>
            </ST.Menu>
            <ST.ContentWrapper>
                <ST.Content>{getTab()}</ST.Content>
            </ST.ContentWrapper>
        </ST.Wrapper>
    )
}
