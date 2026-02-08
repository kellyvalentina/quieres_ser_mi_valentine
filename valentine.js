const frames = document.querySelectorAll(".frame");
let current = 0;

function showFrame(index) {
  frames.forEach(f => f.classList.remove("active"));
  frames[index].classList.add("active");
}

/* Abrir sobre */
const envelope = document.getElementById("openEnvelope");

envelope.onclick = () => {
  envelope.classList.add("open");
  setTimeout(() => {
    current = 1;
    showFrame(current);
  }, 700);
};

/* Siguientes */
document.querySelectorAll(".next").forEach(btn => {
  btn.onclick = () => {
    current++;
    showFrame(current);
  };
});

/* si */
document.querySelectorAll(".yes").forEach(btn => {
  btn.onclick = () => {
    current = 5;
    showFrame(current);
  };
});

/* Corazones */
const bg = document.querySelector(".hearts-bg");

for (let i = 0; i < 16; i++) {
  const heart = document.createElement("span");
  heart.innerText = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 12 + Math.random() * 14 + "px";
  heart.style.animationDuration = 6 + Math.random() * 6 + "s";
  bg.appendChild(heart);
}
document.getElementById("downloadLetter").onclick = () => {
  const text = document.getElementById("responseText").value.trim();

  if (!text) {
    alert("Escribe algo antes 💗");
    return;
  }

  // Pasamos el texto al div imprimible
  const finalLetter = document.getElementById("finalLetter");
  finalLetter.textContent = text;

  const element = document.getElementById("letterContent");

  const opt = {
    margin: 0.8,
    filename: "mi_carta.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      ignoreElements: el => el.classList.contains("no-pdf")
    },
    jsPDF: {
      unit: "in",
      format: "letter",
      orientation: "portrait"
    }
  };

  html2pdf().set(opt).from(element).save();
};
