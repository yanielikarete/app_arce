import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Usuarios from '../pages/Usuarios';
import Roles from '../pages/Roles';
import Permisos from '../pages/Permisos';
import Auditorias from '../pages/Auditorias';
import Reportes from '../pages/Reportes';
import Estados from '../pages/Estados';
import Categorias from '../pages/Categorias';
import Proveedores from '../pages/Proveedores';
import NuevoProveedor from '../pages/NuevoProveedor';
import Personas from '../pages/Personas';
import Proyectos from '../pages/Proyectos';

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout><Dashboard /></Layout>
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/usuarios"
          element={
            <PrivateRoute>
              <Layout><Usuarios /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/roles"
          element={
            <PrivateRoute>
              <Layout><Roles /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/permisos"
          element={
            <PrivateRoute>
              <Layout><Permisos /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/auditorias"
          element={
            <PrivateRoute>
              <Layout><Auditorias /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/reportes"
          element={
            <PrivateRoute>
              <Layout><Reportes /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/estados"
          element={
            <PrivateRoute>
              <Layout><Estados /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/categorias"
          element={
            <PrivateRoute>
              <Layout><Categorias /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/proveedores"
          element={
            <PrivateRoute>
              <Layout><Proveedores /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/proveedores/nuevo"
          element={
            <PrivateRoute>
              <Layout><NuevoProveedor /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/personas"
          element={
            <PrivateRoute>
              <Layout><Personas /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/proyectos"
          element={
            <PrivateRoute>
              <Layout><Proyectos /></Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}