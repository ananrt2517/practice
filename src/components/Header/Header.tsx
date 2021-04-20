import React, { ReactElement } from 'react'
import { HeaderDiv, Logo, Link } from './HeaderStyles'

interface Props {}

export default function Header({}: Props): ReactElement {
  return (
    <HeaderDiv>
      <Logo>
        <Link href='/home'>LOGO</Link>
      </Logo>
    </HeaderDiv>
  )
}
