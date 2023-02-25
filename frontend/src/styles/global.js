import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #C7FFD2;
  }

  .title{
  display: flex;
  width: 95%;
  test-align: center;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #4C9E04;
  padding: 15px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  margin-top: 50px;
  }

  .text {
    color: #FFFFFF;
    margin: auto;
  }
`;

export default Global;