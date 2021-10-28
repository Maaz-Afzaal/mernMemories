import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form';
import FileBase from 'react-file-base64';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
  Label,
} from 'reactstrap';
import { createPost } from '../../actions/posts';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const Post_Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (user) => {
    const base64 = await convertBase64(user.selectedFile[0]);
    console.log(base64);
    dispatch(
      createPost(user.creator, user.title, user.message, user.tags, base64),
    );
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <Form model="pForm" onSubmit={(user) => handleSubmit(user)}>
        <Row className="form-group m-1">
          <Label htmlFor="creator" md={4}>
            Creator
          </Label>
          <Col md={8}>
            <Control.text
              model=".creator"
              id="creator"
              name="creator"
              placeholder="Creator"
              className="form-control"
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15),
              }}
            />
            <Errors
              className="text-danger"
              model=".creator"
              show="touched"
              messages={{
                required: 'Required',
                minLength: 'Must be greater than 2 characters',
                maxLength: 'Must be 15 characters or less',
              }}
            />
          </Col>
        </Row>
        <Row className="form-group m-1">
          <Label htmlFor="title" md={4}>
            Title
          </Label>
          <Col md={8}>
            <Control.text
              model=".title"
              id="title"
              name="title"
              placeholder="Title"
              className="form-control"
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15),
              }}
            />
            <Errors
              className="text-danger"
              model=".title"
              show="touched"
              messages={{
                required: 'Required',
                minLength: 'Must be greater than 2 characters',
                maxLength: 'Must be 15 characters or less',
              }}
            />
          </Col>
        </Row>
        <Row className="form-group m-1">
          <Label htmlFor="message" md={4}>
            Message
          </Label>
          <Col md={8}>
            <Control.text
              model=".message"
              id="message"
              name="message"
              placeholder="Message"
              className="form-control"
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15),
              }}
            />
            <Errors
              className="text-danger"
              model=".message"
              show="touched"
              messages={{
                required: 'Required',
                minLength: 'Must be greater than 2 characters',
              }}
            />
          </Col>
        </Row>
        <Row className="form-group m-1">
          <Label htmlFor="tags" md={4}>
            Tags
          </Label>
          <Col md={8}>
            <Control.text
              model=".tags"
              id="tags"
              name="tags"
              placeholder="Tags"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group m-1">
          <Col md={8} className="offset-md-4">
            <Control.file
              model=".selectedFile"
              id="selectedFile"
              name="selectedFile"
              accept=".jpeg"
            />
          </Col>
        </Row>

        <Row className="form-group m-1">
          <Col md={{ size: 8, offset: 4 }}>
            <Button type="submit" color="primary">
              Submit Post
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Post_Form;
