import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "settings/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      console.log("from fetchCategories");
      const res = await fetch("https://opentdb.com/api_category.php");
      if (!res.ok) {
        throw new Error("ServerError!!!");
      }
      const data = await res.json();
      return data.trivia_categories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    questionsAmount: "10",
    questionType: "",
    quizTime: "1",
    quizDifficulties: "",
    questionsCategories: [],
    selectedQuestionCategory: "",
    modalOpen: false,
    questions: [],
    questionIndex: 0,
    score: 0,
  },
  reducers: {
    setIncreaseScore(state) {
      state.score += 1;
    },
    setInitialScore(state) {
      state.score = 0;
    },
    setIncreaseIndex(state) {
      state.questionIndex += 1;
    },
    setInitialIndex(state) {
      state.questionIndex = 0;
    },
    setModalOpen(state, action) {
      state.modalOpen = action.payload;
    },
    setQuestionCategory(state, action) {
      state.selectedQuestionCategory = action.payload;
      if (state.selectedQuestionCategory === "Any category") {
        state.selectedQuestionCategory = "";
      }
    },

    setQuestionsAmount: (state, action) => {
      const amount = parseInt(action.payload);
      if (amount >= 5 && amount <= 15) {
        state.questionsAmount = action.payload;
      } else {
        state.questionsAmount = "10";
      }
    },

    setQuestionsType: (state, action) => {
      const validTypes = ["multiple", "boolean", ""];
      state.questionType = validTypes.includes(action.payload)
        ? action.payload
        : "";
    },

    setQuizTime: (state, action) => {
      state.quizTime = action.payload;
    },

    setQuizDifficulties: (state, action) => {
      const validTypes = ["easy", "medium", "hard", ""];
      state.quizDifficulties = validTypes.includes(action.payload)
        ? action.payload
        : "";
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.questionsCategories = action.payload;
      console.log("from extraReducers");
    });
  },
});

export const {
  setQuestionCategory,
  setQuestionsAmount,
  setQuestionsType,
  setQuizTime,
  setQuizDifficulties,
  setModalOpen,
  setQuestions,
  setInitialIndex,
  setIncreaseIndex,
  setIncreaseScore,
} = settingsSlice.actions;
export default settingsSlice.reducer;
