import { ApolloError } from 'apollo-boost'

export interface UserComment {
  username: string
  message: string
  date: string
}

export interface CommentObj {
  commentData: UserComment
}

export interface AllCommentResult {
  allComment: UserComment[]
}

export interface AddCommentQueryResult {
  add: {
    isSuccess: Boolean
  }
}

export interface AddComment {
  setMessage: React.Dispatch<React.SetStateAction<string>>
  submit(postid: number): void
  data: AddCommentQueryResult
  error?: ApolloError
}

export interface Postid {
  postid: number
}
