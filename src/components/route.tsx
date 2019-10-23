import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Index } from '../pages'
import { Post } from '../pages/post'
import { Login } from '../pages/login'
import { ProtectedAddPost } from '../pages/addPost'
import { Logout } from '../pages/logout'

export const RouteController: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Index />
        </Route>
        <Route path='/post/:id'>
          <Post />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/add'>
          <ProtectedAddPost />
        </Route>
        <Route path='/logout'>
          <Logout />
        </Route>
      </Switch>
    </>
  )
}
