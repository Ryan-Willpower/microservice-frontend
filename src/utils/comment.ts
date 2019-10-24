import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { QueryResult } from '@apollo/react-common'

import { AllCommentResult } from '../types/comment'

const getQuery = gql`
  query AllComment($postid: Int!) {
    allComment(postid: $postid) {
      username
      message
      date
    }
  }
`

export function useComment(postid: number) {
  const { data, loading, error }: QueryResult<AllCommentResult> = useQuery(
    getQuery,
    {
      variables: {
        postid,
      },
    }
  )

  if (error) throw error

  return {
    loading,
    data,
  }
}
