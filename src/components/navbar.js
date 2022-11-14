import { useContext, useMemo } from 'react'
import MyContext from '../context';
import { capitalized } from '../utils/functions';
import useLogout from './logout';

const useNavbar = (props) => {
    const { data } = useContext(MyContext);
    const { handleLogout } = useLogout()
    
    const role = useMemo(() => {
        return capitalized(data?.role)
    }, [data?.role])

    const isLogged = useMemo(() => {
        return data?.isLogged
    }, [data?.isLogged])

    const buttonData = {
        id: "log_out",
        type: "button",
        label: "Log Out",
        handleClick: handleLogout
    }

  return { role, isLogged, data, buttonData }
}

export default useNavbar