import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { submitBooking } from '@/services/api'
import type { BookingPayload } from '@/types/booking.types'

export default function BookingForm() {
  const [form, setForm] = useState<BookingPayload>({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
    notes: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await submitBooking(form)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <p className="text-green-600">Đặt phòng thành công! Chúng tôi sẽ liên hệ với bạn sớm.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input name="name" placeholder="Họ và tên" value={form.name} onChange={handleChange} required />
      <Input name="phone" placeholder="Số điện thoại" value={form.phone} onChange={handleChange} required />
      <Input name="checkIn" type="date" value={form.checkIn} onChange={handleChange} required />
      <Input name="checkOut" type="date" value={form.checkOut} onChange={handleChange} required />
      <Input name="guests" type="number" placeholder="Số khách" min={1} value={form.guests} onChange={handleChange} required />
      <Input name="roomType" placeholder="Loại phòng" value={form.roomType} onChange={handleChange} required />
      <Input name="notes" placeholder="Ghi chú (tùy chọn)" value={form.notes} onChange={handleChange} />
      {status === 'error' && <p className="text-red-500 text-sm">Có lỗi xảy ra. Vui lòng thử lại.</p>}
      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Đang gửi...' : 'Đặt Phòng'}
      </Button>
    </form>
  )
}
