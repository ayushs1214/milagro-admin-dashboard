import type { DashboardMetric, ChartData, User, Admin, Product, Category } from '../types';

export const mockMetrics: DashboardMetric[] = [
  {
    id: '1',
    label: 'Total Users',
    value: 12453,
    change: 12,
    icon: 'users'
  },
  {
    id: '2',
    label: 'Active Orders',
    value: 789,
    change: -2.5,
    icon: 'shopping-cart'
  },
  {
    id: '3',
    label: 'Revenue',
    value: 98765,
    change: 8.2,
    icon: 'dollar-sign'
  },
  {
    id: '4',
    label: 'Pending Approvals',
    value: 42,
    change: 4.1,
    icon: 'clock'
  }
];

export const mockChartData = {
  revenue: [
    { name: 'Jan', value: 65000 },
    { name: 'Feb', value: 78000 },
    { name: 'Mar', value: 92000 },
    { name: 'Apr', value: 85000 },
    { name: 'May', value: 98765 },
    { name: 'Jun', value: 105000 },
    { name: 'Jul', value: 115000 },
    { name: 'Aug', value: 108000 },
    { name: 'Sep', value: 118000 },
    { name: 'Oct', value: 125000 },
    { name: 'Nov', value: 132000 },
    { name: 'Dec', value: 145000 }
  ],
  users: [
    { name: 'Jan', value: 9800 },
    { name: 'Feb', value: 10500 },
    { name: 'Mar', value: 11200 },
    { name: 'Apr', value: 11800 },
    { name: 'May', value: 12453 },
    { name: 'Jun', value: 13100 },
    { name: 'Jul', value: 13800 },
    { name: 'Aug', value: 14300 },
    { name: 'Sep', value: 15000 },
    { name: 'Oct', value: 15800 },
    { name: 'Nov', value: 16500 },
    { name: 'Dec', value: 17200 }
  ],
  userTypes: [
    { name: 'Dealers', value: 450 },
    { name: 'Architects', value: 320 },
    { name: 'Builders', value: 180 },
    { name: 'Others', value: 90 }
  ],
  orderStatus: [
    { name: 'Completed', value: 380 },
    { name: 'Processing', value: 220 },
    { name: 'Pending', value: 145 },
    { name: 'Cancelled', value: 44 }
  ]
};

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Tiles',
    description: 'Floor and wall tiles',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?auto=format&fit=crop&q=80&w=300&h=200',
    productCount: 150
  },
  {
    id: '2',
    name: 'Bathroom',
    description: 'Bathroom fixtures and accessories',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=300&h=200',
    productCount: 80
  },
  {
    id: '3',
    name: 'Shower',
    description: 'Shower systems and accessories',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=300&h=200',
    productCount: 60
  },
  {
    id: '4',
    name: 'Taps',
    description: 'Bathroom and kitchen taps',
    image: 'https://images.unsplash.com/photo-1593623562004-4c36c66d9c3f?auto=format&fit=crop&q=80&w=300&h=200',
    productCount: 100
  },
  {
    id: '5',
    name: 'Sink',
    description: 'Kitchen and bathroom sinks',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=300&h=200',
    productCount: 45
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Floor Tile',
    category: 'Tiles',
    price: 85,
    moq: 100,
    description: 'High-quality ceramic floor tile with elegant finish',
    images: ['https://images.unsplash.com/photo-1615971677499-5467cbab01c0?auto=format&fit=crop&q=80&w=300&h=200'],
    specifications: {
      dimensions: '60x60 cm',
      material: 'Ceramic',
      color: 'Beige',
      weight: '8 kg'
    },
    stock: 1000,
    status: 'active'
  },
  {
    id: '2',
    name: 'Modern Bathroom Tap',
    category: 'Taps',
    price: 2500,
    moq: 5,
    description: 'Contemporary design bathroom tap with chrome finish',
    images: ['https://images.unsplash.com/photo-1593623562004-4c36c66d9c3f?auto=format&fit=crop&q=80&w=300&h=200'],
    specifications: {
      dimensions: '15x8 cm',
      material: 'Brass',
      color: 'Chrome',
      weight: '0.8 kg'
    },
    stock: 200,
    status: 'active'
  },
  {
    id: '3',
    name: 'Luxury Shower System',
    category: 'Shower',
    price: 15000,
    moq: 2,
    description: 'Complete shower system with rainfall head and handheld unit',
    images: ['https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=300&h=200'],
    specifications: {
      dimensions: '40x25 cm',
      material: 'Stainless Steel',
      color: 'Matte Black',
      weight: '3.5 kg'
    },
    stock: 50,
    status: 'active'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@milagro.com',
    role: 'Dealer',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    businessInfo: {
      companyName: 'Doe Enterprises',
      panNumber: 'ABCDE1234F',
      gstNumber: '29ABCDE1234F1Z5',
      address: '123 Business District, Mumbai, India',
      phone: '+91 98765 43210'
    },
    createdAt: '2024-03-01',
    lastLogin: '2024-03-15T09:30:00',
    orders: [
      {
        id: 'ORD001',
        date: '2024-03-10',
        total: 25000,
        status: 'Delivered'
      }
    ],
    payments: [
      {
        id: 'PAY001',
        date: '2024-03-10',
        amount: 25000,
        method: 'Credit Card',
        status: 'Completed'
      }
    ]
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    email: 'sarah@milagro.com',
    role: 'Architect',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    businessInfo: {
      companyName: 'Wilson Architects',
      panNumber: 'FGHIJ5678K',
      gstNumber: '29FGHIJ5678K1Z5',
      address: '456 Design Street, Delhi, India',
      phone: '+91 98765 43211'
    },
    createdAt: '2024-02-15',
    lastLogin: '2024-03-14T15:45:00',
    orders: [],
    payments: []
  },
  {
    id: '3',
    name: 'Raj Patel',
    email: 'raj@milagro.com',
    role: 'Builder',
    status: 'pending',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    businessInfo: {
      companyName: 'Patel Constructions',
      panNumber: 'LMNOP9012Q',
      gstNumber: '29LMNOP9012Q1Z5',
      address: '789 Builder Hub, Bangalore, India',
      phone: '+91 98765 43212'
    },
    createdAt: '2024-03-14',
    lastLogin: '',
    orders: [],
    payments: []
  }
];

export const mockAdmins: Admin[] = [
  {
    id: '1',
    name: 'Super Admin',
    email: 'admin@milagro.com',
    role: 'superadmin',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastLogin: '2024-03-15T14:30:00',
    createdAt: '2024-01-01',
    permissions: ['all']
  },
  {
    id: '2',
    name: 'Test Admin',
    email: 'testadmin@milagro.com',
    role: 'admin',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastLogin: '2024-03-15T12:45:00',
    createdAt: '2024-02-01',
    permissions: ['users', 'products', 'orders']
  }
];