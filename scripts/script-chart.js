// BS Pizza
let ctx1 = document.getElementById("pizzaChart").getContext("2d");

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

let pizzaChart = new Chart(ctx1, {
    type: "doughnut",
    data: pizzaData,
    options: {
        responsive: true,
    }
})

// L'Art Culinaire
let ctx2 = document.getElementById("restoChart").getContext("2d");

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

let restoChart = new Chart(ctx2, {
    type: "doughnut",
    data: restoData,
    options: {
        responsive: true,
    }
})

// VirtualX
let ctx3 = document.getElementById("vrChart").getContext("2d");

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

let vrChart = new Chart(ctx3, {
    type: "doughnut",
    data: vrData,
    options: {
        responsive: true,
    }
})