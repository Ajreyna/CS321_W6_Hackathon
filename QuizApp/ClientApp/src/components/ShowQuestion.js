import React, { useState } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AnswerCards from './AnswerCards';
import AnswerCard from './AnswerCard';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const ShowQuestion = ({ question }) => {
  const classes = useStyles();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function handleAnswerSelected(answer) {
    setSelectedAnswer(answer);
  }

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {question.prompt}
        </Typography>
        <AnswerCards>
          {question.answers.map((a, i) => (
            <AnswerCard
              answer={a}
              key={i}
              selected={selectedAnswer && a.id === selectedAnswer.id}
              onSelected={handleAnswerSelected}
            />
          ))}
        </AnswerCards>
      </Container>
    </div>
  );
};

export default connect()(ShowQuestion);
