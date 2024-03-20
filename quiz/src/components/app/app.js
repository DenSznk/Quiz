import './app.scss'
import  Header from '../header/header'
import ButtonsPanel from '../buttons-panel/buttons-panel'
import QuizPanel from '../quiz-panel/quiz-panel'

function App() {
    return (
        <div className="app">
            <Header/>
            <QuizPanel/>
            <ButtonsPanel/>

        </div>
    )
}

export default App