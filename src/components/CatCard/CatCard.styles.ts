import styled from 'styled-components'

export const CatCardDiv = styled.div`
  max-width:350px;
  max-height: 600px;
  margin: 50px 20px 20px 20px;
  box-shadow: 0px 0px 15px 3px rgba(145,139,145,1);
  background-color: #85b4ff;
  border-radius: 5px;
  color: #fff;
`
export const Paragraph = styled.p`
  font-weight: 900;
  margin: 10px;
  font-size: 30px;
`
export const StateDiv = styled.div`
  margin: 20px;
  font-size: 20px;
`
export const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #1d5ec4;
  border: none;
  border-radius: 5px;
  margin: 10px;
  color: #fff;
  :focus{
    outline: none;
  }
`
export const Link = styled.a`
  text-decoration: none;
  list-style: none;
  color: #fff;
`