import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  InitalCountryData,
  UniData,
} from "../actions/universities_data_actions";
import LoadingPage from "./LoadingPage";

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
`;
const TitleCountry = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 2px solid black;
  width: 100px;
`;
const TitleName = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 2px solid black;
  border-left: 0px;
  width: 350px;
`;
const TitleWebSite = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 2px solid black;
  border-left: 0px;
  width: 350px;
`;
const TitleDomain = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 2px solid black;
  border-left: 0px;
  width: 350px;
`;

const BigBox = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;
const CountryBox = styled.div`
  border: 2px solid black;
  border-top: 0px;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NameBox = styled.div`
  border: 2px solid black;
  border-top: 0px;
  border-left: 0px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WebsiteBox = styled.div`
  border: 2px solid black;
  border-top: 0px;
  border-left: 0px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DomainBox = styled.div`
  border: 2px solid black;
  border-top: 0px;
  border-left: 0px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SelectBox = styled.div`
  margin-bottom: 20px;
`;

function UniversitiesPage({ total_uni_data, total_uni_country_data }) {
  const contryRef = React.createRef();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(UniData("Canada"));
      dispatch(InitalCountryData());
    }, 1000);
  }, [dispatch]);

  const onChangeCountry = () => {
    dispatch(UniData(contryRef.current.value));
  };

  return (
    <>
      {total_uni_data ? (
        <div className="Universities_Box">
          <Title>Universities Page</Title>
          <SelectBox>
            Choose the country{" "}
            <select
              className="Universities_Select"
              defaultValue="Canada"
              ref={contryRef}
              type="checkbox"
              onChange={onChangeCountry}
            >
              <option selected="selected">Canada</option>
              {total_uni_country_data?.map((each_country, index) => {
                return <option key={index}>{each_country.country}</option>;
              })}
            </select>
          </SelectBox>
          <Container>
            <TableBox>
              <TitleBigBox>
                <TitleCountry>Country</TitleCountry>
                <TitleName>Name</TitleName>
                <TitleWebSite>WebSite</TitleWebSite>
                <TitleDomain>Domain</TitleDomain>
              </TitleBigBox>

              {total_uni_data?.map((each, index) => {
                return (
                  <BigBox key={index}>
                    <CountryBox> {each.country}</CountryBox>
                    <NameBox> {each.name}</NameBox>
                    <WebsiteBox> {each.web_pages[0]}</WebsiteBox>
                    <DomainBox> {each.domains[0]}</DomainBox>
                  </BigBox>
                );
              })}
            </TableBox>
            <div>
              <Link to={"/"}>
                <div className="Common_Button Welcome_Postal ">
                  Go To Main Page
                </div>
              </Link>
              <Link to={"/home"}>
                <div className="Common_Button Welcome_Postal ">
                  Go to Home Page
                </div>
              </Link>
              <Link to={"/postal"}>
                <div className="Common_Button Welcome_Postal ">
                  Go To Postal Lookup Page
                </div>
              </Link>
            </div>
            {/* <Link to={"/"}>
              <div className="Common_Button Welcome_Postal ">
                Go To Main Page
              </div>
            </Link> */}
            {/* {new_postID ? <div>{new_postID.id}</div> : null} */}
          </Container>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    total_uni_data: state.uniData.total_uni_data,
    total_uni_country_data: state.uniData.total_uni_country_data,
  };
};

export default connect(mapStateToProps)(UniversitiesPage);
