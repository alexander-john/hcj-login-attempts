document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('loginAttemptsChart').getContext('2d');

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    gradient.addColorStop(0, 'rgba(0, 0, 255, 0.5)'); // Start color (blue)
    gradient.addColorStop(1, 'rgba(0, 0, 255, 0)'); // End color (transparent)

    const loginAttemptsData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Login Attempts',
            data: [10, 15, 12, 8, 20, 5, 17], // Example data, replace with actual data
            backgroundColor: gradient,
            borderColor: 'rgba(0, 0, 255, 1)', // Line color (blue)
            borderWidth: 1,
            fill: true // Enable filling
        }]
    };

    const config = {
        type: 'line',
        data: loginAttemptsData,
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Days of the Week'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of Login Attempts'
                    },
                    beginAtZero: true
                }
            }
        }
    };

    new Chart(ctx, config);
});
