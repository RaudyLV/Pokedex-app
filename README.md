# 🎮 Pokédex App

Mi primer proyecto con React - Una aplicación web usando la PokéAPI.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple)

## 📖 Descripción

Esta es una Pokédex interactiva construida con React que permite a los usuarios explorar información detallada sobre diferentes Pokémon. Es mi primer proyecto usando React, donde apliqué conceptos fundamentales como componentes, hooks, routing y consumo de APIs.

### ✨ Características

- 📜 Lista de Pokémon con scroll infinito
- 🔍 Búsqueda en tiempo real con debounce
- 📱 Diseño responsive (móvil y desktop)
- 🎨 Vista detallada con estadísticas, habilidades y movimientos
- ⚡ Carga optimizada con lazy loading de imágenes
- 🎯 Navegación con React Router


### Página Principal
```
![Home](./docs/Home.gif)
```

### Search
```
![SearchBar](./docs/Search.gif)

```

### Vista de Detalle
```
![Detalle](./docs/Pokelist.gif)
```

## 🚀 Tecnologías Utilizadas

- **React 18.2** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Build tool y dev server ultrarrápido
- **React Router DOM** - Navegación entre páginas
- **PokéAPI** - API pública de Pokémon
- **CSS3** - Estilos con variables CSS y Grid/Flexbox

## 📂 Estructura del Proyecto

```
pokedex-app/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Loader/         # Spinner de carga
│   │   ├── Layout/         # Layout principal (header/footer)
│   │   ├── Search/      # Barra de búsqueda
│   │   ├── PokemonCard/    # Tarjeta individual de Pokémon
│   │   └── PokemonList/    # Grid de tarjetas
│   │
│   ├── pages/              # Páginas de la aplicación
│   │   ├── Home.jsx        # Página principal con lista
│   │   ├── PokemonDetails.jsx # Detalle de un Pokémon
│   │   └── NotFound.jsx    # Página 404
│   │
│   ├── hooks/              # Custom Hooks
│   │   ├── useFetch.js     # Hook para fetch de datos
│   │   └── useDebounce.js  # Hook para debounce
│   │
│   ├── services/           # Lógica de API
│   │   └── pokemonServices.js # Servicio de PokéAPI
│   │
│   ├── utils/              # Funciones auxiliares
│   │   └── helpers.js      # Helpers de formateo
│   │
│   ├── constants/          # Constantes y configuración
│   │   ├── config.js       # Configuración general
│   │   └── routes.js       # Rutas de la app
│   │
│   ├── styles/             # Estilos globales
│   │   ├── variables.css   # Variables CSS
│   │   └── global.css      # Estilos base
│   │
│   ├── App.jsx             # Componente principal
│   └── main.jsx            # Punto de entrada
│
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Instalación y Configuración

### Prerequisitos

- Node.js (v16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/pokedex-app.git
cd pokedex-app
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

### Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Crea el build de producción
npm run preview  # Preview del build de producción
npm run lint     # Ejecuta el linter
```

## 📚 Lo que Aprendí

Este proyecto me ayudó a entender y practicar:

### 1. **Fundamentos de React**
- ✅ Componentes funcionales
- ✅ Props y destructuring
- ✅ useState y useEffect
- ✅ Renderizado condicional
- ✅ Listas y keys

### 2. **Custom Hooks**
- ✅ Creación de hooks personalizados (`useFetch`, `useDebounce`)
- ✅ Reutilización de lógica entre componentes
- ✅ Manejo del ciclo de vida de componentes

### 3. **React Router**
- ✅ Navegación entre páginas
- ✅ Parámetros dinámicos en rutas
- ✅ Hook useNavigate y useParams

### 4. **Consumo de APIs**
- ✅ Fetch API
- ✅ Promises y async/await
- ✅ Manejo de estados de carga y error
- ✅ Transformación de datos

### 5. **Arquitectura y Buenas Prácticas**
- ✅ Separación de responsabilidades
- ✅ Componentes reutilizables
- ✅ Service layer para APIs
- ✅ CSS modular por componente
- ✅ Constantes y configuración centralizada

### 6. **Optimizaciones**
- ✅ Debounce en búsqueda
- ✅ Lazy loading de imágenes
- ✅ Cleanup de efectos
- ✅ Paginación infinita

## 🎯 Funcionalidades Detalladas

### Búsqueda en Tiempo Real
La búsqueda implementa debounce (300ms) para evitar múltiples llamadas a la API mientras el usuario escribe.

```javascript
const debouncedSearch = useDebounce(searchTerm, 300);
```

### Paginación Infinita
Carga 20 Pokémon a la vez con un botón "Cargar más" que actualiza el offset.

```javascript
const loadMore = () => {
  setOffset(prev => prev + APP_CONFIG.ITEMS_PER_PAGE);
};
```

### Custom Hook useFetch
Abstrae la lógica de fetch con estados de loading, error y data.

```javascript
const { data, loading, error } = useFetch(
  () => pokemonService.getPokemonDetail(id),
  [id]
);
```

## 🎨 Diseño

- **Colores**: Basados en la identidad visual de Pokémon
- **Tipografía**: Segoe UI (system font)
- **Layout**: CSS Grid y Flexbox para diseño responsive
- **Animaciones**: Transiciones suaves en hover y carga

## 🐛 Problemas Conocidos

- [ ] La búsqueda solo funciona con Pokémon ya cargados (no busca en toda la API)
- [ ] No hay caché de datos (cada visita recarga la información)
- [ ] Falta manejo de errores de red más robusto

## 🚀 Mejoras Futuras

- [ ] Implementar filtros por tipo de Pokémon
- [ ] Agregar sistema de favoritos con localStorage
- [ ] Añadir modo oscuro
- [ ] Implementar infinite scroll automático
- [ ] Agregar animaciones más avanzadas
- [ ] Crear comparador de Pokémon
- [ ] Añadir tests unitarios
- [ ] Implementar PWA (Progressive Web App)

## 📖 Recursos Utilizados

- [Documentación de React](https://react.dev/)
- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- [React Router Docs](https://reactrouter.com/)
- [Vite Guide](https://vitejs.dev/guide/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🤝 Contribuciones

Este es un proyecto de aprendizaje personal, pero si encuentras algún bug o tienes sugerencias:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

