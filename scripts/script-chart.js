// Fonction pour créer les options du graphique
function createChartOptions(isMobile) {
    return {
        responsive: true,
        plugins: {
            legend: {
                position: isMobile ? 'bottom' : 'right',
                align:  isMobile ? 'start' : 'center',
                labels: {
                    boxWidth: isMobile ? 10 : 20,
                    font: {
                        size: isMobile ? 10 : 12
                    }
                }
            }
        }
    };
}

// Fonction pour vérifier si l'écran est en mode mobile
function isMobileScreen() {
    return window.innerWidth <= 768;
}

// Fonction pour créer ou mettre à jour un graphique
function createOrUpdateChart(ctx, data, chartInstance) {
    const isMobile = isMobileScreen();
    const options = createChartOptions(isMobile);

    if (chartInstance) {
        chartInstance.data = data;
        chartInstance.options = options;
        chartInstance.update();
    } else {
        return new Chart(ctx, {
            type: isMobile ? "bar" : "doughnut",
            data: data,
            options: options
        });
    }
}

// Initialisation des graphiques
let pizzaChart, restoChart, vrChart;

// BS Pizza
let pizzaData = {
    labels: ["HTML", "CSS", "JavaScript"],
    datasets: [{
        label: "Technos utilisées (en %, source Github)",
        data: [66.1, 30.7, 3.2],
        backgroundColor: [
            "rgba(240, 102, 39, 1)",
            "rgba(0, 76, 232, 1)",
            "rgba(255, 222, 37, 1)"
        ]
    }]
}

// L'Art Culinaire
let restoData = {
    labels: ["HTML", "CSS", "JavaScript"],
    datasets: [{
        label: "Technos utilisées (en %, source Github)",
        data: [52.1, 37, 10.9],
        backgroundColor: [
            "rgba(240, 102, 39, 1)",
            "rgba(0, 76, 232, 1)",
            "rgba(255, 222, 37, 1)"
        ]
    }]
}

// VirtualX
let vrData = {
    labels: ["HTML", "CSS", "JavaScript"],
    datasets: [{
        label: "Technos utilisées (en %, source Github)",
        data: [51, 23, 26],
        backgroundColor: [
            "rgba(240, 102, 39, 1)",
            "rgba(0, 76, 232, 1)",
            "rgba(255, 222, 37, 1)"
        ]
    }]
}

function initCharts() {
    const ctx1 = document.getElementById("pizzaChart").getContext("2d");
    const ctx2 = document.getElementById("restoChart").getContext("2d");
    const ctx3 = document.getElementById("vrChart").getContext("2d");

    pizzaChart = createOrUpdateChart(ctx1, pizzaData, pizzaChart);
    restoChart = createOrUpdateChart(ctx2, restoData, restoChart);
    vrChart = createOrUpdateChart(ctx3, vrData, vrChart);
}

// Mettre à jour les graphiques lors du redimensionnement de la fenêtre
window.addEventListener('resize', initCharts);

// Initialiser les graphiques au chargement de la page
document.addEventListener('DOMContentLoaded', initCharts);