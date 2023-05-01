import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User
} from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Navigate() {
  return (
    <nav className="flex flex-col gap-8">
      <Link
        className="flex items-center gap-5 text-xl font-bold hover:text-blue-500"
        to="/"
      >
        <House weight="fill" className="w-8 h-8" />
        <span className="hidden md:block">Home</span>
      </Link>
      <Link
        className="flex items-center gap-5 text-xl font-bold hover:text-blue-500"
        to="/explorer"
      >
        <Hash className="w-8 h-8" />
        <span className="hidden md:block">Explorer</span>
      </Link>
      <Link
        className="flex items-center gap-5 text-xl font-bold hover:text-blue-500"
        to="/notifications"
      >
        <Bell className="w-8 h-8" />
        <span className="hidden md:block">Notifications</span>
      </Link>
      <Link
        className="flex items-center gap-5 text-xl font-bold hover:text-blue-500"
        to="/messages"
      >
        <Envelope className="w-8 h-8" />
        <span className="hidden md:block">Messages</span>
      </Link>
      <Link
        className="flex items-center gap-5 text-xl font-bold hover:text-blue-500"
        to="/books"
      >
        <BookmarkSimple className="w-8 h-8" />
        <span className="hidden md:block">Bookmarks</span>
      </Link>
      <Link
        className="flex items-center gap-5 text-xl font-bold hover:text-blue-500"
        to="/list"
      >
        <FileText className="w-8 h-8" />
        <span className="hidden md:block">Lists</span>
      </Link>
      <Link
        className="flex items-center gap-5 text-xl font-bold hover:text-blue-500"
        to=""
      >
        <User className="w-8 h-8" />
        <span className="hidden md:block"> Profile</span>
      </Link>
    </nav>
  )
}
