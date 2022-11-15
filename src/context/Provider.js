import React, { useState } from 'react'
import { getDataFromLocal } from '../utils/storage';
import MyContext from "./index";

const MainProvider = ({children, ...props}) => {
  const localData = getDataFromLocal('user')
  const [data, setData] = useState({...JSON.parse(localData)})

  return (
    <MyContext.Provider value={{data, setData, ...props}} >
        {children}
    </MyContext.Provider>
  )
}

export default MainProvider