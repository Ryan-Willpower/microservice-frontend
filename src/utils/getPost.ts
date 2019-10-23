import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

export function useGetPost(postid: Number) {
  const query = gql`
    query find($postid: Int!) {
      find(postid: $postid) {
        author
        title
        content
      }
    }
  `

  const { loading, data, error } = useQuery(query, {
    variables: { postid },
  })

  if (loading) return null
  if (error) return { error }

  return data
}
