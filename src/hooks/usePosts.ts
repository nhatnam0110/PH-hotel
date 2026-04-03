import { useState, useEffect } from 'react'
import { getPosts } from '@/services/api'
import type { Post } from '@/types/post.types'

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(Array.isArray(res.data) ? res.data : []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { posts, loading, error }
}
