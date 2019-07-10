import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/Quiz';

import StartQuiz from './StartQuiz';
import EndQuiz from './EndQuiz';
import ShowQuestion from './ShowQuestion';
import Stepper from './Stepper';

//import { makeStyles } from '@material-ui/core/styles';

//const useStyles = makeStyles((theme) => ({}));
const quiz = {
  id: 1,
  title: 'Super Tough Quiz',
  description: 'Some markdown content that describes the quiz.',
  instructions:
    'Some more markdown content that can provide instructions, tips, etc.',
  questions: [
    {
      id: 1,
      prompt:
        'Which of the items below is a correct example of an Interface in C#?',
      answers: [
        {
          id: 1,
          content: 'public interface Foo { void bar(); }',
          isCorrect: true,
        },
        {
          id: 1,
          content: 'public int Foo { void bar(); }',
          isCorrect: false,
        },
        {
          id: 1,
          content: 'public interface Foo [ void bar(); ]',
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      prompt:
        'Where do you configure services for dependency injection in an ASP.NET Core project?',
      answers: [
        {
          id: 1,
          content: 'Startup.Configure()',
          isCorrect: true,
        },
        {
          id: 1,
          content: 'DependencyInjection.Configure()',
          isCorrect: false,
        },
        {
          id: 1,
          content: 'Startup.ConfigureServices()',
          isCorrect: false,
        },
      ],
    },
  ],
};

class TakeQuiz extends React.Component {
  state = {
    questionIndex: -1,
    questions: quiz.questions,
  };

  isQuizNotStarted = () => {
    const { questionIndex } = this.state;
    return questionIndex < 0;
  };

  isQuizInProgress = () => {
    const { questionIndex, questions } = this.state;
    return questionIndex >= 0 && questionIndex < questions.length;
  };

  isQuizCompleted = () => {
    const { questionIndex, questions } = this.state;
    return questionIndex >= questions.length;
  };

  handleStartQuiz = () => {
    const { questionIndex } = this.state;
    console.log('questionIndex', questionIndex);
    this.setState({
      questionIndex: questionIndex + 1,
    });
  };

  handleNextQuestion = () => {
    const { questionIndex } = this.state;
    this.setState({
      questionIndex: questionIndex + 1,
    });
  };

  render() {
    const { questions, questionIndex } = this.state;
    console.log('takequiz props', this.props);
    //const classes = useStyles();
    const questionCards = [
      <StartQuiz />,
      ...questions.map((q) => <ShowQuestion question={q} />),
      <EndQuiz />,
    ];
    return (
      <React.Fragment>
        <Stepper items={questionCards} />
        {this.isQuizNotStarted() ? (
          <StartQuiz onStartQuiz={this.handleStartQuiz} />
        ) : null}
        {this.isQuizInProgress() ? (
          <ShowQuestion
            question={questions[questionIndex]}
            onNextQuestion={this.handleNextQuestion}
          />
        ) : null}
        {this.isQuizCompleted() ? <EndQuiz /> : null}
      </React.Fragment>
    );
  }
}

export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(TakeQuiz);
