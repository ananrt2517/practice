import React, { ReactElement, useEffect, useState } from 'react'
import { HomeDiv, Input, TitleDiv } from './Home.styles'
import { useSelector, useDispatch } from 'react-redux'
import { getCatsRequest } from '../../store/actions/actions'
import { IState } from '../../store/reducers/searchReducer'

export default function Home(): ReactElement {
  const [term, setTerm] = useState('')

  const store = useSelector<IState>(state => state.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCatsRequest(term))
  }, [term])

  return (
    <HomeDiv>
      <TitleDiv>Search for kitty</TitleDiv>
      <Input
        placeholder='Type here...'
        value={term}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTerm(e.target.value)
        }></Input>
    </HomeDiv>
  )
}
