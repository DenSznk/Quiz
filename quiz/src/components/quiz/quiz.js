import "./quiz.scss";
import Modal from '../modal/modal'
import {useState} from 'react'

function Quiz() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }
    const handleCloseModal = () => {
        setIsModalOpen(false)
    }
  return (
    <>
      <div className="quiz-block">
        <h3 className="quiz-header">Quiz</h3>
        <div className="quiz-questions-block">
          <div className="timer">00:00</div>
          <div className="question">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit vel voluptates, nesciunt nobis nisi ea deserunt,
              tempora aliquam magnam impedit, architecto illum ducimus
              consequuntur voluptas excepturi repellat quisquam culpa sunt!
            </p>
          </div>
          <div className="answers">
            <div className="answer">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam et
              officia debitis repudiandae beatae accusantium animi placeat
              voluptatum laboriosam reiciendis aut modi distinctio expedita
              voluptate, aliquam minima sunt sequi reprehenderit?
            </div>
            <div className="answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur libero vel, cupiditate illo nisi ducimus aliquam,
              optio quaerat ab dolore cum, saepe temporibus aperiam ullam
              consectetur sit facilis impedit? Corporis!
            </div>
            <div className="answer">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              nisi exercitationem? Corrupti recusandae, numquam blanditiis quas
              nihil neque nobis inventore provident dolore beatae alias atque
              repudiandae voluptates debitis laborum a.
            </div>
            <div className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              doloribus ducimus fuga ex aut, adipisci asperiores nobis minima
              velit laboriosam esse, dolorum nemo enim, nostrum natus
              reiciendis. Cum, iste sint!
            </div>
          </div>
          <div className="question">
            <p>
              True/false question Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <buttons className="buttons-panel">
            <button className="btn btn-white">True</button>
            <button className="btn btn-white">False</button>
          </buttons>
        </div>
      </div>
      <div className="buttons">
        <button className="btn" onClick={handleOpenModal}>End Quiz</button>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal}/>}
    </>
  );
}

export default Quiz;
