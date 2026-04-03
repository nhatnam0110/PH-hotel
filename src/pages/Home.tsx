import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import RoomCard from '@/components/RoomCard'
import ScrollFadeIn from '@/components/ScrollFadeIn'
import { useRooms } from '@/hooks/useRooms'

export default function Home() {
  const { rooms, loading, error } = useRooms()
  const featured = rooms.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-foreground/60 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <p className="text-secondary uppercase tracking-widest text-sm mb-4">
            Chào mừng đến với
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Khách Sạn Phúc Hưng
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Nghỉ dưỡng sang trọng tại trung tâm Rạch Giá, Kiên Giang
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/booking"
              className={cn(buttonVariants({ size: 'lg' }), 'bg-primary hover:bg-primary/90')}
            >
              Đặt Phòng Ngay
            </Link>
            <Link
              to="/rooms"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'text-white border-white hover:bg-white hover:text-foreground')}
            >
              Xem Phòng
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <ScrollFadeIn>
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
          <p className="text-secondary uppercase tracking-widest text-sm mb-3">Về Chúng Tôi</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Trải Nghiệm Đẳng Cấp 5 Sao
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Khách sạn Phúc Hưng tọa lạc tại trung tâm thành phố Rạch Giá, cung cấp dịch vụ
            lưu trú cao cấp với đầy đủ tiện nghi hiện đại. Chúng tôi cam kết mang đến cho
            quý khách những trải nghiệm khó quên với sự phục vụ tận tâm và chuyên nghiệp.
          </p>
        </section>
      </ScrollFadeIn>

      {/* Amenities */}
      <ScrollFadeIn>
        <section className="py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-secondary uppercase tracking-widest text-sm mb-3 text-center">Tiện Ích</p>
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Dịch Vụ Nổi Bật
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: '🏊', label: 'Hồ Bơi' },
                { icon: '🍽️', label: 'Nhà Hàng' },
                { icon: '💆', label: 'Spa & Massage' },
                { icon: '🅿️', label: 'Bãi Đỗ Xe' },
                { icon: '📶', label: 'WiFi Miễn Phí' },
                { icon: '🏋️', label: 'Phòng Gym' },
                { icon: '🚌', label: 'Đưa Đón Sân Bay' },
                { icon: '🌿', label: 'Yến Sào Kiên Giang' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3">
                  <span className="text-4xl">{icon}</span>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Featured Rooms */}
      <ScrollFadeIn>
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <p className="text-secondary uppercase tracking-widest text-sm mb-3 text-center">Lưu Trú</p>
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Phòng Nghỉ Nổi Bật
          </h2>

          {error && (
            <p className="text-center text-red-500">Không thể tải danh sách phòng. Vui lòng thử lại.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="h-48 w-full rounded-lg" />
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))
              : featured.map((room) => <RoomCard key={room.id} room={room} />)
            }
          </div>

          {!loading && !error && (
            <div className="text-center mt-10">
              <Link to="/rooms" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>
                Xem Tất Cả Phòng
              </Link>
            </div>
          )}
        </section>
      </ScrollFadeIn>

      {/* CTA Banner */}
      <ScrollFadeIn>
        <section className="py-20 bg-primary text-white text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn Sàng Đặt Phòng?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Liên hệ ngay để nhận ưu đãi tốt nhất hoặc đặt phòng trực tuyến chỉ trong vài phút.
          </p>
          <Link
            to="/booking"
            className={cn(buttonVariants({ size: 'lg' }), 'bg-secondary text-foreground hover:bg-secondary/90')}
          >
            Đặt Phòng Ngay
          </Link>
        </section>
      </ScrollFadeIn>
    </>
  )
}
