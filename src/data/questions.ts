import type { Question } from '../components/QuestionCard'

export const questions: Question[] = [
  {
    id: 1,
    answerType: 'multiple-choice',
    text: 'What does HTML stand for?',
    choices: ['HyperText Markup Language', 'Hyperlink Transfer Markup Language', 'HighText Machine Language', 'HyperText Management Language'],
    correctAnswer: 'HyperText Markup Language',
  },
  { id: 2, answerType: 'text', text: 'Which CSS property changes the text color?', correctAnswer: 'color' },
  {
    id: 3,
    answerType: 'multiple-choice',
    text: 'Which JavaScript keyword declares a block-scoped variable?',
    choices: ['var', 'let', 'const', 'function'],
    correctAnswer: 'let',
  },
  { id: 4, answerType: 'text', text: 'What does JSX allow React developers to write inside JavaScript?', correctAnswer: 'HTML-like code' },
  {
    id: 5,
    answerType: 'multiple-choice',
    text: 'Which HTML tag is used to create a hyperlink?',
    choices: ['<link>', '<a>', '<href>', '<url>'],
    correctAnswer: '<a>',
  },
  { id: 6, answerType: 'text', text: 'Which property is used to create spacing inside an element?', correctAnswer: 'padding' },
  {
    id: 7,
    answerType: 'multiple-choice',
    text: 'What is the purpose of the array map() method?',
    choices: ['Sort values in place', 'Create a new array by transforming items', 'Delete items from an array', 'Convert strings to numbers'],
    correctAnswer: 'Create a new array by transforming items',
  },
  { id: 8, answerType: 'text', text: 'Which HTML element is used to define the main content of a document?', correctAnswer: '<main>' },
  {
    id: 9,
    answerType: 'multiple-choice',
    text: 'Which CSS selector targets an element by its id?',
    choices: ['.idName', '#idName', 'idName', '*idName'],
    correctAnswer: '#idName',
  },
  { id: 10, answerType: 'text', text: 'What is the default display behavior of a <div> element?', correctAnswer: 'block' },
]