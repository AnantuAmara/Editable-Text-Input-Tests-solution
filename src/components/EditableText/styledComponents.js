import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f5d0fe;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SubContainer = styled.div`
  background-color: #ffffff;
  height: 200px;
  width: 350px;
  border: none;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const MainHeading = styled.h1`
  color: #000000;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const InputContainer = styled.div`
  display: flex;
`

export const Input = styled.input`
  border-style: solid;
  border-width: 1px;
  border-color: #cbd2d9;
  border-radius: 4px;
  margin-right: 5px;
  outline: none;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #323f4b;
  font-size: 15px;
  font-family: 'Roboto';
`
export const Paragraph = styled.p`
  color: #323f4b;
  font-size: 15px;
  font-family: 'Roboto';
  margin-right: 5px;
`

export const Button = styled.button`
  background-color: #d946ef;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: 'Roboto';
  margin-left: 5px;
  cursor: pointer;
`
