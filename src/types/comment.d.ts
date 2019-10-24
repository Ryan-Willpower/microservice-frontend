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
