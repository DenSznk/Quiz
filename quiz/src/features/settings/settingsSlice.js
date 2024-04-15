import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    questionsAmount: "10",
    questionType: '',
    quizTime: "1",
    quizDifficulties: '',
    questionsCategory: [],
  },
  reducers: {
    setQuestionsAmount: (state, action) => {
      const amount = parseInt(action.payload)
      if (amount >= 5 && amount <= 15) {
        state.questionsAmount = action.payload;
      } else {
        state.questionsAmount = "10";
      }
    },

    setQuestionsType: (state, action) => {
        const validTypes = ["multiple", "boolean", ""];
        state.questionType = validTypes.includes(action.payload) ? action.payload : "";
      },

    setQuizTime: (state, action) => {
      state.quizTime = action.payload;
    },

    setQuizDifficulties: (state, action) => {
        const validTypes = ["easy", "medium", "hard", ''];
        state.quizDifficulties = validTypes.includes(action.payload) ? action.payload : "";
    },
  },
});

export const {
  setQuestionsAmount,
  setQuestionsType,
  setQuizTime,
  setQuizDifficulties,
} = settingsSlice.actions;
export default settingsSlice.reducer;
