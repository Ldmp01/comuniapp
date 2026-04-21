document.addEventListener('DOMContentLoaded', () => {
    
    // Redirección del login
    const formLogin = document.getElementById('formLogin');
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = "dashboard-admin.html";
        });
    }

    // Gráfico de progreso
    const ctx = document.getElementById('chart');
    if (ctx) {
        const canvasCtx = ctx.getContext('2d');

        const degradadoAzul = canvasCtx.createLinearGradient(0, 0, 0, 350);
        degradadoAzul.addColorStop(0, 'rgba(142, 197, 252, 0.5)'); 
        degradadoAzul.addColorStop(1, 'rgba(142, 197, 252, 0)'); 

        const degradadoMorado = canvasCtx.createLinearGradient(0, 0, 0, 350);
        degradadoMorado.addColorStop(0, 'rgba(112, 29, 255, 0.2)'); 
        degradadoMorado.addColorStop(1, 'rgba(112, 29, 255, 0.01)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr'],
                datasets: [
                    {
                        label: 'Estudiantes',
                        data: [110, 115, 118, 125],
                        borderColor: '#8ec5fc',
                        backgroundColor: degradadoAzul,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0,
                        borderWidth: 3
                    },
                    {
                        label: 'Programas',
                        data: [35, 40, 36, 48],
                        borderColor: '#4318ff',
                        backgroundColor: degradadoMorado,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0,
                        borderWidth: 3
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false }, ticks: { color: '#a3aed0' } },
                    y: { 
                        beginAtZero: true, 
                        max: 140, 
                        ticks: { stepSize: 35, color: '#a3aed0' },
                        grid: { color: '#f4f7fe' }
                    }
                }
            }
        });
    }

    // Validación de formularios
    const formularios = document.querySelectorAll('form');
    formularios.forEach(form => {
        form.addEventListener('submit', (e) => {
            const inputs = form.querySelectorAll('input[required], textarea, select');
            let valido = true;

            inputs.forEach(input => {
                if (!input.value.trim() || input.value === "Seleccione el nivel") {
                    valido = false;
                    input.style.border = "2px solid #ee5d50";
                } else {
                    input.style.border = "1px solid #e0e5f2";
                }
            });

            if (!valido) {
                e.preventDefault();
                alert("Por favor, complete todos los campos obligatorios.");
            } else if (!form.id.includes('formLogin')) {
                alert("Registro guardado con éxito.");
            }
        });
    });

    // Accesibilidad: Zoom
    const btnZoom = document.querySelector('.btn-zoom');
    if (btnZoom) {
        btnZoom.addEventListener('click', () => {
            const zoomActual = document.body.style.zoom || "100%";
            document.body.style.zoom = (zoomActual === "100%") ? "110%" : "100%";
            
            btnZoom.style.backgroundColor = (document.body.style.zoom === "110%") ? "#701dff" : "#e4f400";
            btnZoom.style.color = (document.body.style.zoom === "110%") ? "#ffffff" : "#000000";
        });
    }

    // Sistema de notificaciones
    const iconoCampana = document.querySelector('.notification-icon');
    if (iconoCampana) {
        iconoCampana.addEventListener('click', () => {
            const aviso = document.createElement('div');
            aviso.innerHTML = "<strong>Sistema:</strong> No hay alertas pendientes.";
            
            Object.assign(aviso.style, {
                position: 'fixed', top: '20px', right: '20px',
                backgroundColor: '#1b134d', color: 'white',
                padding: '15px 25px', borderRadius: '12px',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)', zIndex: '9999'
            });

            document.body.appendChild(aviso);

            setTimeout(() => aviso.remove(), 3000);
        });
    }

    // Exportar datos
    const btnExportar = document.querySelector('.btn-reports, .btn-action-outline:last-child');
    if (btnExportar) {
        btnExportar.addEventListener('click', () => {
            btnExportar.innerText = "Preparando archivo...";
            btnExportar.disabled = true;

            setTimeout(() => {
                alert("El reporte ha sido generado y enviado a su bandeja de descargas.");
                btnExportar.innerText = "Descargar Reportes";
                btnExportar.disabled = false;
            }, 1500);
        });
    }


    // Filtro de búsqueda
    const inputTaller = document.querySelector('.search-box-wrapper input');

    if (inputTaller) {
        inputTaller.addEventListener('input', (e) => {
            const busqueda = e.target.value.toLowerCase().trim();
            const filas = document.querySelectorAll('.data-table-programs tbody tr');

            filas.forEach(fila => {
                const textoFila = fila.innerText.toLowerCase();
                
                if (textoFila.includes(busqueda)) {
                    fila.style.display = "";
                } else {
                    fila.style.display = "none";
                }
            });
        });
    }


    // ==========================================
    // CRUD simulado
    // ==========================================
    const btnCrear = document.querySelector('.btn-agenda, .btn-dark-navy'); 
    const tablaCuerpo = document.querySelector('.data-table-programs tbody, .users-table tbody');

    if (btnCrear && tablaCuerpo) {
        btnCrear.addEventListener('click', () => {
            const nombre = prompt("Ingrese el nombre del nuevo registro:");
            if (!nombre) return;

            const nuevaFila = document.createElement('tr');
            nuevaFila.innerHTML = `
                <td class="program-name-cell">
                    <div class="program-icon"><i class='bx bx-plus'></i></div>
                    <div><strong>${nombre}</strong><br><small>ID: PRG-NUEVO</small></div>
                </td>
                <td>Especialidad por asignar</td>
                <td><div class="user-cell"><i class='bx bx-user-circle'></i> Usuario</div></td>
                <td><span class="status-pill active-pill">Nuevo</span></td>
                <td>
                    <button class="btn-edit-sim" style="color:#701dff; border:none; background:none; cursor:pointer; font-weight:800;">EDITAR</button>
                    <button class="btn-delete-sim" style="color:red; border:none; background:none; cursor:pointer; font-weight:800; margin-left:10px;">BORRAR</button>
                </td>
            `;
            tablaCuerpo.prepend(nuevaFila);
        });

        tablaCuerpo.addEventListener('click', (e) => {
            const fila = e.target.closest('tr');
            if (!fila) return;

            if (e.target.classList.contains('btn-delete-sim')) {
                if (confirm("¿Seguro que quieres eliminar este registro?")) {
                    fila.remove();
                }
            }

            if (e.target.classList.contains('btn-edit-sim')) {
                const actual = fila.querySelector('strong').innerText;
                const nuevo = prompt("Editar nombre:", actual);
                if (nuevo) {
                    fila.querySelector('strong').innerText = nuevo;
                }
            }
        });
    }



});
