import {Component} from 'react'

import {
  MainContainer,
  SubContainer,
  MainHeading,
  InputContainer,
  Input,
  Paragraph,
  Button,
} from './styledComponents'

class EditableText extends Component {
  state = {isClicked: false, inputValue: ''}

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked, inputValue} = this.state

    const buttonText = isClicked ? 'Edit' : 'Save'
    return (
      <MainContainer>
        <SubContainer>
          <MainHeading>Editable Text Input</MainHeading>
          <InputContainer>
            {isClicked ? (
              <Paragraph>{inputValue}</Paragraph>
            ) : (
              <Input
                type="text"
                value={inputValue}
                onChange={this.onChangeInput}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {buttonText}
            </Button>
          </InputContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default EditableText
