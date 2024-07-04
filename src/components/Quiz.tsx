import {useState} from 'react'
import { Question1to10 } from '../data/Question1to10'
import { Question11to20 } from '../data/Question11to20'
import { Question21to30 } from '../data/Question21to30'
import { Question31to40 } from '../data/Question31to40'
import { Question41to50 } from '../data/Question41to50'

export default function Quiz () {
 
 const [currentQuestion,setCurrentQuestion] = useState<number>(0)
 const [score,setScore] =useState<number>(0)
 const [showScore,setShowScore]=useState<boolean>(false)
 
 const handleAnswerOptionClick = (isCorrect:boolean) => {
  if (isCorrect) {
    setScore(score + 1);
  }

  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < Question1to10.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    setShowScore(true);
  }
};
return (
  <div className="max-w-2xl mx-auto p-4">
    {showScore ? (
      <div className="text-center text-xl font-bold">
        You scored {score} out of {Question1to10.length}
      </div>
    ) : (
      <div className="space-y-4">
        <div className="text-lg font-semibold">
          <span className="mr-2">Question {currentQuestion + 1}</span>/{Question1to10.length}
        </div>
        <div className="text-xl">{Question1to10[currentQuestion].Question}</div>
        <div className="space-y-2">
          {Question1to10[currentQuestion].Options.map((option:any, index:any) => (
            <button
              key={index}
              className="block w-full bg-gray-200 p-2 rounded hover:bg-gray-300"
              onClick={() => handleAnswerOptionClick(option === Question1to10[currentQuestion].Answer)}
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
