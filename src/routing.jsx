import React from 'react'
import { Routes, Route, useParams} from 'react-router-dom'

import Home from "./pages/Home"

import Dimensions from "./pages/list/Dimensions"
import Dimension_Detail from './pages/detail/Dimension_Detail'
import Dimension_Create from './pages/form/Dimension_Create'
import Dimension_Update from './pages/form/Dimension_Update'

import Mediums from "./pages/list/Mediums"
import Medium_Detail from './pages/detail/Medium_Detail'
import Medium_Create from './pages/form/Medium_Create'
import Medium_Update from './pages/form/Medium_Update'

import Buyers from "./pages/list/Buyers"
import Buyer_Detail from './pages/detail/Buyer_Detail'
import Buyer_Create from './pages/form/Buyer_Create'
import Buyer_Update from './pages/form/Buyer_Update'

import Paintings from "./pages/list/Paintings"
import Painting_Create from './pages/form/Painting_Create'
import Painting_Detail from './pages/detail/Painting_Detail'
import Painting_Update from './pages/form/Painting_Update'

const routing = () => {
    const { id } = useParams();
    return (
        <Routes>
            //Home Route
            <Route path="/" element={<Home />} />
            //Listing Route
            <Route path="/Buyers" element={<Buyers />} />
            <Route path="/dimensions" element={<Dimensions />} />
            <Route path="/mediums" element={<Mediums />} />
            <Route path="/paintings" element={<Paintings />} />

            //Detail Route
            <Route path="/buyer/:id" element={<Buyer_Detail />} />
            <Route path="/dimension/:id" element={<Dimension_Detail />} />
            <Route path="/medium/:id" element={<Medium_Detail />} />
            <Route path="/painting/:id" element={<Painting_Detail />} />

            //Create route
            <Route path="/painting/create" element={<Painting_Create />} />
            <Route path="/Buyer/create" element={<Buyer_Create/>} />
            <Route path="/dimension/create" element={<Dimension_Create/>} />
            <Route path="/medium/create" element={<Medium_Create />} />

            //Update route
            <Route path="/painting/:id/update" element={<Painting_Update />} />
            <Route path="/Buyer/:id/update" element={<Buyer_Update />} />
            <Route path="/dimension/:id/update" element={<Dimension_Update/>} />
            <Route path="/medium/:id/update" element={<Medium_Update />} />
        </Routes>
    )
}

export default routing