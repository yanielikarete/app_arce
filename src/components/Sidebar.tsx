import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { XIcon, HomeIcon, ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
import clsx from 'clsx';

interface NavigationItem {
  name: string;
  icon: React.ComponentType<any>;
  items: {
    name: string;
    href: string;
  }[];
}

interface SidebarProps {
  navigation: NavigationItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Sidebar({ navigation, open, setOpen }: SidebarProps) {
  const location = useLocation();
  const [collapsedGroups, setCollapsedGroups] = React.useState<{ [key: string]: boolean }>(
    navigation.reduce((acc, group) => ({ ...acc, [group.name]: false }), {})
  );

  React.useEffect(() => {
    const selectedGroup = navigation.find(group => group.items.some(item => location.pathname === item.href));
    if (selectedGroup) {
      setCollapsedGroups(prev => ({ ...prev, [selectedGroup.name]: true }));
    }
  }, [location.pathname, navigation]);

  const toggleCollapse = (groupName: string) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  return (
    <>
      <div
        className={clsx(
          'fixed inset-0 z-50 bg-gray-900/80 lg:hidden',
          open ? 'block' : 'hidden'
        )}
        onClick={() => setOpen(false)}
      />

      <div
        className={clsx(
          'fixed inset-y-0 left-0 z-50 w-64 transform bg-primary transition duration-200 ease-in-out lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-16 shrink-0 items-center justify-between px-6">
          <img
            className="h-8 w-auto"
            src="https://via.placeholder.com/150x50/002855/FFFFFF?text=LOGO"
            alt="Logo"
          />
          <button
            type="button"
            className="lg:hidden text-white"
            onClick={() => setOpen(false)}
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-5 flex flex-1 flex-col divide-y divide-primary-light">
          <div className="space-y-1 px-4">
            <div className="py-2">
              <div className="mb-2 px-3">
                <div className="flex items-center text-sm font-medium text-gray-300">
                  <HomeIcon className="mr-3 h-5 w-5" />
                  Inicio
                </div>
              </div>
              <div className="space-y-1">
                <Link
                  to="/"
                  className={clsx(
                    'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
                    location.pathname === '/'
                      ? 'bg-primary-light text-white'
                      : 'text-gray-300 hover:bg-primary-light hover:text-white'
                  )}
                >
                  <span className="truncate">Inicio</span>
                </Link>
              </div>
            </div>
            {navigation.map((group) => (
              <div key={group.name} className="py-2">
                <div className="mb-2 px-3">
                  <div
                    className="flex items-center justify-between text-sm font-medium text-gray-300 cursor-pointer hover:font-bold hover:underline"
                    onClick={() => toggleCollapse(group.name)}
                  >
                    <div className="flex items-center">
                      <group.icon className="mr-3 h-5 w-5" />
                      {group.name}
                    </div>
                    {collapsedGroups[group.name] ? (
                      <ChevronDownIcon className="h-5 w-5" />
                    ) : (
                      <ChevronRightIcon className="h-5 w-5" />
                    )}
                  </div>
                </div>
                {collapsedGroups[group.name] && (
                  <div className="space-y-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={clsx(
                          'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
                          location.pathname === item.href
                            ? 'bg-primary-light text-white'
                            : 'text-gray-300 hover:bg-primary-light hover:text-white'
                        )}
                        style={{ paddingLeft: '40px' }} // Ajustar el padding izquierdo para alinearlo con el padre
                      >
                        <span className="truncate">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}