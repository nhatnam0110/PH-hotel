export interface RoomImage {
  id: number
  src: string
  alt: string
}

export interface Room {
  id: number
  name: string
  slug: string
  price: string
  description: string
  images: RoomImage[]
  status: 'instock' | 'outofstock'
}
