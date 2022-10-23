import './App.scss';
import History from './components/History'
import Chat from './components/Chat'

function App() {
  return (
    <div className='appContainer'>
      <div className='content'>
        <History/>
        <Chat/>
      </div>

    </div>
    )
}

export default App;
