import "./Activities.css"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import SearchBar from "../../components/SearchBar/SearchBar"
import ContainerActivities from "../../components/CardContainer/ContainerActivities"
import CreateActivity from "../../components/Form/CreateActivity"
import { findAllActivities, findNameActivities, cleanerState } from '../../redux/actions'

const Activities = () => {
  const dispatch = useDispatch()

  const allActivities = () => {
    dispatch(findAllActivities())
  }

  useEffect(() => {
    return () => { dispatch(cleanerState("activities")) }
  }, [])

  return (
    <div>
      <div className="containerActivities">
        <ContainerActivities />
        <CreateActivity />
        <button className="btn-allActivities" onClick={allActivities}> All Activities </button>
      </div>
      <div className="searchbar">
        <SearchBar action={findNameActivities} />
      </div>
    </div>

  )
}

export default Activities