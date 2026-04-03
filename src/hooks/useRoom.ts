import { useState, useEffect } from 'react'
import { getRoomById } from '@/services/api'
import type { Room } from '@/types/room.types'

export function useRoom(id: number) {
  const [room, setRoom] = useState<Room | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getRoomById(id)
      .then((res) => setRoom(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  return { room, loading, error }
}
