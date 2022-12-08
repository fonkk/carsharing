import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoadingPage } from 'pages/LoadingPage'
import { PATHS } from 'constants/PATHS'

const Main = lazy(() => import('pages/MainPage').then((module) => ({ default: module.MainPage })))
const Error = lazy(() => import('pages/ErrorPage').then((module) => ({ default: module.ErrorPage })))
const Admin = lazy(() => import('pages/AdminAccountPage').then((module) => ({ default: module.AdminAccountPage })))
const Personal = lazy(() =>
    import('pages/PersonalAccountPage').then((module) => ({ default: module.PersonalAccountPage }))
)
const Cars = lazy(() => import('pages/CarsPage').then((module) => ({ default: module.CarsPage })))
const Car = lazy(() => import('pages/CarPage').then((module) => ({ default: module.CarPage })))

export const Routing = () => {
    return (
        <Routes>
            <Route
                path={PATHS.main}
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <Main />
                    </Suspense>
                }
            />
            <Route
                path={PATHS.error}
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <Error />
                    </Suspense>
                }
            />
            <Route
                path={PATHS.admin}
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <Admin />
                    </Suspense>
                }
            />
            <Route
                path={PATHS.personal}
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <Personal />
                    </Suspense>
                }
            />
            <Route
                path={PATHS.cars}
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <Cars />
                    </Suspense>
                }
            />
            <Route
                path={PATHS.car + `/:carId`}
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <Car />
                    </Suspense>
                }
            />
        </Routes>
    )
}
