import React, { ReactElement, useEffect, useState } from 'react'
import { HomeDiv, Input, TitleDiv, CatDiv } from './HomeStyles'
import { useSelector, useDispatch } from 'react-redux'
import { getCatsRequest } from '../../store/actions/actions'
import { IState } from '../../store/reducers/searchReducer'
import { ICatSuccess } from '../../store/actions/action.Interfaces'
import CatCard from '../../components/CatCard/CatCard'
import { AppState } from '../../store/reducers'

export default function Home(): ReactElement {
  const [term, setTerm] = useState('')
  const store = useSelector((state: AppState) => state.search.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCatsRequest(term))
  }, [term])

  console.log(store)

  return (
    <HomeDiv>
      <TitleDiv>Search for kitty</TitleDiv>
      <Input
        placeholder='Type here...'
        value={term}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTerm(e.target.value)
        }></Input>
      <CatDiv>
        {store?.map((item: ICatSuccess) => (
          <>
            <CatCard
              key={item?.id}
              name={item?.name}
              origin={item?.origin}
              description={item?.description}
              id={item?.id}></CatCard>
          </>
        ))}
      </CatDiv>
    </HomeDiv>
  )
}
