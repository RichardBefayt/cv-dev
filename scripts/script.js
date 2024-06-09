let resumeButton = document.getElementById('resume-btn');
let areaCV = document.getElementById('area-cv');

let opt = {
    margin: 0,
    filename: "CV_Richard_Befayt.pdf",
    image: { type: "jpg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { format: "a4", orientation: "portrait" }
}

function generateResume() {
    html2pdf(areaCV, opt);
}

resumeButton.addEventListener('click', () => {
    generateResume();
})