import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #d5d5d8c2; ;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.input`
  width: 138px;
  height: 30px;
  border: 1px solid black;
  text-align: left;
  padding-left: 10px;
  margin-bottom: 10px;
  color: black;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
`;

const AddPostModal = ({ submitPost }) => {
  const formRef = React.createRef();
  const titleRef = React.createRef();
  const bodyRef = React.createRef();
  const idRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    const id = idRef.current.value;
    const postObject = { title, body, userId: id };
    // console.log(
    //   titleRef.current.value,
    //   bodyRef.current.value,
    //   idRef.current.value
    // );
    formRef.current.reset();
    submitPost(postObject);
  };
  return (
    <Container>
      <form ref={formRef}>
        <FormBox>
          <InputBox ref={titleRef} placeholder="Title"></InputBox>
          <InputBox ref={bodyRef} placeholder="Body"></InputBox>
          <InputBox ref={idRef} placeholder="User ID"></InputBox>
          <Button onClick={onSubmit}>Add A Post</Button>
        </FormBox>
      </form>
    </Container>
  );
};

export default AddPostModal;
