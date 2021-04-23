import React, { ReactElement } from 'react'
import { SingleCardDiv, Image, Text, TextDiv } from './SingleCatCard.styles'

interface Props {
  url: string
  name: string
  description: string
  origin: string
}

export default function SingleCatCard(props: Props): ReactElement {
  return (
    <SingleCardDiv>
      <Image src={props.url}></Image>
      <TextDiv>
        <Text>
          <b>Name:</b> {props.name}
        </Text>
        <Text>
          <b>Description:</b> {props.description}
        </Text>
        <Text>
          <b>Origin:</b> {props.origin}
        </Text>
      </TextDiv>
    </SingleCardDiv>
  )
}
