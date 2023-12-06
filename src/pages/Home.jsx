import React from 'react'
import SideBar from '../components/SideBar'
import { Create } from '../components/Buttons'
const Home = () => {
  return (
    <div className='home'>
      <h1>Home</h1>
      <Create link="../painting/create" title="Create Painting" />
      <Create link="../buyer/create" title="Create Buyers" />
      <Create link="../dimension/create" title="Create Dimensions" />
      <Create link="../medium/create" title="Create Medium" />
    </div>
  )
}

export default Home