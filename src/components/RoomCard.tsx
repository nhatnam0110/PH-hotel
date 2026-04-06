import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import type { Room } from '@/types/room.types'

interface RoomCardProps {
  room: Room
  featured?: boolean
}

export default function RoomCard({ room, featured = false }: RoomCardProps) {
  const thumbnail = room.images[0]?.src ?? ''

  return (
    <div className={cn(
      'group relative bg-surface-container-lowest rounded-xl overflow-hidden',
      featured && 'editorial-overlap shadow-xl z-10'
    )}>
      <div className="aspect-[4/5] overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={room.images[0]?.alt ?? room.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-outline">bed</span>
          </div>
        )}
      </div>
      <div className="p-8">
        <h4 className="font-headline text-3xl mb-2 italic">{room.name}</h4>
        <p
          className="text-on-surface-variant text-sm mb-6 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: room.description }}
        />
        <div className="flex justify-between items-center border-t border-outline-variant/30 pt-6">
          <span className="text-primary font-bold">{room.price} VNĐ / Đêm</span>
          <Link to={`/rooms/${room.id}`}>
            <span className="material-symbols-outlined text-outline-variant">open_in_full</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
