import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  FileSpreadsheet,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Package,
  Upload,
  Boxes,
  Mail,
  Shield,
  Wallet,
  ChevronDown,
  ChevronUp,
  UserCheck,
  UserCog,
  CreditCard,
  ClipboardList,
  PackageCheck,
  Building2,
  Bell,
  PackageSearch,
  LogOut
} from 'lucide-react';
import { useSidebarStore } from '../../store/sidebarStore';
import { useAuthStore } from '../../store/authStore';

export function Sidebar() {
  const { isCollapsed, toggleCollapse, currentPage, setCurrentPage } = useSidebarStore();
  const user = useAuthStore(state => state.user);
  const logout = useAuthStore(state => state.logout);
  const [showUserSubmenu, setShowUserSubmenu] = useState(false);
  const [showOrderSubmenu, setShowOrderSubmenu] = useState(false);
  const [showProductSubmenu, setShowProductSubmenu] = useState(false);
  const [showExpoSubmenu, setShowExpoSubmenu] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    {
      icon: Users,
      label: 'Users',
      id: 'users-section',
      submenu: [
        { icon: UserCog, label: 'User Management', id: 'users' },
        { icon: UserCheck, label: 'Approvals', id: 'approvals' }
      ]
    },
    { icon: Shield, label: 'Admin Management', id: 'admin', role: 'superadmin' },
    {
      icon: Package,
      label: 'Products',
      id: 'products-section',
      submenu: [
        { icon: ShoppingBag, label: 'Product Management', id: 'products' },
        { icon: PackageCheck, label: 'Inventory Management', id: 'inventory' },
        { icon: PackageSearch, label: 'Sample Management', id: 'samples' }
      ]
    },
    {
      icon: FileSpreadsheet,
      label: 'Orders',
      id: 'orders-section',
      submenu: [
        { icon: ClipboardList, label: 'Order Management', id: 'orders' },
        { icon: CreditCard, label: 'Order Payments', id: 'payments' }
      ]
    },
    {
      icon: Building2,
      label: 'Expo',
      id: 'expo-section',
      submenu: [
        { icon: Boxes, label: 'Expo Management', id: 'expo' },
        { icon: Upload, label: 'Bulk Upload', id: 'upload', role: 'superadmin' }
      ]
    },
    { icon: Bell, label: 'Notifications', id: 'notifications' },
    { icon: BarChart3, label: 'Analytics', id: 'analytics' },
    { icon: Mail, label: 'Contact', id: 'contact' },
    { icon: Settings, label: 'Settings', id: 'settings' }
  ];

  const handleMenuClick = (item: any) => {
    if (item.submenu) {
      if (item.id === 'users-section') {
        setShowUserSubmenu(!showUserSubmenu);
        setShowOrderSubmenu(false);
        setShowProductSubmenu(false);
        setShowExpoSubmenu(false);
      } else if (item.id === 'orders-section') {
        setShowOrderSubmenu(!showOrderSubmenu);
        setShowUserSubmenu(false);
        setShowProductSubmenu(false);
        setShowExpoSubmenu(false);
      } else if (item.id === 'products-section') {
        setShowProductSubmenu(!showProductSubmenu);
        setShowUserSubmenu(false);
        setShowOrderSubmenu(false);
        setShowExpoSubmenu(false);
      } else if (item.id === 'expo-section') {
        setShowExpoSubmenu(!showExpoSubmenu);
        setShowUserSubmenu(false);
        setShowOrderSubmenu(false);
        setShowProductSubmenu(false);
      }
    } else {
      setCurrentPage(item.id);
      if (isCollapsed) {
        setShowUserSubmenu(false);
        setShowOrderSubmenu(false);
        setShowProductSubmenu(false);
        setShowExpoSubmenu(false);
      }
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b dark:border-gray-700">
        {!isCollapsed && (
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Milagro Admin
          </span>
        )}
        <button
          onClick={toggleCollapse}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>
      </div>

      <div className="flex flex-col h-[calc(100vh-4rem)] justify-between">
        <nav className="p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              if (item.role === 'superadmin' && user?.role !== 'superadmin') return null;
              
              const Icon = item.icon;
              const isActive = item.submenu 
                ? item.submenu.some(subitem => subitem.id === currentPage)
                : currentPage === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuClick(item)}
                    className={`flex items-center w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      isActive ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-gray-100'
                    } ${isCollapsed ? 'justify-center' : 'justify-between'}`}
                  >
                    <div className="flex items-center">
                      <Icon className="h-5 w-5" />
                      {!isCollapsed && <span className="ml-3">{item.label}</span>}
                    </div>
                    {!isCollapsed && item.submenu && (
                      ((item.id === 'users-section' && showUserSubmenu) || 
                       (item.id === 'orders-section' && showOrderSubmenu) ||
                       (item.id === 'products-section' && showProductSubmenu) ||
                       (item.id === 'expo-section' && showExpoSubmenu))
                        ? <ChevronUp className="h-4 w-4" /> 
                        : <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {!isCollapsed && item.submenu && (
                    ((item.id === 'users-section' && showUserSubmenu) || 
                     (item.id === 'orders-section' && showOrderSubmenu) ||
                     (item.id === 'products-section' && showProductSubmenu) ||
                     (item.id === 'expo-section' && showExpoSubmenu))
                  ) && (
                    <ul className="mt-2 ml-6 space-y-2">
                      {item.submenu.map((subitem) => {
                        if (subitem.role === 'superadmin' && user?.role !== 'superadmin') return null;
                        
                        const SubIcon = subitem.icon;
                        return (
                          <li key={subitem.id}>
                            <button
                              onClick={() => setCurrentPage(subitem.id)}
                              className={`flex items-center w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                currentPage === subitem.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-gray-100'
                              }`}
                            >
                              <SubIcon className="h-4 w-4 mr-2" />
                              <span>{subitem.label}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={logout}
            className={`flex items-center w-full p-2 rounded-lg text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 ${
              isCollapsed ? 'justify-center' : 'justify-start'
            }`}
          >
            <LogOut className="h-5 w-5" />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}