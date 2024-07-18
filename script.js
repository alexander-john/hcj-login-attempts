document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('loginAttemptsChart').getContext('2d');

    // Generate labels for each month
    const labels = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Generate an upward trend for monthly login attempts with some dips
    const monthlyData = [];
    let baseValue = 100;
    for (let i = 0; i < 12; i++) {
        let monthlyValue;
        if (i === 4 || i === 9) { // Introduce dips in May and October
            monthlyValue = baseValue - Math.floor(Math.random() * 30); // Dip value
        } else {
            monthlyValue = baseValue + Math.floor(Math.random() * 20); // Normal upward trend with some randomness
        }
        monthlyData.push(monthlyValue);
        baseValue += 10; // Increase the base value for next month
    }

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    gradient.addColorStop(0, 'rgba(0, 0, 255, 0.5)'); // Start color (blue)
    gradient.addColorStop(1, 'rgba(0, 0, 255, 0)'); // End color (transparent)

    const loginAttemptsData = {
        labels: labels,
        datasets: [{
            label: 'Login Attempts',
            data: monthlyData,
            backgroundColor: gradient,
            borderColor: 'rgba(0, 0, 255, 1)', // Line color (blue)
            borderWidth: 1,
            fill: true, // Enable filling
            pointRadius: 0, // Remove points
            pointHoverRadius: 0 // Remove hover effect on points
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
                        text: 'Month'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of Login Attempts'
                    },
                    beginAtZero: true,
                    max: Math.max(...monthlyData) * 1.2 // Set maximum value for y-axis with a bit more padding
                }
            }
        }
    };

    new Chart(ctx, config);
});
