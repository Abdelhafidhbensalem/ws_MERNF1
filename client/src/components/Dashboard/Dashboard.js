import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const currentUser=useSelector(state=>state.userReducer.currentUser)
  return (
    <div>{currentUser.name}</div>
  )
}

export default Dashboard