import Header from './Components/Header.jsx'
import UserCode from './Components/UserCode.jsx'
import NewCode from './Components/NewCode.jsx'
import Convert from './Components/Convert.jsx'
import Output from './Components/Output.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <main className='flex align-center'>
        <UserCode />
        <Convert />
        <NewCode />
        <Output />
      </main>
    </div>
  )
}

export default App