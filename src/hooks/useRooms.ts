import { useState, useEffect } from 'react'
import { getRooms } from '@/services/api'
import type { Room } from '@/types/room.types'

export function useRooms() {
  const [rooms, setRooms] = useState<Room[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getRooms()
      .then((res) => setRooms(Array.isArray(res.data) ? res.data : []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { rooms, loading, error }
}
