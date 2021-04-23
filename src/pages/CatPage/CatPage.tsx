import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AppState } from '../../store/reducers/index'
import { getSingleCatRequest } from '../../store/actions/actions'
import SingleCatCard from '../../components/SingleCatCard/SingleCatCard'

interface IProp {
  match: RouteParams
}

interface RouteParams {
  params: IParams
}

interface IParams {
  id: string
}

export default function CatPage(props: IProp): ReactElement {
  const store = useSelector((state: AppState) => state.cats.data)

  let { id }: IParams = useParams()

  id = props.match.params.id

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleCatRequest(id))
  }, [id])

  console.log(store[0]?.breeds[0]?.name)

  return (
    <div>
      <SingleCatCard
        url={store[0]?.url}
        name={store[0]?.breeds[0]?.name}
        description={store[0]?.breeds[0]?.description}
        origin={store[0]?.breeds[0]?.origin}></SingleCatCard>
    </div>
  )
}
