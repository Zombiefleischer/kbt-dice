Hooks.on("init", () => { // for the font init
  CONFIG.fontDefinitions["🍺 Dancing Script"] = {
    editor: true,
    fonts: [
      { urls: ["modules/kbt-dice/fonts/DancingScript-VariableFont_wght.ttf"] }
    ]
  };
});

Hooks.on('diceSoNiceReady', (dice3d) => { // for the dices
  
  // Default Kellerbier-Tavernen Dice

  //dices

  dice3d.addSystem({ id: "KBT", name: "🍺 Kellerbier-Taverne" }, false);

    dice3d.addDicePreset({
    type: "d2",
    labels: [
      "modules/kbt-dice/graphics/faces/GoblinToasti.png",
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrabd2.png"
    ],
    system: "KBT"
  });

  dice3d.addDicePreset({
    type: "d4",
    labels: [
      "modules/kbt-dice/graphics/faces/GoblinRage.png",
      "2", "3",
      "modules/kbt-dice/graphics/faces/trigger.png"
    ],
    system: "KBT"
  });

  dice3d.addDicePreset({
    type: "d6",
    labels: [
      "modules/kbt-dice/graphics/faces/GobboWissi.png",
      "2", "3", "4", "5", 
      "modules/kbt-dice/graphics/faces/Wicked.png"
    ],
    system: "KBT"
  });


  dice3d.addDicePreset({
    type: "d8",
    labels: [
      "modules/kbt-dice/graphics/faces/GoblinToasti.png",
      "2", "3", "4", "5", "6", "7",
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrabd8.png"
    ],
    system: "KBT"
  });

  dice3d.addDicePreset({
    type: "d10",
    labels: [
      "modules/kbt-dice/graphics/faces/GoblinToasti.png",
      "2", "3", "4", "5", "6", "7", "8", "9",
      "modules/kbt-dice/graphics/faces/trigger.png"
    ],
    system: "KBT"
  });

  dice3d.addDicePreset({
    type: "d12",
    labels: [
      "modules/kbt-dice/graphics/faces/GoblinToasti.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", 
      "modules/kbt-dice/graphics/faces/trigger.png"
    ],
    system: "KBT"
  });

  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/kbt-dice/graphics/faces/hidethepainbearold.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
      "modules/kbt-dice/graphics/faces/wondertoni.png"
    ],
    system: "KBT"
  });

  dice3d.addDicePreset({
    type: "d100",
    labels: [
      "10", "20", "30", "40", "50", "60", "70", "80",
      "modules/kbt-dice/graphics/faces/mug_20.png",
      "modules/kbt-dice/graphics/faces/beer_20.png"
    ],
    system: "KBT"
  }, "d10");

  dice3d.addDicePreset({
    type: "df",
    labels: [
      "modules/kbt-dice/graphics/faces/mug.png",
      "",
      "modules/kbt-dice/graphics/faces/beer.png"
    ],
    system: "KBT"
  });

  //themes

//theme cat
  dice3d.addTexture("KBT-cat", {
    name: "🍺 KBT cat",
    composite: "source-over",
    source: "modules/kbt-dice/graphics/textures/catpattern.png"
  });

  dice3d.addColorset({
    name: "KBT",
    description: "🍺 Kellerbier-Taverne-Cat",
    category: "Kellerbier-Taverne",
    foreground: "#000000",
    background: "#000000",
    outline: "#000000",
    edge: "#000000",
    texture: "catpattern",
    material: "cat",
    font: "🍺 Dancing Script",
    fontScale: {
      "df": 1.5
    },
    visibility: "visible"
  }, "preferred");

  //theme psychedelic

  dice3d.addTexture("KBT", {
    name: "🍺 KBT-goa",
    composite: "source-over",
    source: "modules/kbt-dice/graphics/textures/psychedelic.png"
  });

  dice3d.addColorset({
    name: "KBT",
    description: "🍺 Kellerbier-Taverne",
    category: "Kellerbier-Taverne",
    foreground: "#000000",
    background: "#000000",
    outline: "#000000",
    edge: "#000000",
    texture: "goa",
    material: "wood",
    font: "🍺 Dancing Script",
    fontScale: {
      "df": 1.5
    },
    visibility: "visible"
  }, "preferred");

  // kbt- vanilla theme

  dice3d.addSystem({ id: "KBT-vanilla", name: "🍺 Kellerbier-Taverne-Bar" }, false);

// dices

dice3d.addDicePreset({
  type: "d2",
  labels: [
    "modules/kbt-dice/graphics/faces/mug.png",
    "modules/kbt-dice/graphics/faces/toni.png"
  ],
  font: "🍺 Dancing Script",
  system: "KBT-vanilla"
});

dice3d.addDicePreset({
  type: "d4",
  labels: [
    "modules/kbt-dice/graphics/faces/mug_d4.png",
    "2", "3",
    "modules/kbt-dice/graphics/faces/beer_d4.png"
  ],
  font: "🍺 Dancing Script",
  system: "KBT-vanilla"
});

dice3d.addDicePreset({
  type: "d6",
  labels: [
    "modules/kbt-dice/graphics/faces/mug.png",
    "2", "3", "4", "5",
    "modules/kbt-dice/graphics/faces/beer.png"
  ],
  font: "🍺 Dancing Script",
  system: "KBT-vanilla"
});

dice3d.addDicePreset({
  type: "d8",
  labels: [
    "modules/kbt-dice/graphics/faces/mug_d8.png",
    "2", "3", "4", "5", "6", "7",
    "modules/kbt-dice/graphics/faces/beer_d8.png"
  ],
  font: "🍺 Dancing Script",
  system: "KBT-vanilla"
});

dice3d.addDicePreset({
  type: "d10",
  labels: [
    "modules/kbt-dice/graphics/faces/mug_20.png",
    "2", "3", "4", "5", "6", "7", "8", "9",
    "modules/kbt-dice/graphics/faces/beer_20.png"
  ],
  font: "🍺 Dancing Script",
  system: "KBT-vanilla"
});

dice3d.addDicePreset({
  type: "d12",
  labels: [
    "modules/kbt-dice/graphics/faces/mug.png",
    "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
    "modules/kbt-dice/graphics/faces/beer.png"
  ],
  font: "🍺 Dancing Script",
  system: "KBT-vanilla"
});

  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/kbt-dice/graphics/faces/mug_20.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
      "modules/kbt-dice/graphics/faces/beer_20.png"
    ],
    font: "🍺 Dancing Script",
    system: "KBT-vanilla"
  });

  dice3d.addDicePreset({
    type: "d100",
    labels: [
      "10", "20", "30", "40", "50", "60", "70", "80",
      "modules/kbt-dice/graphics/faces/mug_20.png",
      "modules/kbt-dice/graphics/faces/beer_20.png"
    ],
    font: "🍺 Dancing Script",
    system: "KBT-vanilla"
  }, "d10");

  dice3d.addDicePreset({
    type: "df",
    labels: [
      "modules/kbt-dice/graphics/faces/mug.png",
      "",
      "modules/kbt-dice/graphics/faces/beer.png"
    ],
    font: "🍺 Dancing Script",
    system: "KBT-vanilla"
  });

  //theme 

  dice3d.addTexture("KBT-wood", {
    name: "🍺 KBT Wooden Bar",
    composite: "source-over",
    source: "modules/kbt-dice/graphics/textures/wood-bar.png"
  });

  dice3d.addColorset({
    name: "kbt-vanilla",
    description: "🍺 Kellerbier-Taverne-Bar",
    category: "Kellerbier-Taverne",
    foreground: "#000000",
    background: "#96642C",
    outline: "#ffffff",
    edge: "#96642C",
    texture: "KBT-wood",
    material: "wood",
    font: "🍺 Dancing Script",
    fontScale: {
      "df": 1.5
    },
    visibility: "visible"
  }, "preferred");
});