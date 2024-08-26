// Fonction pour créer les options du graphique
function createChartOptions(isMobile) {
    return {
        responsive: true,
        plugins: {
            legend: {
                position: isMobile ? 'bottom' : 'right',
                align: isMobile ? 'start' : 'center',
                display: false,
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
function createOrUpdateChart(ctx, data, chartInstance, chartType) {
    const isMobile = isMobileScreen();
    const options = createChartOptions(isMobile);

    if (chartInstance) {
        chartInstance.data = data;
        chartInstance.options = options;
        chartInstance.config.type = chartType;
        chartInstance.update();
    } else {
        return new Chart(ctx, {
            type: chartType, // Utilise le type de graphique passé en paramètre
            data: data,
            options: options
        });
    }
}

// Fonction pour déterminer le type de graphique en fonction de la taille de l'écran
function getChartType() {
    return isMobileScreen() ? 'bar' : 'doughnut';
}

// Fonction pour changer tous les graphiques en type "bar"
function changeAllChartsToBar() {
    changeChartType(pizzaChart, 'bar');
    changeChartType(restoChart, 'bar');
    changeChartType(vrChart, 'bar');
}

// Fonction pour rétablir le type de graphique original
function revertAllChartsToOriginal() {
    changeChartType(pizzaChart, getChartType());
    changeChartType(restoChart, getChartType());
    changeChartType(vrChart, getChartType());
}

// Fonction pour changer le type d'un graphique
function changeChartType(chart, newType) {
    chart.config.type = newType;
    chart.update();
}

// Gérer les événements avant et après l'impression
function setupPrintListeners() {
    window.addEventListener('beforeprint', changeAllChartsToBar);
    window.addEventListener('afterprint', revertAllChartsToOriginal);
}

// Initialisation des graphiques
let pizzaChart, restoChart, vrChart;

// Données des graphiques
const pizzaData = {
    labels: ["HTML", "CSS", "JavaScript"],
    datasets: [{
        data: [66.1, 30.7, 3.2],
        backgroundColor: [
            "rgba(240, 102, 39, 1)",
            "rgba(0, 76, 232, 1)",
            "rgba(255, 222, 37, 1)"
        ]
    }]
};

const restoData = {
    labels: ["HTML", "CSS", "JavaScript"],
    datasets: [{
        data: [52.1, 37, 10.9],
        backgroundColor: [
            "rgba(240, 102, 39, 1)",
            "rgba(0, 76, 232, 1)",
            "rgba(255, 222, 37, 1)"
        ]
    }]
};

const vrData = {
    labels: ["HTML", "CSS", "JavaScript"],
    datasets: [{
        data: [51, 23, 26],
        backgroundColor: [
            "rgba(240, 102, 39, 1)",
            "rgba(0, 76, 232, 1)",
            "rgba(255, 222, 37, 1)"
        ]
    }]
};

function initCharts() {
    const ctx1 = document.getElementById("pizzaChart").getContext("2d");
    const ctx2 = document.getElementById("restoChart").getContext("2d");
    const ctx3 = document.getElementById("vrChart").getContext("2d");

    pizzaChart = createOrUpdateChart(ctx1, pizzaData, pizzaChart, getChartType());
    restoChart = createOrUpdateChart(ctx2, restoData, restoChart, getChartType());
    vrChart = createOrUpdateChart(ctx3, vrData, vrChart, getChartType());
}

// Mettre à jour les graphiques lors du redimensionnement de la fenêtre
window.addEventListener('resize', initCharts);

// Initialiser les graphiques et configurer les écouteurs d'impression au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    setupPrintListeners();
});