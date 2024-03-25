import  './result-screen.scss';

function ResultScreen() {
    return (
        <div className="result-block">
            <h1 className="result-header">Thank you for completing this quiz.</h1>
            <h2 className="stats">You answered 5 out of 10 questions correctly</h2>
            <h2 className="configuration">You spent 5 minutes on this level</h2>
        </div>
    )
}

export default ResultScreen