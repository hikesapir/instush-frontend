import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { setFilterBy, loadUsers } from '../store/actions/userActions'
import { FilterDropdwon } from './FilterDropdwon'

export const AppFilter = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.userModule)

    const onChangeFilter = async () => {
        // setState({ filterBy }, loadRobots)
        await dispatch(setFilterBy(filterBy))
        dispatch(loadUsers())
    }


    const [filterBy, handleChange] = useForm({ txt: '' }, onChangeFilter)


    return (
        <div className='app-filter'>
            <input type="text" placeholder='Search' onChange={handleChange} name='txt' value={filterBy.txt} />
            <FilterDropdwon users={users}></FilterDropdwon>
        </div>
    )
}
