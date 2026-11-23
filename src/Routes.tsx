import React from 'react'
import { Route, Routes as RouterRoutes, BrowserRouter } from 'react-router-dom'

import {MainPage, Resume, PageNotFound, Secret} from './pages/pages'

export const Routes: React.FC = () => {

    return (
        <>
            <BrowserRouter>
                <RouterRoutes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/secretsauce/*' element={<Secret />} />
                    <Route path='/resume/*' element={<Resume />} />
                    <Route path="/404/*" element={<PageNotFound />} />
                    <Route path="*" element={<PageNotFound />} />
                </RouterRoutes>
            </BrowserRouter>
        </>
    )
}
