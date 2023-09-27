// Pilihan komputer
const pilihanKomputer = ["gunting", "batu", "kertas"];

document.querySelectorAll(".choice").forEach((item) => {
  item.addEventListener("click", () => {
    const pilihanPemain = item.id;
    const pilihanKomputer = pilihanKomputer[Math.floor(Math.random() * 3)];

    const hasil = periksaHasil(pilihanPemain, pilihanKomputer);

    tampilkanHasil(pilihanPemain, pilihanKomputer, hasil);
  });
});

function periksaHasil(pilihanPemain, pilihanKomputer) {
  if (pilihanPemain === pilihanKomputer) {
    return "SERI!";
  } else if (
    (pilihanPemain === "gunting" && pilihanKomputer === "kertas") ||
    (pilihanPemain === "batu" && pilihanKomputer === "gunting") ||
    (pilihanPemain === "kertas" && pilihanKomputer === "batu")
  ) {
    return "Anda MENANG!";
  } else {
    return "Komputer MENANG!";
  }
}

function tampilkanHasil(pilihanPemain, pilihanKomputer, hasil) {
  const hasilPermainan = document.getElementById("hasil-permainan");
  hasilPermainan.innerHTML = `Anda memilih <strong>${pilihanPemain}</strong>, komputer memilih <strong>${pilihanKomputer}</strong>. Hasil: <strong>${hasil}</strong>`;
}
