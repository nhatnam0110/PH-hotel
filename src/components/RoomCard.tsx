import { Link } from 'react-router-dom'
import type { Room } from '@/types/room.types'

interface RoomCardProps {
  room: Room
}

export default function RoomCard({ room }: RoomCardProps) {
  const thumbnail = room.images[0]?.src ?? ''

  return (
    <div className="group">
      <div className="overflow-hidden rounded-xl mb-6 aspect-[4/5]">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={room.images[0]?.alt ?? room.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-outline">bed</span>
          </div>
        )}
      </div>
      <h3 className="font-headline text-2xl text-tertiary mb-2">{room.name}</h3>
      <p
        className="text-on-surface-variant text-sm mb-4 line-clamp-2"
        dangerouslySetInnerHTML={{ __html: room.description }}
      />
      <div className="flex items-center justify-between">
        <span className="text-primary font-bold text-xl">{room.price} VNĐ / Đêm</span>
        <Link to={`/rooms/${room.id}`}>
          <span className="material-symbols-outlined text-secondary">arrow_forward</span>
        </Link>
      </div>
    </div>
  )
}
