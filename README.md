# Sistema de Gestión Integral – Centro Nacional de Educación Hellen Keller

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de una aplicación web para la gestión académica y administrativa del **Centro Nacional de Educación Hellen Keller**.

El sistema busca centralizar y organizar los procesos educativos especializados, permitiendo una administración eficiente de programas educativos, usuarios y el seguimiento del progreso académico de los estudiantes mediante **Planes Educativos Individualizados (PEI)**.

La plataforma está diseñada para mejorar la trazabilidad de la información académica, facilitar la comunicación entre docentes, terapeutas y encargados legales, y brindar acceso seguro a la información institucional.

---

## Objetivos del Sistema

- Centralizar la gestión académica y administrativa.
- Facilitar el seguimiento del progreso educativo de los estudiantes.
- Mejorar la comunicación entre docentes, terapeutas y encargados legales.
- Garantizar accesibilidad y facilidad de uso para los diferentes tipos de usuarios.

---

## Tipos de Usuarios

El sistema contempla diferentes roles con permisos específicos:

### Administrador
- Gestión de usuarios.
- Gestión de programas educativos y terapias.
- Visualización de métricas institucionales.
- Generación de reportes.

### Docente / Terapeuta
- Visualización de grupos asignados.
- Gestión de Planes Educativos Individualizados (PEI).
- Registro de progreso académico y observaciones.

### Encargado Legal
- Consulta de avances académicos del estudiante.
- Visualización de reportes y alertas.
- Acceso a información relevante del PEI.

---

## Funcionalidades del Sistema

### Funcionalidades Generales
- Inicio de sesión seguro.
- Recuperación de contraseña con verificación audible.
- Gestión de sesiones por tipo de usuario.

### Administrador
- Dashboard con métricas institucionales.
- Gestión de programas educativos.
- Gestión de usuarios.

### Docente / Terapeuta
- Dashboard con información de grupos asignados.
- Registro de progreso académico.
- Gestión de PEI.

### Encargado Legal
- Dashboard con alertas importantes.
- Consulta del PEI del estudiante.
- Visualización de reportes de progreso.

---

## Funcionalidades del Sistema Implementadas


1.  **Autenticación y Redirección:** Sistema de login funcional que valida credenciales y redirige al Dashboard administrativo.
2.  **Dashboard con Analítica:** Visualización de métricas institucionales mediante gráficos interactivos desarrollados con la librería **Chart.js**.
3.  **Filtro de Búsqueda Universal:** Algoritmo que permite filtrar en tiempo real tablas de programas, usuarios y listas de estudiantes en el PEI.
4.  **CRUD Simulado (Crear):** Funcionalidad para registrar nuevas terapias o programas, insertando elementos dinámicamente en el DOM mediante `createElement`.
5.  **CRUD Simulado (Editar y Eliminar):** Sistema de gestión de registros que permite modificar nombres o eliminar filas de las tablas mediante delegación de eventos.
6.  **Sincronización Dinámica de Datos (PEI):** Al seleccionar un estudiante de la lista, el sistema actualiza automáticamente el documento PEI con la información correspondiente.
7.  **Validación de Formularios:** Control de errores en el registro de progreso y login, asegurando que los campos obligatorios se completen correctamente.
8.  **Accesibilidad (Zoom):** Herramienta integrada para ajustar la escala visual de la interfaz, facilitando la lectura para personas con baja visión.
9.  **Sistema de Notificaciones:** Feedback visual mediante alertas dinámicas (Toasts) que notifican al usuario sobre el estado del sistema.


---

## Wireframes del Sistema

Los wireframes del sistema se encuentran disponibles en la carpeta:
/src

Incluyen las siguientes pantallas:

- Inicio de sesión
- Dashboard Administrador
- Gestión de Programas
- Gestión de Usuarios
- Dashboard Docente/Terapeuta
- Consulta de progreso

---

## Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Chart.js**
- **Boxicons**

---

## Integrantes del Equipo

- **Johanna Benítez Blandón** – Diseñadora UX/UI  
- **Larry Díaz Martínez** – Desarrollador Frontend  

---

## Repositorio del Proyecto

Repositorio oficial del proyecto:
https://github.com/Ldmp01/comuniapp

---

## Estado del Proyecto

Proyecto en desarrollo como parte del curso de **Diseño y Programación web**.
---
**Curso:** Diseño y programación Web  
**Institución:** Universidad CENFOTEC  
**Fecha:** 22 de abril de 2026
