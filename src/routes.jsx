import { createBrowserRouter } from 'react-router-dom'
import { Timeline } from './pages/Timeline'
import { Status } from './pages/Status'
import { Default } from './layouts/Default'
import { Explorer } from './pages/Explorer'
import { Notifications } from './pages/Notifications'
import { Messages } from './pages/Messages'
import { BookMarks } from './pages/BookMarks'
import { List } from './pages/List'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />
      },
      {
        path: '/status',
        element: <Status />
      },
      {
        path: '/explorer',
        element: <Explorer />
      },
      {
        path: '/notifications',
        element: <Notifications />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/books',
        element: <BookMarks />
      },
      {
        path: '/list',
        element: <List />
      },
    ]
  }
])
