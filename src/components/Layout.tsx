import React, { useState } from 'react';
import {
  Users,
  Settings,
  Database,
  Truck,
  ChevronDown,
  Menu as MenuIcon,
  LogOut,
  Sun,
  Moon
} from 'lucide-react';
import Sidebar from './Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';

const navigation = [
  {
    name: 'Administración',
    icon: Settings,
    items: [
      { name: 'Usuarios', href: '/usuarios' },
      { name: 'Roles', href: '/roles' },
      { name: 'Permisos Rol', href: '/permisos' },
    ],
  },
  {
    name: 'Menú',
    icon: MenuIcon,
    items: [
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'Personas', href: '/personas' },
      { name: 'Proyectos', href: '/proyectos' },
      { name: 'Auditorías', href: '/auditorias' },
      { name: 'Reportes', href: '/reportes' },
    ],
  },
  {
    name: 'Tipos de Datos',
    icon: Database,
    items: [
      { name: 'Estados', href: '/estados' },
      { name: 'Categorías', href: '/categorias' },
    ],
  },
  {
    name: 'Proveedores',
    icon: Truck,
    items: [
      { name: 'Listado', href: '/proveedores' },
      { name: 'Nuevo Proveedor', href: '/proveedores/nuevo' },
    ],
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const user = {
    email: 'usuario@ejemplo.com',
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} flex flex-col`}>
      <Sidebar
        navigation={navigation}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <div className="lg:pl-64 flex flex-col min-h-screen">
        <div className={`sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8`}>
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Abrir sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1 items-center">
              <h1 className="text-2xl font-semibold text-primary sm:text-xl">
                Sistema de Gestión de Proveedores
              </h1>
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" />
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">
                  {user.email}
                </span>
                <button
                  type="button"
                  className="p-2 text-gray-500 hover:text-primary"
                  onClick={() => {
                    localStorage.removeItem('isAuthenticated');
                    navigate('/login');
                  }}
                >
                  <LogOut className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-500 hover:text-primary"
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        <footer className={`mt-auto border-t ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
          <div className="px-4 py-4 text-center text-sm text-gray-500">
            2025 © Sistema de Gestión de Proveedores. Todos los derechos reservados.
          </div>
        </footer>
      </div>
    </div>
  );
}