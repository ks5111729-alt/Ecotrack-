const ecoRules = [
  {
    keywords: ["plastic", "polythene", "bottle", "wrapper", "plastic waste"],
    category: "Plastic Waste",
    recommendation: "Reduce single-use plastic and choose reusable alternatives. Separate recyclable plastic from other waste.",
    actions: [
      "Use a reusable bottle or bag.",
      "Separate recyclable plastic from wet waste.",
      "Avoid unnecessary single-use plastic."
    ]
  },
  {
    keywords: ["water", "leak", "tap", "river", "water waste", "save water"],
    category: "Water Conservation",
    recommendation: "Reduce unnecessary water use and report or repair leaks as soon as possible.",
    actions: [
      "Close taps when water is not needed.",
      "Check for leaking taps or pipes.",
      "Reuse suitable household water where practical."
    ]
  },
  {
    keywords: ["air", "smoke", "pollution", "vehicle", "dust", "burning"],
    category: "Air Pollution",
    recommendation: "Reduce avoidable emissions and avoid burning waste. Prefer cleaner transport options where practical.",
    actions: [
      "Do not burn plastic or household waste.",
      "Use public transport, walking or cycling when practical.",
      "Keep vehicle emissions under control."
    ]
  },
  {
    keywords: ["food", "organic", "kitchen waste", "compost"],
    category: "Food / Organic Waste",
    recommendation: "Reduce food waste and separate organic waste for composting where possible.",
    actions: [
      "Plan meals to reduce food waste.",
      "Separate organic waste.",
      "Try composting suitable kitchen waste."
    ]
  },
  {
    keywords: ["tree", "forest", "green", "deforestation", "plant"],
    category: "Green Cover",
    recommendation: "Protect existing green spaces and support suitable tree-planting activities.",
    actions: [
      "Protect existing trees.",
      "Plant suitable native species where appropriate.",
      "Avoid unnecessary damage to green spaces."
    ]
  },
  {
    keywords: ["electricity", "energy", "power", "light", "fan", "solar"],
    category: "Energy Conservation",
    recommendation: "Reduce unnecessary electricity use and consider efficient appliances or renewable energy where practical.",
    actions: [
      "Switch off unused lights and devices.",
      "Use energy-efficient appliances.",
      "Consider renewable energy options when feasible."
    ]
  }
];

function analyzeProblem() {
  const input = document.getElementById("problem").value.trim().toLowerCase();
  const error = document.getElementById("error");

  if (!input) {
    error.textContent = "Please describe an environmental problem first.";
    return;
  }

  error.textContent = "";

  let best = null;
  let bestScore = 0;

  ecoRules.forEach(rule => {
    let score = 0;
    rule.keywords.forEach(keyword => {
      if (input.includes(keyword)) score++;
    });

    if (score > bestScore) {
      bestScore = score;
      best = rule;
    }
  });

  if (!best) {
    best = {
      category: "General Environmental Issue",
      recommendation: "Try reducing waste, saving water and energy, and choosing reusable and environmentally responsible alternatives.",
      actions: [
        "Reduce unnecessary consumption.",
        "Reuse items where possible.",
        "Separate waste responsibly.",
        "Choose an eco-friendly alternative."
      ]
    };
  }

  document.getElementById("category").textContent = best.category;
  document.getElementById("recommendation").textContent = best.recommendation;

  const actions = document.getElementById("actions");
  actions.innerHTML = "";
  best.actions.forEach(action => {
    const li = document.createElement("li");
    li.textContent = action;
    actions.appendChild(li);
  });

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("result").scrollIntoView({ behavior: "smooth" });
}
