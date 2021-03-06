import React, {useState, useEffect} from "react"
import * as web3 from "@portto/solana-web3"

import Card from '../components/Card'
import Header from '../components/Header'
import Code from '../components/Code'

const UserInfo = () => {
  const [user, setUser] = useState(null)

  useEffect(() =>
    web3
      .currentUser()
      .subscribe(user => setUser({...user}))
  , [])

  return (
    <Card>
      <Header>User information</Header>
      
      {user && <Code>{JSON.stringify(user, null, 2)}</Code>}
    </Card>
  )
}

export default UserInfo
