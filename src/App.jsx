import Header from './Components/Header.jsx'
import UserCode from './Components/UserCode.jsx'
import NewCode from './Components/NewCode.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <main className='flex '>
        <UserCode />
        <NewCode />
      </main>
    </div>
  )
}

export default App