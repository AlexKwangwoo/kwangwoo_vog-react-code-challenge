import React, { useState } from "react";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  EditHomeData,
  InitalHomeData,
  PostHomeData,
  SearchById,
} from "../actions/home_data_actions";
import Modal from "react-awesome-modal";
import LoadingPage from "./LoadingPage";
import AddPostModal from "../Modal/AddPostModal";
import EditPostModal from "../Modal/EditPostModal";

const Container = styled.div`
  width: 100%;
  height: 620px;
  /* background-color: yellow; */
  /* overflow-y: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Title = styled.p`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const TableBox = styled.div`
  overflow-y: auto;
`;

const TitleBigBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;

  /* background-color: yellow; */
`;
const TitleUserIDBox = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 2px solid black;
  width: 100px;

  /* background-color: yellow; */
`;
const TitleIdBox = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 2px solid black;
  border-left: 0px;
  width: 100px;
`;
const TitleTitleBox = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 2px solid black;
  border-left: 0px;
  width: 300px;
`;
const TitleBodyBox = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 2px solid black;
  border-left: 0px;
  width: 600px;
`;

const TitleEditBox = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 2px solid black;
  border-left: 0px;
  width: 150px;
`;

const BigBox = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100%;
  height: 50px;
  /* background-color: red; */
`;
const UserIDBox = styled.div`
  border: 2px solid black;
  border-top: 0px;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IdBox = styled.div`
  border: 2px solid black;
  border-top: 0px;
  border-left: 0px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleBox = styled.div`
  border: 2px solid black;
  border-top: 0px;
  border-left: 0px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BodyBox = styled.div`
  border: 2px solid black;
  border-top: 0px;
  border-left: 0px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditBox = styled.div`
  border: 2px solid black;
  border-top: 0px;
  border-left: 0px;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const InputBox = styled.input`
  width: 138px;
  height: 30px;
  background-color: white;
  text-align: left;
  padding-left: 10px;
  margin-bottom: 10px;
  color: black;
  ::placeholder {
    color: gray;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 10px;
`;

function HomePage({ total_data }) {
  const formRef = React.createRef();
  const idRef = React.createRef();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [editId, setEditId] = useState();

  const editOpenModal = () => {
    document.body.style.overflow = "hidden";
    setEditVisible(true);
    dispatch(InitalHomeData());
  };
  const editCloseModal = () => {
    document.body.style.overflow = "unset";
    setEditVisible(false);
    dispatch(InitalHomeData());
  };

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setVisible(true);
    dispatch(InitalHomeData());
  };
  const closeModal = () => {
    document.body.style.overflow = "unset";
    setVisible(false);
    dispatch(InitalHomeData());
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(InitalHomeData());
    }, 1000);
  }, [dispatch]);

  const onSubmit = (event) => {
    event.preventDefault();
    const id = idRef.current.value;
    dispatch(SearchById(id));
    formRef.current.reset();
  };

  const seeAll = (event) => {
    event.preventDefault();
    dispatch(InitalHomeData());
  };

  const editPost = (id) => {
    setEditId(id);
    editOpenModal();
  };
  const addPost = (event) => {
    openModal();
  };

  const submitPost = (post) => {
    dispatch(PostHomeData(post));
    alert(`Post( Title: ${post.title}, UserID: ${post.userId} ) is uploaded`);
    closeModal();
  };

  const submitEditPost = (editData) => {
    dispatch(EditHomeData(editData));
    alert(`Post( ID: ${editData.id} ) is Edited`);
    editCloseModal();
  };

  async function deletePost(id) {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
    } catch (e) {
      console.log("error", e);
    }
    alert(`Post( ID: ${id} ) is deleted`);
  }

  return (
    <>
      {total_data ? (
        <div className="Home_Box">
          <Title>Home Page</Title>
          <form ref={formRef} onSubmit={onSubmit}>
            <InputBox
              ref={idRef}
              type="text"
              placeholder="Search by id (0~19)"
            ></InputBox>
            <Button>Search</Button>
            <Button onClick={seeAll}>See All</Button>
            <Button onClick={addPost}>Add A Post</Button>
          </form>
          <Container>
            <TableBox>
              <TitleBigBox>
                <TitleUserIDBox> User ID</TitleUserIDBox>
                <TitleIdBox> id</TitleIdBox>
                <TitleTitleBox> Title</TitleTitleBox>
                <TitleBodyBox>Body</TitleBodyBox>
                <TitleEditBox>Option</TitleEditBox>
              </TitleBigBox>
              {total_data.length > 0 ? (
                <>
                  {total_data?.map((each, index) => {
                    return (
                      <BigBox key={index}>
                        <UserIDBox> {each.userId}</UserIDBox>
                        <IdBox> {each.id}</IdBox>
                        <TitleBox> {each.title}</TitleBox>
                        <BodyBox> {each.body}</BodyBox>
                        <EditBox onClick={() => editPost(each.id)}>
                          Edit
                        </EditBox>
                        <EditBox onClick={() => deletePost(each.id)}>
                          Delete
                        </EditBox>
                      </BigBox>
                    );
                  })}
                </>
              ) : (
                <>
                  <BigBox>
                    <UserIDBox> {total_data.userId}</UserIDBox>
                    <IdBox> {total_data.id}</IdBox>
                    <TitleBox> {total_data.title}</TitleBox>
                    <BodyBox> {total_data.body}</BodyBox>
                    <EditBox onClick={() => editPost(total_data.id)}>
                      Edit
                    </EditBox>
                    <EditBox onClick={() => deletePost(total_data.id)}>
                      Delete
                    </EditBox>
                  </BigBox>
                </>
              )}
            </TableBox>
            <div>
              <Link to={"/"}>
                <div className="Common_Button Welcome_Postal ">
                  Go To Main Page
                </div>
              </Link>
              <Link to={"/universities"}>
                <div className="Common_Button Welcome_Postal ">
                  Go to Universities Page
                </div>
              </Link>
              <Link to={"/postal"}>
                <div className="Common_Button Welcome_Postal ">
                  Go To Postal Lookup Page
                </div>
              </Link>
            </div>
          </Container>
          <Modal
            visible={visible}
            width="330"
            height="200"
            effect="fadeInUp"
            onClickAway={() => closeModal()}
          >
            <AddPostModal submitPost={submitPost} />
          </Modal>
          <Modal
            visible={editVisible}
            width="330"
            height="200"
            effect="fadeInUp"
            onClickAway={() => editCloseModal()}
          >
            <EditPostModal editId={editId} submitEditPost={submitEditPost} />
          </Modal>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    total_data: state.homeData.total_data,
  };
};

export default connect(mapStateToProps)(HomePage);
