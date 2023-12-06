import SideBar from './components/SideBar'
import Routing from './routing'

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function App() {

  return (
    <>
    <div className='layout'>
      <SideBar/>
      <div className='content'>
        <Routing/>
      </div>
    </div>
    </>
  )
}

export default App
