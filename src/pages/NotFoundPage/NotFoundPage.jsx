import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])


  return (
    <></>
  )
}

export default NotFoundPage