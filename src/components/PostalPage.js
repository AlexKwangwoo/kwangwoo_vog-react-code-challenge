import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SearchByPostalCode } from "../actions/postal_data_actions";

const Title = styled.p`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
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

const Container = styled.div`
  margin-bottom: -20px;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Country = styled.div`
  width: 200px;
  height: 30px;
`;
const CountryAbb = styled.div`
  width: 200px;
  height: 30px;
`;
const PlaceName = styled.div`
  width: 200px;
  height: 30px;
`;
const State = styled.div`
  width: 200px;
  height: 30px;
`;
const StateAbb = styled.div`
  width: 200px;
  height: 30px;
`;
const PostalCode = styled.div`
  width: 200px;
  height: 30px;
`;

const NoResult = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -10px;
`;

function PostalPage({ postal_code_info }) {
  const formRef = React.createRef();
  const codeRef = React.createRef();
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const code = codeRef.current.value;
    dispatch(SearchByPostalCode(code));
    formRef.current.reset();
  };

  return (
    <div className="Postal_Box">
      <Title>Postal LookUp Page</Title>
      <form ref={formRef} onSubmit={onSubmit}>
        <InputBox
          ref={codeRef}
          type="text"
          placeholder="Search by id (0~19)"
        ></InputBox>
        <Button>Search</Button>
      </form>
      <div>Ex 90210</div>
      {postal_code_info ? (
        <Container>
          <PostalCode>PostalCode: {postal_code_info[`post code`]}</PostalCode>
          <Country>Country: {postal_code_info.country}</Country>
          <CountryAbb>
            CountryAbb: {postal_code_info[`country abbreviation`]}
          </CountryAbb>
          <PlaceName>
            PlaceName: {postal_code_info.places[0][`place name`]}
          </PlaceName>
          <State>State: {postal_code_info.places[0][`state`]}</State>
          <StateAbb>
            StateAbb: {postal_code_info.places[0][`state abbreviation`]}
          </StateAbb>
        </Container>
      ) : (
        <NoResult>No Result</NoResult>
      )}
      <div>
        <Link to={"/"}>
          <div className="Common_Button Welcome_Postal ">Go To Main Page</div>
        </Link>
        <Link to={"/home"}>
          <div className="Common_Button Welcome_Postal ">Go To Home Page</div>
        </Link>
        <Link to={"/universities"}>
          <div className="Common_Button Welcome_Postal ">
            Go to Universities Page
          </div>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    postal_code_info: state.postalData.postal_code_info,
  };
};

export default connect(mapStateToProps)(PostalPage);
