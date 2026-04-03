import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Rooms from '@/pages/Rooms'
import RoomDetail from '@/pages/RoomDetail'
import Booking from '@/pages/Booking'
import YenSao from '@/pages/YenSao'
import News from '@/pages/News'
import Contact from '@/pages/Contact'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/rooms', element: <Rooms /> },
      { path: '/rooms/:id', element: <RoomDetail /> },
      { path: '/booking', element: <Booking /> },
      { path: '/yen-sao', element: <YenSao /> },
      { path: '/news', element: <News /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])
