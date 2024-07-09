import {useState} from 'react'
import { Question1to10 } from '../data/Question1to10'
import { Question11to20 } from '../data/Question11to20'
import { Question21to30 } from '../data/Question21to30'
import { Question31to40 } from '../data/Question31to40'
import { Question41to50 } from '../data/Question41to50'


//an array of the array of questions
const quizTotalQuestions = [
  ...Question1to10,
  ...Question11to20,
  ...Question21to30,
  ...Question31to40,
  ...Question41to50
];

export default function Quiz () {
  //initialize current score,current question and scored points
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  

  //check if option selected is correct 
  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
//if next question is less than quiz total question length
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizTotalQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
//if the showScore is true
  return (
    <div className="max-w-2xl mx-auto p-4">
      {showScore ? (
        <div className="text-center text-xl font-bold">
          You scored {score} out of {quizTotalQuestions.length}
        </div>
      ) : (
        //if showScore is false
        <div className="space-y-4">
          <div className="text-lg font-semibold">
            <span className="mr-2">Question {currentQuestion + 1}</span>/{quizTotalQuestions.length}
          </div>
          <div className="text-xl">{quizTotalQuestions[currentQuestion].Question}</div>
          <div className="space-y-2">
            {quizTotalQuestions[currentQuestion].Options.map((option: any, index: any) => (
              <button
                key={index}
                className="block w-full bg-gray-200 p-2 rounded hover:bg-gray-300"
                onClick={() => handleAnswerOptionClick(option === quizTotalQuestions[currentQuestion].Answer)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
