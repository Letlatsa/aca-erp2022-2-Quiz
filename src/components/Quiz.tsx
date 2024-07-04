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
    <div>
      <h1>Quiz App</h1>

    </div>
  )
}
