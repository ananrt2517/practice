import React, { ReactElement } from 'react'
import { CatCardDiv, Paragraph, StateDiv, Button, Link } from './CatCard.styles'

interface Props {
  name: string
  origin: string
  description: string
  id: string
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
      <Button>
        <Link href={`/cats/${props.id}`}>Learn more</Link>
      </Button>
    </CatCardDiv>
  )
}
