import { Link } from 'react-router-dom'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { Room } from '@/types/room.types'

interface RoomCardProps {
  room: Room
}

export default function RoomCard({ room }: RoomCardProps) {
  const thumbnail = room.images[0]?.src ?? ''

  return (
    <Card className="overflow-hidden">
      {thumbnail && (
        <img src={thumbnail} alt={room.images[0]?.alt} className="w-full h-48 object-cover" />
      )}
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground">{room.name}</h3>
          <Badge variant={room.status === 'instock' ? 'default' : 'secondary'}>
            {room.status === 'instock' ? 'Còn phòng' : 'Hết phòng'}
          </Badge>
        </div>
        <p className="mt-1 text-primary font-medium">{room.price} VNĐ / đêm</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link
          to={`/rooms/${room.id}`}
          className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
        >
          Xem chi tiết
        </Link>
        <Link
          to={`/booking?room=${room.id}`}
          className={cn(buttonVariants({ size: 'sm' }))}
        >
          Đặt phòng
        </Link>
      </CardFooter>
    </Card>
  )
}
