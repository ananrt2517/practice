import React, { ReactElement, useEffect, useState } from 'react'
import { HomeDiv, Input, TitleDiv } from './HomeStyles'
import { useSelector, useDispatch } from 'react-redux'
import { getCatsRequest} from '../../store/actions/actions'
import { IState } from '../../store/reducers/searchReducer'
import { ICatSuccess } from '../../store/actions/action.Interfaces'


export default function Home(): ReactElement {
  const [term, setTerm] = useState('')
  const store: any = useSelector<IState>(state => state.search.data);

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
      {store.map((item: ICatSuccess) => <div>{item?.name}</div>)}
    </HomeDiv>
  )
}
