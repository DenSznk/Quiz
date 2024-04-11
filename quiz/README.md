ha1
First homework will be dedicated to initializing our project and adding our first screen with a couple of reusable UI components. Our application is a Quiz app, in which users configure their quiz settings, then we get the required amount of questions from API and start the quiz. We also show results at the end and save user statistics locally to show them later on a separate screen.

+ First screen, which is a quiz configuration screen should include following components:

+ Number input for “number of questions”. Value have to be from 5 to 15
+ Select input for “category”
+ Select input for “difficulty”
+ Select input for “type”
+ Select input for “time” with values: 1m, 2m, 5m
+ “Start quiz” button
+ “See my stats” button

ha2
in this homework we are creating a quiz results screen. This screen will after users finish their quiz, either by answering all the questions or running out of time. For now we can just put this new screen as the root screen of our application, because we don’t have navigation yet. Results screen should include following components:

+ General result text like “Thank you for completing this quiz. Here are your results”
+ Result in numbers of correct answers. For example “You answered 5 out of 10 questions correctly”.
+ Quiz configuration, type, category, time and difficulty
+ Text indicating how much time user took to answer all the questions
+ A button “Restart” which will restart this same quiz with same configuration from the start
+ A button “Choose another quiz” which will navigate the user to quiz configuration screen

For now we only focus on creating the UI part without any actual logic, we will add it later on

ha3
+ In this homework we will add navigation to our app. Firstly we need to create a new empty screen, which later will be a Statistics screen (not adding anything there for now). After that we need to add navigation to our app. For now we are adding following navigation actions:

- Upon pressing the “Start quiz” button from the first screen we navigate to the main quiz screen. (With mock data for now)
- Upon pressing the “End quiz” button on the main quiz screen we should see a modal window with some text and 2 buttons - “Cancel” and “Confirm”.
- Upon pressing “Cancel” button, we just close this modal window
- Upon pressing “Confirm” button we need to navigate user back to configuration screen
- After answering the last question or if timer ends on the main quiz screen, we need to navigate users to the result screen
- On the result screen upon pressing the “Choose another quiz” button we need to navigate users to quiz configuration screen
- On the result screen upon pressing the “Restart quiz” button we need to navigate users to main quiz screen and restart current quiz (with mock data for now)
- On the configuration scream upon pressing the “See my statistics” button we need to navigate to the newly created empty statistics screen

ha4
In this homework we will start adding our logic to the application as well as global state manager. We need to do following things:

Add Redux Toolkit to our dependencies
Upon choosing configuration we need to save this configuration to Redux store (slice) and send a request to Quiz API to get questions with answers before navigating to main quiz screen
After user finishes the quiz (by answering all the questions or running out of time) and we navigate him to quiz result screen, we should show quiz results, as described in Homework #3
After user presses “Choose another quiz” button on the result screen we need to clear questions data from Redux store (questions, answers and configuration) before navigating users to configuration screen
After user presses “Restart quiz” button we need to send one more API request to get new bunch of questions with same configuration (that we previously stored in Redux store) before navigating users to main quiz screen to restart the quiz with new questions

ha5
In this homework we will add additional logic for after users finish their quiz. We will work on statistics data for our quiz app. Every time users finish their quiz we will take their data and save it in our Redux store, so that they can review that data later in the statistics screen. In order for this to work we need to add persistence to our Redux store. For this we can use redux-persist library. We need to persist only statistics slices, questions or configuration slices do not need to be persisted. In this homework we need to add following things:

Add number of questions that user took in this quiz to overall number of questions user took
Add number of correct questions that this user got to overall number of correct questions for this user
Add the number of questions for each category that the user took in this quiz. For example if a user took 10 “Mythology” questions, we add 10 to overall number of “Mythology” questions
Add the number of questions for each difficulty that the user took in this quiz. For example if a user took 10 difficult questions, we add 10 to overall number of “Difficult” questions
Add the number of questions for each type of question that the user took in this quiz. For example if a user took 10 “True/false” questions, we add 10 to overall number of “True/false” questions
All this data has to be stored in the “Statistics” (or “stats”) slice, which we need to persist using the redux-persist library. Other slices do not need to be persisted