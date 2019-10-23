import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

export function useGetAll() {
  const query = gql`
    {
      getPosts {
        postid
        author
        title
        content
      }
    }
  `

  const { loading, data, error } = useQuery(query)

  if (loading) return null
  if (error) return { error }

  return data
}
