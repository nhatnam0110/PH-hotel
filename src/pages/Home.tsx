import { Link } from 'react-router-dom'
import { Skeleton } from '@/components/ui/skeleton'
import RoomCard from '@/components/RoomCard'
import ScrollFadeIn from '@/components/ScrollFadeIn'
import BookingForm from '@/components/BookingForm'
import { useRooms } from '@/hooks/useRooms'

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3O36xfLpkC-h2ndJt5Baq_F8iBogxId8hU196KxuAAHyYJb1ea8aCSVTXfrp_AFqa2yCUa4MP16zCIsZm88RN0KO06EDbyPLENYIIUIOp7YPWMeo4eWU2ufH7TZ-W_93b7jxRV00fx80y0VKbCConbbMN5XI4tWB9LI22BhbP-UMSWUcmBd4AsiKYyS4rsRoSWSue5ThQoLvAQtM-4QsTl6hAlncfwW1-unJ9o0HPira6nY9bflH9qkS8aHCCue6WrxeUxIuxUx8'
const LOBBY_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV85ZpUS_q1PGKoxDKT6pFwoKQC-IUrIaKV0-AvsZZkd9JjXmVa_X0DJkBG6lncGZwNF84oZTGM_Ir7NbJKxPlaSfUCCyZlKRs9MXA0vBUWay8LVbJwXxPC0w7OxfH9ozEYWLK21gQ5LIp-x_Qmhgggfzu7O1ZzMqYowZ0w79r9iduV4RmdCKxP0KoS5-XApqrWAFsBKu_oaV2qq4UgNRcwJSh_ErZ0_6CSc7hRjJRpMs7pMi6IWnlhUNziWg7TpRlJsloSER36Wc'
const TERRACE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhdMO-ZO-YSEqAfbiXFeopDdDZHGffBuuk4SkCrt-1C7PE-GQAubB5fWcl8I8jn-tkytrZv47KoP8KaUBvu0pviNGKXMLN7e2BIr7aoFKm-SEAzlxCH9zZNMbUzI9mGfiFpYq6R5b_C4_AXJmy_cZUTcHBipsK2DuVTl-qm7NoS1x7TGnpaMLjq7lUEr_1xGafE8lcG97lyyGDOQliVQAY2LWXrzcJ94o5fNJbRyq0O5cCdGb9BMqxckqtkXH55kUUVEwweVGjchk'
const YEN_SAO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgHaimqN6lqePB8DtvpP5rQI08iXCA_b-iJ3EsKph4O2tGkBXFS1i6s_vcdvzTOjgh9PLa9ce9fB7HR8_WczCQxcB_qbdKz4n9qgBh0Yv97BWh85ogaZ-DLdaGBkOKKwCErNa6Ak48cD0gbXp1BODWMc73p59e_WCXdJ0vAiOZOUJ061zr4jauemTC6n19qtK-TL4023jdYieVykiHxdB0RbUHfuzz1cQakJ6Tb_LAYgTZ3U89JPr9lu8sfvz8cxiHxldFu04NLSg'

export default function Home() {
  const { rooms, loading, error } = useRooms()
  const featured = rooms.slice(0, 3)

  return (
    <>
      {/* ── Hero ── */}
      <header className="relative h-[921px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src={HERO_IMG}
          alt="Khách Sạn Phúc Hưng exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="font-headline text-5xl md:text-7xl text-surface-container-lowest leading-tight tracking-tight mb-8">
            Quiet Luxury in the{' '}
            <span className="italic font-light text-surface-bright">Heart of the City</span>
          </h1>
          <a
            href="#booking"
            className="inline-block ruby-gradient text-on-primary px-10 py-4 rounded-lg font-label font-bold text-lg tracking-widest editorial-shadow hover:scale-105 transition-transform"
          >
            BOOK NOW
          </a>
        </div>
      </header>

      {/* ── Welcome ── */}
      <ScrollFadeIn>
        <section className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <span className="text-secondary font-headline italic text-xl block mb-4">
              The Coastal Curator
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-primary leading-tight mb-6">
              CHÀO MỪNG ĐẾN VỚI <br />
              KHÁCH SẠN PHÚC HƯNG
            </h2>
            <div className="w-20 h-1 bg-surface-container-highest mb-8" />
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8 font-light">
              Toạ lạc tại vị trí đắc địa của thành phố biển Rạch Giá, Khách sạn Phúc Hưng mang đến
              một không gian nghỉ dưỡng tinh tế và sang trọng. Với hệ thống 52 phòng nghỉ được thiết
              kế theo phong cách hiện đại nhưng vẫn giữ được nét ấm cúng, chúng tôi cam kết mang lại
              trải nghiệm thư giãn tuyệt đối cho quý khách.
            </p>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">call</span>
              <div>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                  Hotline Support
                </p>
                <p className="text-2xl font-headline text-tertiary">0297 386 8888</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-surface-container-low rounded-xl -z-10" />
            <img
              src={LOBBY_IMG}
              alt="Sảnh Khách Sạn Phúc Hưng"
              className="w-full aspect-[4/5] object-cover rounded-xl editorial-shadow"
            />
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Featured Rooms ── */}
      <ScrollFadeIn>
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline italic text-5xl md:text-7xl text-on-surface">
                  Living Spaces
                </h2>
                <p className="mt-6 text-lg text-on-surface-variant font-light italic">
                  Each room is a dialogue between traditional craftsmanship and modern coastal luxury.
                </p>
              </div>
              <Link
                to="/rooms"
                className="text-primary font-bold tracking-tighter flex items-center gap-2 group"
              >
                VIEW ALL SUITES
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_right_alt
                </span>
              </Link>
            </div>

            {error && (
              <p className="text-center text-error py-12">
                Không thể tải danh sách phòng. Vui lòng thử lại sau.
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="space-y-4">
                      <Skeleton className="w-full aspect-[4/5] rounded-xl" />
                      <Skeleton className="h-8 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-6 w-1/2" />
                    </div>
                  ))
                : featured.map((room, i) => (
                    <RoomCard key={room.id} room={room} featured={i === 1} />
                  ))
              }
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Rach Gia Highlight ── */}
      <ScrollFadeIn>
        <section className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
            <div className="md:col-span-7 relative z-10 order-2 md:order-1">
              <img
                src={TERRACE_IMG}
                alt="Sân thượng Khách Sạn Phúc Hưng nhìn ra Rạch Giá"
                className="w-full h-[600px] object-cover rounded-xl editorial-shadow"
              />
            </div>
            <div className="md:col-span-5 md:-ml-20 mt-12 md:mt-24 self-center relative z-20 order-1 md:order-2">
              <div className="bg-surface-container-lowest p-12 editorial-shadow rounded-xl">
                <h2 className="font-headline text-4xl text-primary mb-6">Phuc Hung Rach Gia</h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  Khám phá vẻ đẹp yên bình của Rạch Giá từ điểm dừng chân lý tưởng. Với thiết kế mở
                  đón gió biển và ánh sáng tự nhiên, mỗi khoảnh khắc tại Phúc Hưng đều trở thành một
                  kỷ niệm đáng nhớ. Dù bạn đến để công tác hay nghỉ dưỡng, chúng tôi luôn sẵn sàng
                  phục vụ với tâm thế chu đáo nhất.
                </p>
                <ul className="space-y-4">
                  {['Vị trí trung tâm sầm uất', 'Dịch vụ phòng 24/7 chuyên nghiệp'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-tertiary font-semibold">
                      <span
                        className="material-symbols-outlined text-secondary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Booking Form ── */}
      <section className="bg-surface py-24 px-8" id="booking">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl text-tertiary mb-4 uppercase tracking-widest">
              Đặt Phòng Trước
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-4" />
            <p className="text-on-surface-variant">
              Vui lòng điền thông tin bên dưới, chúng tôi sẽ liên hệ xác nhận ngay.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-10 md:p-16 rounded-xl editorial-shadow border border-outline-variant/15">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* ── Yến Sào ── */}
      <ScrollFadeIn>
        <section className="py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              {/* Text + products */}
              <div className="space-y-10 order-2 lg:order-1">
                <div className="space-y-4">
                  <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
                    Phuc Hung Bird's Nest
                  </span>
                  <h2 className="font-headline text-6xl md:text-7xl leading-tight">
                    Món Quà <br /> Cho Sức Khỏe
                  </h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
                    Experience the pinnacle of coastal wellness. Our ethically sourced Yến Sào
                    (Bird's Nest) collection represents our heritage of health and vitality,
                    packaged with the same elegance as our retreat.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="group cursor-pointer">
                    <div className="aspect-square bg-surface-container rounded-lg overflow-hidden mb-4">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDihw1rY49P-wzBEJFb0-dV1cEevKXwxgCpsodk88N7tEYDCged14L29quJUdT8RGarTF_VmjuSwEiorVBAe0NH-5HW2Lh_wjLPSGNYM1xvljD8PW1wlUAS5SA7_vRYwbi-Kojna2AFyGeMTx-Uorx_1Fve0CXZiP5AB1C-a4GYagRfzVDcKbUsV9KBgV_p9soGeuKql8aUhEPbwOU85CTe2VwfoCuqEHUdfPyFhnBsjgcRNwifqdyB0Bk1xNk0yFwTLbFQB5hSwpc"
                        alt="Premium Gift Box"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h5 className="font-headline text-xl italic">The Imperial Collection</h5>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="aspect-square bg-surface-container rounded-lg overflow-hidden mb-4">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2OPw0avFEIybtprVr2xYq2lfHNL7vwYLQzd4PwGW2V2nWfSoZaChiQjbMplsM2sAV5nk6_361KA72CsCia6QO1iG-9GUzi7EVwduKQtw9OrUN8yUSIYdq-vkmeje_Pk-3X86pzz-EjEXRrakGgyEJbS6pxnf7bq-SO08Nn6g4FiTnaJU6P3T5vyjlZmo0bb07vy7WnzYfRJAQkxUTFHs2J3aZt2ocqz1YgGtYqS3MuGct98dy2ovZPv-w7qfzGXZgkWMsl1uLZlk"
                        alt="Artisanal Nest"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h5 className="font-headline text-xl italic">Pure Raw Selection</h5>
                  </div>
                </div>

                <Link
                  to="/yen-sao"
                  className="flex items-center gap-4 text-on-surface font-bold uppercase tracking-widest group border-b border-on-surface pb-2 w-fit"
                >
                  Explore the Gallery
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    arrow_outward
                  </span>
                </Link>
              </div>

              {/* Lifestyle image */}
              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={YEN_SAO_IMG}
                    alt="Yến Sào Phúc Hưng lifestyle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
