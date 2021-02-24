import React from 'react'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'

const color = '#275edb'
const Button = styled.button`
  padding: 10px 18px;
  background-color: #fff;
  font-size: 14px;
  color: #141414;
  font-weight: bold;
  border-radius: 5px;
  outline: none;
  &:hover {
    color: ${color};
  }
`
const SomeComp = styled.div({
  color: 'hotpink'
})

const AnotherComp = styled.div`
  padding: 10px;
  font-weight: bold;
  color: ${props => props.color};
`

class Emotion extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      message: 'click button'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Click Happened!')
    this.setState({})
  }

  render() {
    const { message } = this.state;
    const color = 'white'
    return(
      <>
        <div>
          {/* <SomeComp> */}
            <AnotherComp color="red">Emotion</AnotherComp>
          {/* </SomeComp> */}
        </div>
        <Button onClick={ this.handleClick }>{ message }</Button>
      </>
    )
  }
}

export default Emotion

