import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircuitBoardIcon,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  LayoutDashboardIcon,
  Loader2,
  LogIn,
  LucideIcon,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  User2Icon,
  UserX2Icon,
  X,
} from 'lucide-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/',
    icon: <LayoutDashboardIcon size={18} />,
  },
  {
    title: 'Tasks',
    label: '3',
    href: '/tasks',
    icon: <LayoutDashboardIcon size={18} />,
  },
  {
    title: 'Chats',
    label: '9',
    href: '/chats',
    icon: <LayoutDashboardIcon size={18} />,
  },
  {
    title: 'Apps',
    label: '',
    href: '/apps',
    icon: <LayoutDashboardIcon size={18} />,
  },
  {
    title: 'Authentication',
    label: '',
    href: '',
    icon: <LayoutDashboardIcon size={18} />,
    sub: [
      {
        title: 'Sign In (email + password)',
        label: '',
        href: '/sign-in',
        icon: <LayoutDashboardIcon size={18} />,
      },
      {
        title: 'Sign In (Box)',
        label: '',
        href: '/sign-in-2',
        icon: <LayoutDashboardIcon size={18} />,
      },
      {
        title: 'Sign Up',
        label: '',
        href: '/sign-up',
        icon: <LayoutDashboardIcon size={18} />,
      },
      {
        title: 'Forgot Password',
        label: '',
        href: '/forgot-password',
        icon: <LayoutDashboardIcon size={18} />,
      },
      {
        title: 'OTP',
        label: '',
        href: '/otp',
        icon: <LayoutDashboardIcon size={18} />,
      },
    ],
  },
  {
    title: 'Users',
    label: '',
    href: '/users',
    icon: <LayoutDashboardIcon size={18} />,
  },
  {
    title: 'Requests',
    label: '10',
    href: '/requests',
    icon: <LayoutDashboardIcon size={18} />,
    sub: [
      {
        title: 'Trucks',
        label: '9',
        href: '/trucks',
        icon: <LayoutDashboardIcon size={18} />,
      },
      {
        title: 'Cargos',
        label: '',
        href: '/cargos',
        icon: <LayoutDashboardIcon size={18} />,
      },
    ],
  },
  {
    title: 'Analysis',
    label: '',
    href: '/analysis',
    icon: <LayoutDashboardIcon size={18} />,
  },
  {
    title: 'Extra Components',
    label: '',
    href: '/extra-components',
    icon: <LayoutDashboardIcon size={18} />,
  },
  {
    title: 'Error Pages',
    label: '',
    href: '',
    icon: <LayoutDashboardIcon size={18} />,
    sub: [
      {
        title: 'Not Found',
        label: '',
        href: '/404',
        icon: <LayoutDashboardIcon size={18} />,
      },
      {
        title: 'Internal Server Error',
        label: '',
        href: '/500',
        icon: <LayoutDashboardIcon size={18} />,
      },
      {
        title: 'Maintenance Error',
        label: '',
        href: '/503',
        icon: <LayoutDashboardIcon size={18} />,
      },
      {
        title: 'Unauthorised Error',
        label: '',
        href: '/401',
        icon: <LayoutDashboardIcon size={18} />,
      },
    ],
  },
  {
    title: 'Settings',
    label: '',
    href: '/settings',
    icon: <LayoutDashboardIcon size={18} />,
  },
]
