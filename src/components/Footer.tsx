import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-tertiary text-surface pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <div className="text-xl font-headline text-surface-container-lowest">
            Phuc Hung Hotel
          </div>
          <p className="text-sm text-surface-container-high leading-relaxed">
            Sự hài lòng của quý khách là niềm vinh hạnh của chúng tôi. Hãy để Phúc Hưng
            đồng hành cùng bạn trong mọi kỳ nghỉ tại Rạch Giá.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-secondary">public</span>
            <span className="material-symbols-outlined text-secondary">share</span>
            <span className="material-symbols-outlined text-secondary">location_on</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-headline text-lg text-secondary">Quick Links</h4>
          <div className="flex flex-col space-y-2 text-sm">
            {[
              { to: '/', label: 'Trang Chủ' },
              { to: '/rooms', label: 'Loại Phòng' },
              { to: '/news', label: 'Tin Tức' },
              { to: '/yen-sao', label: 'Yến Sào' },
              { to: '/contact', label: 'Liên Hệ' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-surface-container-high hover:text-secondary hover:underline underline-offset-4 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-headline text-lg text-secondary">Contact Info</h4>
          <div className="text-sm text-surface-container-high space-y-4">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-secondary-fixed">place</span>
              <span>123 Đường Tôn Đức Thắng, TP. Rạch Giá, Kiên Giang</span>
            </div>
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-secondary-fixed">mail</span>
              <span>contact@phuchunghotel.vn</span>
            </div>
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-secondary-fixed">phone</span>
              <span>0297 386 8888</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-surface-variant/10 text-center text-sm text-surface-container-high">
        © {new Date().getFullYear()} Phuc Hung Hotel. All rights reserved.
      </div>
    </footer>
  )
}
