import { useContext } from 'react'
import MyContext from '../context'

const withSuperAdmin = Component => ({...props}) => {
    const { data } = useContext(MyContext)
    return data.role === "super_admin" ? <Component {...props} /> : <p>Access Denied.</p>
}

export default withSuperAdmin