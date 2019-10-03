import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.nav`
  background-color: rgba(53,56,64,0.25);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Content = styled.div`
  width: 960px;
`;

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Content>{this.props.children}</Content>
      </Container>
    )
  }
}

export default Navbar
