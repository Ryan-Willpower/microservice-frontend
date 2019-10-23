import { ApolloError } from 'apollo-client'
import { QueryLazyOptions } from '@apollo/react-hooks'

export interface PostContent {
  postid?: Number
  author: string
  title: string
  content: string
}

export interface PostData {
  postData: PostContent
}

export interface findResult {
  find: PostContent
  error: ApolloError
}

export interface getAllPostsResult {
  getPosts: [PostContent]
  error: ApolloError
}
