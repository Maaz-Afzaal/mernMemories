import { combineReducers } from 'redux';
import posts from './posts';

import { createForms } from 'react-redux-form';
const initialFormState = {
  creator: '',
  title: '',
  tags: '',
  message: '',
  selectedFile: [],
};

export default combineReducers({
  posts,
  ...createForms({
    pForm: initialFormState,
  }),
});
