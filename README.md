# TaskFlow

Aplicación web moderna para gestión de tareas con Kanban + lista, autenticación simple y persistencia real.

## Stack
- Next.js 16 + React + TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite (persistencia local)

## Funcionalidades
- Crear, editar y eliminar tareas
- Campos completos: título, descripción, prioridad, fecha límite, estado, etiquetas, solicitante, notas
- Tablero Kanban (Pendientes / Realizando / Hechas)
- Drag & drop entre estados
- Vista lista adicional
- Buscador + filtros (estado, prioridad, etiqueta, fecha límite)
- Orden por prioridad o fecha
- Tareas vencidas destacadas
- Métricas superiores (pendientes, en curso, completadas, vencidas)
- Modo claro/oscuro
- Comentarios y pequeño historial de cambios de estado
- Autenticación simple por contraseña

## Ejecutar en local
```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:push
npm run db:seed
npm run dev
```

Abre: http://localhost:3000

## Login
- Contraseña definida en `.env` (`APP_PASSWORD`)

## Estructura principal
- `src/app/page.tsx` → dashboard principal (kanban/lista)
- `src/app/login/page.tsx` → login
- `src/app/api/tasks/*` → API de tareas, estados, comentarios
- `src/lib/prisma.ts` → cliente Prisma
- `prisma/schema.prisma` → modelos
- `prisma/seed.ts` → datos demo
