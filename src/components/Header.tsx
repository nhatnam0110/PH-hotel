import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-background border-b border-border px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-semibold text-primary">
        Khách Sạn Phúc Hưng
      </Link>
      <nav className="flex gap-6 text-sm">
        <Link to="/" className="hover:text-primary transition-colors">Trang Chủ</Link>
        <Link to="/rooms" className="hover:text-primary transition-colors">Phòng Nghỉ</Link>
        <Link to="/booking" className="hover:text-primary transition-colors">Đặt Phòng</Link>
        <Link to="/yen-sao" className="hover:text-primary transition-colors">Yến Sào</Link>
        <Link to="/news" className="hover:text-primary transition-colors">Tin Tức</Link>
        <Link to="/contact" className="hover:text-primary transition-colors">Liên Hệ</Link>
      </nav>
    </header>
  )
}
