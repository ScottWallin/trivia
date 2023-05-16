import { appState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function drawQuestions() {
  console.log('riddle me this bish', appState.questions)

}


export class QuestionsController {
  constructor() {
    console.log('controlling the questions')
    appState.on('question', drawQuestions)
  }
}