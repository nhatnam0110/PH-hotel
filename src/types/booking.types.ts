export interface BookingPayload {
  name: string
  phone: string
  checkIn: string
  checkOut: string
  guests: number
  roomType: string
  notes?: string
}
