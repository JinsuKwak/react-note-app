import React from "react";
import { Container } from "./ErrorPage.styles";
import errorImg from "../../assets/errorImg.png";
import { ButtonFill } from "../../styles/styles";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="error__img">
        <img src={errorImg} alt="pageNotFound" />
      </div>
      <div className="error__text">
        <h1>404</h1>
        <div>Page Not Found</div>
        <ButtonFill onClick={() => navigate("/")}>
          <span>Back to Main Page</span>
        </ButtonFill>
      </div>
    </Container>
  );
};

export default ErrorPage;
