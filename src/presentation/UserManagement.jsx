import React from 'react'
import CustomCard from '../common/CustomCard'
import useUserManagement from '../components/user-management'
import withSuperAdmin from '../higher-order-components/withSuperAdmin'

const UserManagement = () => {

  const { users, handleClick } = useUserManagement()

  return (
    <div className='container-fluid'>
      <div className='row' >
        <div className='col-12 col-xl-8 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
          <h3>Users</h3>
          <div className='row' >
            {
              users.map((data, index) => <div
                onClick={() => handleClick(index, data?.id)}
                key={index}
                className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12" >
                <CustomCard className="m-2"
                  subTitleClassName="mb-2 text-muted"
                  titleDescription={data.role}
                  title={data.email}
                  cardClassName="user_card" >
                  {data.description}
                </CustomCard>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default withSuperAdmin(UserManagement)