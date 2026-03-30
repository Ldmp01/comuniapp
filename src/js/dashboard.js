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
});
