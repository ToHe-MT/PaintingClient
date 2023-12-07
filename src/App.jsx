import SideBar from './components/SideBar'
import Routing from './routing'
import { useParams } from 'react-router-dom';

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function App() {
  const {id } = useParams()
  return (
    <>
    <div className='layout'>
      <SideBar/>
      <div className='content'>
        <Routing id={id}/>
      </div>
    </div>
    </>
  )
}

export default App
