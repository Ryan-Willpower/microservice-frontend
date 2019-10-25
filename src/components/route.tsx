import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Index } from '../pages'
import { Post } from '../pages/post'
import { Login } from '../pages/login'
import { ProtectedAddPost } from '../pages/addPost'
import { Register } from '../pages/register'
import { ErrorBoundary } from './error'

export const RouteController: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <ErrorBoundary>
            <Index />
          </ErrorBoundary>
        </Route>
        <Route path='/post/:id'>
          <Post />
        </Route>
        <Route path='/login'>
          <ErrorBoundary>
            <Login />
          </ErrorBoundary>
        </Route>
        <Route path='/add'>
          <ProtectedAddPost />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </>
  )
}
