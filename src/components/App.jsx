import { useState } from "react";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification"
import PropTypes from "prop-types"
import "./GeneralStyles.css"



export function App({title}) {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const countTotalFeedback = () => {
    let total = good + neutral + bad
    return total 
  }
  
  const countPositiveFeedbackPercentage = () => {
    return Math.floor(good / countTotalFeedback() * 100) || 0;
  }
  
  const handleFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };
    

  
  return (
      <div className="cardWrap">
                <Section
                    title={title}
                    />
                <FeedbackOptions
                    options={["good", "neutral", "bad"]}
                    onLeaveFeedback={handleFeedback}
                    />
                {countTotalFeedback() !== 0
                    ?
                    <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                    />
                    :
                    <Notification message="There is no feedback" />}                             
            </div>
        )
    }
    
      
      
      
      
      
      
      App.propTypes = {
title: PropTypes.string.isRequired,
};





