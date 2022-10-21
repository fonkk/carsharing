import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoadingPage } from 'pages/LoadingPage'
import { PATHS } from 'constants/PATHS'

const Main = lazy(() => import('pages/MainPage').then((module) => ({ default: module.MainPage })))
const Error = lazy(() => import('pages/ErrorPage').then((module) => ({ default: module.ErrorPage })))

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
        </Routes>
    )
}
