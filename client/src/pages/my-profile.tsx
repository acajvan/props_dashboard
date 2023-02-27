import React from 'react'
import { Profile } from 'components'



const MyProfile = () => {

  return (
    <Profile
      type="My"
      name="Admin"
      email="admin@cajvan.com"
      avatar="https://images.unsplash.com/photo-1627330000000-8c8b9b5b5b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      properties="all props"
      />
  )
}

export default MyProfile
