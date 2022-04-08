import { createSlice } from "@reduxjs/toolkit";
import { getProjects } from "../api";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    loading: false,
    projects: [],
    searchString: ""
  },
  reducers: {
    projectsLoading(state, action) {
      state.loading = true;
    },
    projectsReceived(state, action) {
      state.loading = false;
      state.projects = action.payload;
    },
    searchString(state, action){
      state.searchString = action.payload
    }
  },
});

export const { projectsLoading, projectsReceived, searchString } = projectSlice.actions;

export const fetchProjects = () => async (dispatch) => {
  dispatch(projectsLoading());
  const response = await getProjects();
  dispatch(projectsReceived(response));
};

export default projectSlice.reducer;
