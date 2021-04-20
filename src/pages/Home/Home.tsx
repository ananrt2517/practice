import React, { ReactElement } from 'react';
import { HomeDiv, Input, TitleDiv } from './HomeStyles';

interface Props {
  
}

export default function Home({}: Props): ReactElement {
  return (
    <HomeDiv>
      <TitleDiv>Search for kitty</TitleDiv>
      <Input placeholder="Type here..."></Input>
    </HomeDiv>
  )
}
