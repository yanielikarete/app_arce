import React from 'react';
import { Users, FileText, Truck, AlertCircle } from 'lucide-react';

const stats = [
  { name: 'Total Usuarios', value: '12', icon: Users },
  { name: 'Proveedores Activos', value: '45', icon: Truck },
  { name: 'Auditorías Pendientes', value: '3', icon: AlertCircle },
  { name: 'Reportes Generados', value: '89', icon: FileText },
];

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
        <p className="mt-1 text-sm text-gray-500">
          Resumen general del sistema
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon
                  className="h-8 w-8 text-primary"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">
                    {stat.name}
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">
              Actividad Reciente
            </h3>
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Aquí se mostrará la actividad reciente del sistema
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">
              Auditorías Pendientes
            </h3>
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Aquí se mostrarán las auditorías pendientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}