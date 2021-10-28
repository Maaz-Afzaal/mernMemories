import React, { useEffect } from 'react';
import { Grow, AppBar } from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import './styles.css';
import { getPosts } from './actions/posts';
import { useDispatch } from 'react-redux';
import { red } from '@material-ui/core/colors';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <AppBar position="static" color="inherit" className="appBar">
          <h2 className="heading">
            Memories
            <img
              src={memories}
              alt="memories"
              className="img-fluid image"
              style={{ maxHeight: '60px', maxWidth: '60px' }}
            />
          </h2>
        </AppBar>
        <Grow in>
          <div className="container">
            <div className="d-flex justify-content-around row">
              <div className="col-12 col-sm-7">
                <Posts />
              </div>
              <div className="col-12 col-sm-4" style={{ background: red }}>
                <Form />
              </div>
            </div>
          </div>
        </Grow>
      </div>
    </>
  );
};
export default App;
