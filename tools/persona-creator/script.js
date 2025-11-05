const names = ["Alex", "Jordan", "Taylor", "Morgan", "Riley", "Casey", "Jamie", "Robin", "Drew", "Skyler"];

const toneProfiles = {
  professional: "Strategic, focused, and results-oriented. Values efficiency and clarity.",
  creative: "Innovative, imaginative, and expressive. Loves exploring new ideas and formats.",
  friendly: "Warm, empathetic, and approachable. Communicates with a personal touch.",
  analytical: "Logical, detail-oriented, and precise. Makes decisions based on data and reasoning."
};

function generatePersona() {
  const role = document.getElementById("role").value.trim() || "Professional";
  const goal = document.getElementById("goal").value.trim() || "Achieve success";
  const challenge = document.getElementById("challenge").value.trim() || "Limited resources";
  const tone = document.getElementById("tone").value;

  const name = names[Math.floor(Math.random() * names.length)] + " " + randomLastName();
  const personality = toneProfiles[tone];

  const summary = `${name} is a ${role} who is ${personality.toLowerCase()}. Their main goal is to ${goal.toLowerCase()}, but they often face challenges like ${challenge.toLowerCase()}. They approach problems with a ${tone} mindset and adapt strategies to stay effective.`;

  // Avatar via DiceBear
  document.getElementById("avatar").src = `https://api.dicebear.com/8.x/adventurer/svg?seed=${name.split(" ")[0]}`;
  
  document.getElementById("personaName").textContent = name;
  document.getElementById("personaRole").textContent = role;
  document.getElementById("personaPersonality").textContent = personality;
  document.getElementById("personaGoal").textContent = goal;
  document.getElementById("personaChallenge").textContent = challenge;
  document.getElementById("personaSummary").textContent = summary;

  document.getElementById("personaCard").classList.remove("hidden");
}

function copyPersona() {
  const card = document.getElementById("personaCard");
  const text = card.innerText;
  navigator.clipboard.writeText(text);
  alert("Persona copied to clipboard!");
}

function randomLastName() {
  const lastNames = ["Carter", "Brooks", "Lee", "Morgan", "Shaw", "Parker", "Evans", "Lopez", "Patel", "Nguyen"];
  return lastNames[Math.floor(Math.random() * lastNames.length)];
}
