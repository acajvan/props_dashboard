import React from 'react'
import { useGetIdentity, useOne } from '@pankod/refine-core'
import { Box, Stack, Typography } from '@mui/material'
import { Profile } from 'components'


const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: 'users',
    id: user?.userid,
  })

  const myProfile = data?.data ?? [];
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error</div>



  return (
    <Profile
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties.length}

      />
  )
}

export default MyProfile