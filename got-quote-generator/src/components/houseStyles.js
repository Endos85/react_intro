// Hausfarben und lesbare Textfarben
const houseStyles = {
  Stark: { backgroundColor: "#555", color: "#fff" },
  Lannister: { backgroundColor: "#A41E22", color: "#FFD700" },
  Targaryen: { backgroundColor: "#000", color: "#E60026" },
  Baratheon: { backgroundColor: "#FFD700", color: "#000" },
  Greyjoy: { backgroundColor: "#2F4F4F", color: "#FFD700" },
  Martell: { backgroundColor: "#FF7518", color: "#000" },
  Tyrell: { backgroundColor: "#228B22", color: "#fff" },
  Arryn: { backgroundColor: "#1E90FF", color: "#fff" },
  Tully: { backgroundColor: "#003366", color: "#FF3333" },
  Clegane: { backgroundColor: "#333", color: "#FFD700" },
  Tarly: { backgroundColor: "#556B2F", color: "#fff" },
  Asshai: { backgroundColor: "#4B0082", color: "#FFD700" },
  "Faceless Men": { backgroundColor: "#444", color: "#fff" },
  None: { backgroundColor: "#222", color: "#fff" }
};

export function getHouseStyle(house) {
  return houseStyles[house] || { backgroundColor: "#f8f8f8", color: "#000" };
}
