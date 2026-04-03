import { useState } from 'react'
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    return (
      <div className="text-center py-12">
        <span className="material-symbols-outlined text-5xl text-secondary mb-4 block"
          style={{ fontVariationSettings: "'FILL' 1" }}>
          check_circle
        </span>
        <p className="font-headline text-2xl text-tertiary">Đặt phòng thành công!</p>
        <p className="text-on-surface-variant mt-2">Chúng tôi sẽ liên hệ với bạn sớm.</p>
      </div>
    )
  }

  const inputClass =
    'w-full bg-surface-container-low border-none rounded-md p-4 focus:ring-1 focus:ring-secondary outline-none transition-all text-on-surface placeholder:text-outline'

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-tighter text-on-surface-variant">
          Họ và Tên
        </label>
        <input
          name="name"
          type="text"
          placeholder="Nguyễn Văn A"
          value={form.name}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-tighter text-on-surface-variant">
          Số điện thoại
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="090x xxx xxx"
          value={form.phone}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-tighter text-on-surface-variant">
          Ngày vào
        </label>
        <input
          name="checkIn"
          type="date"
          value={form.checkIn}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-tighter text-on-surface-variant">
          Ngày đi
        </label>
        <input
          name="checkOut"
          type="date"
          value={form.checkOut}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-tighter text-on-surface-variant">
          Số người
        </label>
        <select name="guests" value={form.guests} onChange={handleChange} className={inputClass}>
          <option value={1}>1 Người</option>
          <option value={2}>2 Người</option>
          <option value={3}>3 Người</option>
          <option value={4}>4+ Người</option>
        </select>
      </div>

      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-bold uppercase tracking-tighter text-on-surface-variant">
          Ghi chú
        </label>
        <textarea
          name="notes"
          rows={4}
          placeholder="Yêu cầu đặc biệt..."
          value={form.notes}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {status === 'error' && (
        <p className="md:col-span-2 text-error text-sm text-center">
          Có lỗi xảy ra. Vui lòng thử lại.
        </p>
      )}

      <div className="md:col-span-2 pt-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full ruby-gradient text-on-primary py-5 rounded-lg font-bold text-lg tracking-[0.2em] shadow-lg hover:opacity-95 transition-all disabled:opacity-60"
        >
          {status === 'loading' ? 'ĐANG GỬI...' : 'HOÀN TẤT ĐẶT PHÒNG'}
        </button>
      </div>
    </form>
  )
}
