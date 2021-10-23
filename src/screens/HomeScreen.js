import React from 'react'
import { Alert } from 'react-bootstrap'
import {useSelector} from "react-redux"

 const HomeScreen = () => {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    return (
        <Alert variant="secondary">
        <Alert.Heading>Hey, nice to see you <span style = {{color : "orange"}}>{userInfo.user.username}</span></Alert.Heading>
        <p>
          you successfully read this important alert message. This example
          text is going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.   Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.   Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.   Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.   Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.   Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.   Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
        </p>
      </Alert>
    )
}

export default HomeScreen
