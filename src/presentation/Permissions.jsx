import React from 'react'
import CustomCheckBox from '../common/CustomCheckBox'
import CustomForm from '../common/CustomForm'
import useUserManagement from '../components/user-management'

const Permissions = ({...props}) => {
    const { userData, handleSubmit, formData } = useUserManagement()

  return (
    <div {...props} >
        <h3 className='m-3' >{userData?.email}</h3>
        <CustomForm className="w-25" onSubmit={handleSubmit} >
            {
                formData().map(({id, ...val}) => <CustomCheckBox className="mb-3" key={id} {...val} />)
            }
        </CustomForm>
    </div>
  )
}

export default Permissions