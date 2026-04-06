import { useState, useEffect } from 'react'
import { getRooms } from '@/services/api'
import { staticRooms } from '@/data/rooms'
import type { Room } from '@/types/room.types'

export function useRooms() {
  const [rooms, setRooms] = useState<Room[]>([])
  const [loading, setLoading] = useState(true)
  const [error] = useState<string | null>(null)

  useEffect(() => {
    getRooms()
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : []
        setRooms(data.length > 0 ? data : staticRooms)
      })
      .catch(() => {
        setRooms(staticRooms)
      })
      .finally(() => setLoading(false))
  }, [])

  return { rooms, loading, error }
}
