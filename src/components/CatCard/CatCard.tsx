import React, { ReactElement } from 'react'
import { CatCardDiv, Paragraph, StateDiv, Button } from './CatCard.styles'

interface Props {
  name: string
  origin: string
  description: string
}

export default function CatCard(props: Props): ReactElement {
  return (
    <CatCardDiv>
      <Paragraph>{props.name}</Paragraph>
      <StateDiv>
        <b>Origin:</b> {props.origin}
      </StateDiv>
      <StateDiv>
        <b>Url:</b> {props.description}
      </StateDiv>
      <Button>Learn more</Button>
    </CatCardDiv>
  )
}
