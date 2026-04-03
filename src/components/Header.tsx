import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/', label: 'Trang Chủ' },
  { to: '/rooms', label: 'Loại Phòng' },
  { to: '/news', label: 'Tin Tức' },
  { to: '/yen-sao', label: 'Yến Sào' },
  { to: '/contact', label: 'Liên Hệ' },
]

export default function Header() {
  const { pathname } = useLocation()

  return (
    <nav className="sticky top-0 w-full z-50 bg-background/70 backdrop-blur-xl shadow-sm shadow-on-surface-variant/5 flex justify-between items-center px-8 py-4">
      <Link
        to="/"
        className="text-2xl font-headline font-bold text-primary uppercase tracking-tighter"
      >
        Phuc Hung Hotel
      </Link>

      <div className="hidden md:flex items-center gap-8 font-headline text-lg tracking-wide">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={cn(
              'transition-colors',
              pathname === to
                ? 'text-primary border-b-2 border-secondary pb-1'
                : 'text-tertiary hover:text-primary'
            )}
          >
            {label}
          </Link>
        ))}
      </div>

      <Link
        to="/booking"
        className="ruby-gradient text-on-primary px-6 py-2.5 rounded-lg font-label font-semibold tracking-wide hover:opacity-90 transition-all active:scale-95 duration-200"
      >
        Đặt Phòng
      </Link>
    </nav>
  )
}
