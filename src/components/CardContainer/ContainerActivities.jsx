import "./CardContainer.css"
import CardActivity from '../Card/CardActivity';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { cleanerState } from '../../redux/actions'

const ContainerActivities = () => {
    const activities = useSelector(state => state.activities)
    const dispatch = useDispatch()

    useEffect(() => {
        if (activities.length === 0) {
            dispatch(findAllActivities())
        }
        return () => { dispatch(cleanerState("activities")) }
    }, [])

    return (<div className="cardsActivities">
        {activities?.map((activity, index) => {
            return <CardActivity key={activity.id} activity={activity} />
        })}
    </div>)
}

export default ContainerActivities