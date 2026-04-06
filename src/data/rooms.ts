import type { Room } from '@/types/room.types'

import donVip1 from '@/assets/phong-don-vrip-1m86-600x450.jpg'
import donVip2 from '@/assets/phong-don-vrip-1m87-600x450.jpg'
import don1m61 from '@/assets/phong-don-giuong-1m61-600x450.jpg'
import don1m62 from '@/assets/phong-don-giuong-1m62-600x450.jpg'
import doi1m61 from '@/assets/phong-doi-giuong-1m61-600x450.jpg'
import doi1m62 from '@/assets/phong-doi-giuong-1m62-600x450.jpg'
import doi1m6_1m21 from '@/assets/phong-doi-giuong-1m6-1m21-600x450.jpg'
import doi1m6_1m23 from '@/assets/phong-doi-giuong-1m6-1m23-600x450.jpg'
import doi1m21 from '@/assets/phong-doi-giuong-1m21-600x450.jpg'
import doi1m22 from '@/assets/phong-doi-giuong-1m22-600x450.jpg'
import hai1 from '@/assets/phong-2-giuong-1m44-600x450.jpg'
import hai2 from '@/assets/phong-2-giuong-1m47-600x450.jpg'
import ba1 from '@/assets/phong-3-giuong1-600x450.jpg'
import ba2 from '@/assets/phong-3-giuong2-600x450.jpg'

export const staticRooms: Room[] = [
  {
    id: 1,
    name: 'Phòng Đơn VIP 1m8',
    slug: 'phong-don-vip-1m8',
    price: '1.200.000',
    description: 'Không gian riêng tư, sang trọng dành cho khách đi công tác hoặc du lịch cá nhân.',
    status: 'instock',
    images: [
      { id: 1, src: donVip1, alt: 'Phòng Đơn VIP 1m8' },
      { id: 2, src: donVip2, alt: 'Phòng Đơn VIP 1m8 - góc 2' },
    ],
  },
  {
    id: 2,
    name: 'Phòng Đơn Giường 1m6',
    slug: 'phong-don-giuong-1m6',
    price: '900.000',
    description: 'Phòng tiêu chuẩn cao cấp với giường 1m6, thiết kế hiện đại và tiện nghi đầy đủ.',
    status: 'instock',
    images: [
      { id: 3, src: don1m61, alt: 'Phòng Đơn Giường 1m6' },
      { id: 4, src: don1m62, alt: 'Phòng Đơn Giường 1m6 - góc 2' },
    ],
  },
  {
    id: 3,
    name: 'Phòng Đôi Giường 1m6',
    slug: 'phong-doi-giuong-1m6',
    price: '1.500.000',
    description: 'Lựa chọn hoàn hảo cho các cặp đôi với giường đôi 1m6 và tiện nghi hiện đại.',
    status: 'instock',
    images: [
      { id: 5, src: doi1m61, alt: 'Phòng Đôi Giường 1m6' },
      { id: 6, src: doi1m62, alt: 'Phòng Đôi Giường 1m6 - góc 2' },
    ],
  },
  {
    id: 4,
    name: 'Phòng Đôi Giường 1m6 + 1m2',
    slug: 'phong-doi-giuong-1m6-1m2',
    price: '1.350.000',
    description: 'Phòng rộng rãi với 2 giường: 1m6 và 1m2, phù hợp cho nhóm nhỏ hoặc gia đình.',
    status: 'instock',
    images: [
      { id: 7, src: doi1m6_1m21, alt: 'Phòng Đôi Giường 1m6 + 1m2' },
      { id: 8, src: doi1m6_1m23, alt: 'Phòng Đôi Giường 1m6 + 1m2 - góc 2' },
    ],
  },
  {
    id: 5,
    name: 'Phòng Đôi Giường 1m2',
    slug: 'phong-doi-giuong-1m2',
    price: '1.100.000',
    description: 'Phòng đôi kinh tế với 2 giường 1m2, thích hợp cho bạn bè hoặc đồng nghiệp.',
    status: 'instock',
    images: [
      { id: 9, src: doi1m21, alt: 'Phòng Đôi Giường 1m2' },
      { id: 10, src: doi1m22, alt: 'Phòng Đôi Giường 1m2 - góc 2' },
    ],
  },
  {
    id: 6,
    name: 'Phòng 2 Giường 1m4',
    slug: 'phong-2-giuong-1m4',
    price: '1.300.000',
    description: 'Phòng thoải mái với 2 giường 1m4, lý tưởng cho gia đình nhỏ hoặc 2 khách.',
    status: 'instock',
    images: [
      { id: 11, src: hai1, alt: 'Phòng 2 Giường 1m4' },
      { id: 12, src: hai2, alt: 'Phòng 2 Giường 1m4 - góc 2' },
    ],
  },
  {
    id: 7,
    name: 'Phòng 3 Giường',
    slug: 'phong-3-giuong',
    price: '2.100.000',
    description: 'Phòng rộng rãi phù hợp cho gia đình hoặc nhóm bạn, mang lại cảm giác thoải mái như ở nhà.',
    status: 'instock',
    images: [
      { id: 13, src: ba1, alt: 'Phòng 3 Giường' },
      { id: 14, src: ba2, alt: 'Phòng 3 Giường - góc 2' },
    ],
  },
]
