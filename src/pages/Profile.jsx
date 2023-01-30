import {  useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'

function Profile() {
  const [user, setUser] = useState(null)

  const auth = getAuth()
  useEffect(() => {
    setUser(auth.currentUser)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return user ? <h1>{user.displayName}</h1> : 'Not Logged In'
}

export default Profile
