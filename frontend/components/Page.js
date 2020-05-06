import React, { Component } from 'react';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`

class Page extends Component {
  render() {
      return (
        <div>{this.props.children}</div>
      );
  }
}

export default Page;