import axios from 'axios'
import type { BookingPayload } from '@/types/booking.types'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_WP_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

const wcParams = {
  consumer_key: import.meta.env.VITE_WC_KEY,
  consumer_secret: import.meta.env.VITE_WC_SECRET,
}

export const getRooms = () =>
  apiClient.get('/wc/v3/products', { params: wcParams })

export const getRoomById = (id: number) =>
  apiClient.get(`/wc/v3/products/${id}`, { params: wcParams })

export const getPosts = () =>
  apiClient.get('/wp/v2/posts?_embed')

export const submitBooking = (data: BookingPayload) =>
  apiClient.post('/wp/v2/booking', data)
