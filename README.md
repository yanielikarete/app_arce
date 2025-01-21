# Sistema de Gestión de Auditorías y Control de Empresas

## Descripción
Este proyecto es una aplicación web para la gestión de auditorías y control de empresas. La aplicación permite a los usuarios iniciar sesión, navegar por diferentes secciones como Dashboard, Usuarios, Roles, Permisos, Auditorías, Reportes, Estados, Categorías, Proveedores y Nuevo Proveedor. La aplicación también incluye un botón para cambiar entre modos claro y oscuro.

## Características
- Inicio de sesión con autenticación básica.
- Navegación protegida por rutas.
- Modo claro y oscuro.
- Diseño responsive.

## Tecnologías Utilizadas
- React
- React Router
- Tailwind CSS
- Vite
- TypeScript

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/sistema-gestion-auditorias.git
   cd sistema-gestion-auditorias
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Uso

1. Abre tu navegador y navega a `http://localhost:5173`.
2. Inicia sesión con las credenciales:
   - Usuario: `admin`
   - Contraseña: `admin`
3. Navega por las diferentes secciones utilizando el menú lateral.
4. Utiliza el botón de Light/Dark en la esquina superior izquierda para cambiar entre modos claro y oscuro.

## Estructura del Proyecto

```
sistema-gestion-auditorias/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── Login.tsx
│   │   ├── Sidebar.tsx
│   ├── pages/
│   │   ├── Auditorias.tsx
│   │   ├── Categorias.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Estados.tsx
│   │   ├── NuevoProveedor.tsx
│   │   ├── Permisos.tsx
│   │   ├── Proveedores.tsx
│   │   ├── Reportes.tsx
│   │   ├── Roles.tsx
│   │   ├── Usuarios.tsx
│   ├── routes/
│   │   ├── index.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.