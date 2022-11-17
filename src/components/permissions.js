import { useContext } from 'react'
import MyContext from '../context'

const usePermissions = (value) => {

    const { data, setData } = useContext(MyContext)



  return {
    data, setData
  }
}

export default usePermissions