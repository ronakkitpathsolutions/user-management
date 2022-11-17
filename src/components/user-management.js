import { useState, useContext, useMemo, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MyContext from '../context'
import { defaultRoles } from '../utils/constant'
import credentials from '../db/index.json'
import { arrayToObject, capitalized, compareToObjects } from '../utils/functions'
import { addDataFromLocal } from '../utils/storage'
import useHistory from '../hooks/history'


const useUserManagement = () => {

    const { id } = useParams()
    const { data, setData } = useContext(MyContext)
    const { history } = useHistory()
    const [permissionData, setPermissionData] = useState({})

    const users = useMemo(() => {
        return credentials.users?.map(({ password, role, ...otherData }) => { return { role: capitalized(role), ...otherData } })
    }, [])

    const userData = useMemo(() => {
        const { users } = credentials
        const findIndex = users.findIndex(val => val?.id === id)
        const cloneData = users[findIndex]
        return cloneData
    }, [id])

    useEffect(() => {
        if(userData){
            setPermissionData(compareToObjects(defaultRoles, arrayToObject(userData?.permissions)))
            addDataFromLocal('user', JSON.stringify({...data, user_permission: userData}))
        }
    }, [data, id, userData])

    const handleClick = async (index, id) => {
        const cloneData = users[index]
        setData({ ...data, user_permission: cloneData })
        addDataFromLocal('user', JSON.stringify({ ...data, user_permission: cloneData }))
        history(`/user-permission/${id}`)
    }

    const handleChange = (e) => {
        const { checked, name } = e.target
        const { permissions } = userData
        setPermissionData({
            ...permissionData, [name]: checked
        })

        const index = permissions.findIndex(val => val === name)
        if(checked){
            permissions.push(name)
        }else{
            index !== -1 && permissions.splice(index, 1)
        }
        addDataFromLocal('user', JSON.stringify({...data, user_permission: userData}))
  }

    const formData = useCallback(() => {
        return Object.keys(permissionData).map((val, index) => {
            return id  ? {
                id: index,
                name: val,
                label: capitalized(val),
                type: "checkbox",
                checked: permissionData[val],
                onChange: handleChange,
                isOptional: true
            } : {}
        })
    // eslint-disable-next-line
    }, [id, permissionData])

    console.log('data', data)

    return { users, handleClick, data, defaultRoles, userData, formData }
}

export default useUserManagement