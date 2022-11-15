import { useContext } from 'react'
import MyContext from '../context'
import useHistory from '../hooks/history'
import { clearLocal } from '../utils/storage'

const useLogout = () => {
    const { setData } = useContext(MyContext)
    const { history } = useHistory()

    const handleLogout = () => {
        setData({})
        const isCleared = clearLocal()
        !isCleared && history('/login')
    }

  return { handleLogout }
}

export default useLogout