import * as api from '../api/index';
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log('data is', data);
    dispatch({ type: 'FETCH_ALL', payload: JSON.stringify(data) });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost =
  (creator, title, message, tags, selectedFile) => async (dispatch) => {
    try {
      const post = {
        creator: creator,
        title: title,
        message: message,
        tags: tags,
        selectedFile: selectedFile,
      };

      const { data } = await api.createPost(post);
      dispatch({ type: 'CREATE', payload: JSON.stringify(data) });
    } catch (error) {
      console.log(error.message);
    }
  };
