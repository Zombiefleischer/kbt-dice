Hooks.on("init", () => { // for the font init
  CONFIG.fontDefinitions["🍺 Dancing Script"] = {
    editor: true,
    fonts: [
      { urls: ["modules/kbt-dice/fonts/DancingScript-VariableFont_wght.ttf"] }
    ]
  };
});

Hooks.on('diceSoNiceReady', (dice3d) => { // for the dices

  // Kellerbier-Tavernen Dice with a mug
  dice3d.addSystem({ id: "KBT-mug", name: "🍺 Kellerbier-Taverne Bierkrug" }, false);

  dice3d.addTexture("KBT-wood-texture", {
    name: "🍺 KBT Holzbar",
    composite: "source-over",
    source: "modules/kbt-dice/graphics/textures/wood-bar.png"
  });

  dice3d.addTexture("KBT-cat-texture", {
    name: "🍺 KBT Katzenmuster",
    composite: "source-over",
    source: "modules/kbt-dice/graphics/textures/catpattern.png"
  });

  dice3d.addTexture("KBT-fachwerk-texture", {
    name: "🍺 KBT Fachwerk",
    composite: "source-over",
    source: "modules/kbt-dice/graphics/textures/fachwerk.png"
  });

  dice3d.addTexture("KBT-goa-texture", {
    name: "🍺 KBT Psychadelisch",
    composite: "source-over",
    source: "modules/kbt-dice/graphics/textures/psychedelic.png"
  });

  dice3d.addDicePreset({
    type: "d2",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/mug.png",
      "modules/kbt-dice/graphics/faces/beertheme/beer.png"
    ],
    system: "KBT-mug"
  });

  dice3d.addDicePreset({
    type: "d4",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/mug_d4.png",
      "2", "3",
      "modules/kbt-dice/graphics/faces/beertheme/beer_d4.png"
    ],
    system: "KBT-mug"
  });

  dice3d.addDicePreset({
    type: "d6",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/mug.png",
      "2", "3", "4", "5",
      "modules/kbt-dice/graphics/faces/beertheme/beer.png",
    ],
    system: "KBT-mug"
  })

  dice3d.addDicePreset({
    type: "d8",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/mug_d8.png",
      "2", "3", "4", "5", "6", "7",
      "modules/kbt-dice/graphics/faces/beertheme/beer_d8.png"
    ],
    system: "KBT-mug"
  });


  dice3d.addDicePreset({
    type: "d10",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/mug_20.png",
      "2", "3", "4", "5", "6", "7", "8", "9",
      "modules/kbt-dice/graphics/faces/beertheme/beer_20.png"
    ],
    system: "KBT-mug"
  });

  dice3d.addDicePreset({
    type: "d12",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/mug.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
      "modules/kbt-dice/graphics/faces/beertheme/beer.png"
    ],
    system: "KBT-mug"
  });

  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/mug_20.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
      "modules/kbt-dice/graphics/faces/beertheme/beer_20.png"
    ],
    system: "KBT-mug"
  });

  dice3d.addDicePreset({
    type: "d100",
    labels: [
      "10", "20", "30", "40", "50", "60", "70", "80",
      "modules/kbt-dice/graphics/faces/beertheme/mug_20.png",
      "modules/kbt-dice/graphics/faces/beertheme/beer_20.png"
    ],
    system: "KBT-mug"
  });

  dice3d.addDicePreset({
    type: "df",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/mug.png",
      "",
      "modules/kbt-dice/graphics/faces/beertheme/beer.png"
    ],
    system: "KBT-mug"
  });

  // Kellerbier-Tavernen Dice with a mug reversed
  dice3d.addSystem({ id: "KBT-mug-i", name: "🍺 Kellerbier-Taverne Bierkrug (getauscht)" }, false);

  dice3d.addDicePreset({
    type: "d2",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/beer.png",
      "modules/kbt-dice/graphics/faces/beertheme/mug.png"
    ],
    system: "KBT-mug-i"
  });

  dice3d.addDicePreset({
    type: "d4",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/beer_d4.png",
      "2", "3",
      "modules/kbt-dice/graphics/faces/beertheme/mug_d4.png"
    ],
    system: "KBT-mug-i"
  });

  dice3d.addDicePreset({
    type: "d6",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/beer.png",
      "2", "3", "4", "5",
      "modules/kbt-dice/graphics/faces/beertheme/mug.png",
    ],
    system: "KBT-mug-i"
  })

  dice3d.addDicePreset({
    type: "d8",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/beer_d8.png",
      "2", "3", "4", "5", "6", "7",
      "modules/kbt-dice/graphics/faces/beertheme/mug_d8.png"
    ],
    system: "KBT-mug-i"
  });


  dice3d.addDicePreset({
    type: "d10",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/beer_20.png",
      "2", "3", "4", "5", "6", "7", "8", "9",
      "modules/kbt-dice/graphics/faces/beertheme/mug_20.png"
    ],
    system: "KBT-mug-i"
  });

  dice3d.addDicePreset({
    type: "d12",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/beer.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
      "modules/kbt-dice/graphics/faces/beertheme/mug.png"
    ],
    system: "KBT-mug-i"
  });

  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/beer_20.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
      "modules/kbt-dice/graphics/faces/beertheme/mug_20.png"
    ],
    system: "KBT-mug-i"
  });

  dice3d.addDicePreset({
    type: "d100",
    labels: [
      "10", "20", "30", "40", "50", "60", "70", "80",
      "modules/kbt-dice/graphics/faces/beertheme/beer_20.png",
      "modules/kbt-dice/graphics/faces/beertheme/mug_20.png"
    ],
    system: "KBT-mug-i"
  });

  dice3d.addDicePreset({
    type: "df",
    labels: [
      "modules/kbt-dice/graphics/faces/beertheme/beer.png",
      "",
      "modules/kbt-dice/graphics/faces/beertheme/mug.png"
    ],
    system: "KBT-mug-i"
  });

  // Kellerbier-Tavernen Dice with a Goblin with coffee and Toni
  dice3d.addSystem({ id: "KBT-coffee", name: "🍺 Kellerbier-Taverne Gobbo-Kaffee" }, false);

  dice3d.addDicePreset({
    type: "d2",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d2.png",
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d2.png"
    ],
    system: "KBT-coffee"
  });

  dice3d.addDicePreset({
    type: "d4",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d4.png",
      "2", "3",
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d4.png"
    ],
    system: "KBT-coffee"
  });

  dice3d.addDicePreset({
    type: "d6",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d6.png",
      "2", "3", "4", "5",
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d6.png",
    ],
    system: "KBT-coffee"
  })

  dice3d.addDicePreset({
    type: "d8",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d8.png",
      "2", "3", "4", "5", "6", "7",
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d8.png"
    ],
    system: "KBT-coffee"
  });


  dice3d.addDicePreset({
    type: "d10",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d10.png",
      "2", "3", "4", "5", "6", "7", "8", "9",
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d10.png"
    ],
    system: "KBT-coffee"
  });

  dice3d.addDicePreset({
    type: "d12",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d12.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d12.png"
    ],
    system: "KBT-coffee"
  });

  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d20.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d20.png"
    ],
    system: "KBT-coffee"
  });

  dice3d.addDicePreset({
    type: "d100",
    labels: [
      "10", "20", "30", "40", "50", "60", "70", "80",
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d100.png",
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d100.png"
    ],
    system: "KBT-coffee"
  });

  dice3d.addDicePreset({
    type: "df",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d6.png",
      "",
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d6.png"
    ],
    system: "KBT-coffee"
  });

  // Kellerbier-Tavernen Dice with a Goblin with coffee and Toni reversed
  dice3d.addSystem({ id: "KBT-coffee-i", name: "🍺 Kellerbier-Taverne Gobbo-Kaffee (getauscht)" }, false);

  dice3d.addDicePreset({
    type: "d2",
    labels: [
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d2.png",
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d2.png"
    ],
    system: "KBT-coffee-i"
  });

  dice3d.addDicePreset({
    type: "d4",
    labels: [
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d4.png",
      "2", "3",
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d4.png",
    ],
    system: "KBT-coffee-i"
  });

  dice3d.addDicePreset({
    type: "d6",
    labels: [
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d6.png",
      "2", "3", "4", "5",
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d6.png",
    ],
    system: "KBT-coffee-i"
  })

  dice3d.addDicePreset({
    type: "d8",
    labels: [
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d8.png",
      "2", "3", "4", "5", "6", "7",
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d8.png",
    ],
    system: "KBT-coffee-i"
  });


  dice3d.addDicePreset({
    type: "d10",
    labels: [
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d10.png",
      "2", "3", "4", "5", "6", "7", "8", "9",
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d10.png",
    ],
    system: "KBT-coffee-i"
  });

  dice3d.addDicePreset({
    type: "d12",
    labels: [
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d12.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d12.png",
    ],
    system: "KBT-coffee-i"
  });

  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d20.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d20.png",
    ],
    system: "KBT-coffee-i"
  });

  dice3d.addDicePreset({
    type: "d100",
    labels: [
      "10", "20", "30", "40", "50", "60", "70", "80",
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d100.png",
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d100.png",
    ],
    system: "KBT-coffee-i"
  });

  dice3d.addDicePreset({
    type: "df",
    labels: [
      "modules/kbt-dice/graphics/faces/tonigrab/tonigrab_d6.png",
      "",
      "modules/kbt-dice/graphics/faces/gobbocoffee/gobbocoffee_d6.png",
    ],
    system: "KBT-coffee-i"
  });

   // Kellerbier-Tavernen Dice with Goblin Wissi and Goblin Toasti
  dice3d.addSystem({ id: "KBT-gobbo", name: "🍺 Kellerbier-Taverne Gobbos" }, false);

  dice3d.addDicePreset({
    type: "d2",
    labels: [
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d2.png",
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d2.png",
    ],
    system: "KBT-gobbo"
  });

  dice3d.addDicePreset({
    type: "d4",
    labels: [
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d4.png",
      "2", "3",
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d4.png",
    ],
    system: "KBT-gobbo"
  });

  dice3d.addDicePreset({
    type: "d6",
    labels: [
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d6.png",
      "2", "3", "4", "5",
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d6.png",
    ],
    system: "KBT-gobbo"
  })

  dice3d.addDicePreset({
    type: "d8",
    labels: [
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d8.png",
      "2", "3", "4", "5", "6", "7",
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d8.png",
    ],
    system: "KBT-gobbo"
  });


  dice3d.addDicePreset({
    type: "d10",
    labels: [
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d10.png",
      "2", "3", "4", "5", "6", "7", "8", "9",
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d10.png",
    ],
    system: "KBT-gobbo"
  });

  dice3d.addDicePreset({
    type: "d12",
    labels: [
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d12.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d12.png",
    ],
    system: "KBT-gobbo"
  });

  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d20.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d20.png",
    ],
    system: "KBT-gobbo"
  });

  dice3d.addDicePreset({
    type: "d100",
    labels: [
      "10", "20", "30", "40", "50", "60", "70", "80",
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d100.png",
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d100.png",
    ],
    system: "KBT-gobbo"
  });

  dice3d.addDicePreset({
    type: "df",
    labels: [
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d6.png",
      "",
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d6.png",
    ],
    system: "KBT-gobbo"
  });

  // Kellerbier-Tavernen Dice with Goblin Wissi and Goblin Toasti reversed
  dice3d.addSystem({ id: "KBT-gobbo-i", name: "🍺 Kellerbier-Taverne Gobbos (getauscht)" }, false);

  dice3d.addDicePreset({
    type: "d2",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d2.png",
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d2.png"
    ],
    system: "KBT-gobbo-i"
  });

  dice3d.addDicePreset({
    type: "d4",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d4.png",
      "2", "3",
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d4.png",
    ],
    system: "KBT-gobbo-i"
  });

  dice3d.addDicePreset({
    type: "d6",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d6.png",
      "2", "3", "4", "5",
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d6.png",
    ],
    system: "KBT-gobbo-i"
  })

  dice3d.addDicePreset({
    type: "d8",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d8.png",
      "2", "3", "4", "5", "6", "7",
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d8.png",
    ],
    system: "KBT-gobbo-i"
  });


  dice3d.addDicePreset({
    type: "d10",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d10.png",
      "2", "3", "4", "5", "6", "7", "8", "9",
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d10.png",
    ],
    system: "KBT-gobbo-i"
  });

  dice3d.addDicePreset({
    type: "d12",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d12.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d12.png",
    ],
    system: "KBT-gobbo-i"
  });

  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d20.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d20.png",
    ],
    system: "KBT-gobbo-i"
  });

  dice3d.addDicePreset({
    type: "d100",
    labels: [
      "10", "20", "30", "40", "50", "60", "70", "80",
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d100.png",
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d100.png",
    ],
    system: "KBT-gobbo-i"
  });

  dice3d.addDicePreset({
    type: "df",
    labels: [
      "modules/kbt-dice/graphics/faces/gobbowissi/wissi_d6.png",
      "",
      "modules/kbt-dice/graphics/faces/toastigobbo/toasti_d6.png",
    ],
    system: "KBT-gobbo-i"
  });



  dice3d.addColorset({
    name: "kbt-wood-theme",
    description: "🍺 Kellerbier-Taverne Bar",
    category: "Kellerbier-Taverne",
    foreground: "#000000",
    background: "#63442d",
    outline: "#ffffff",
    edge: "#63442d",
    texture: "KBT-wood-texture",
    material: "wood",
    font: "🍺 Dancing Script",
    fontScale: {
      "df": 1.5
    },
    visibility: "visible"
  }, "preferred");

  dice3d.addColorset({
    name: "kbt-fachwerk-theme",
    description: "🍺 Kellerbier-Taverne Fachwerk",
    category: "Kellerbier-Taverne",
    foreground: "#ffffff",
    background: "#63442d",
    outline: "#000000",
    edge: "#63442d",
    texture: "KBT-fachwerk-texture",
    material: "stone",
    font: "🍺 Dancing Script",
    fontScale: {
      "df": 1.5
    },
    visibility: "visible"
  }, "preferred");

  dice3d.addColorset({
    name: "kbt-cat-theme",
    description: "🍺 Kellerbier-Taverne Katzenmosaik",
    category: "Kellerbier-Taverne",
    foreground: "#ffffff",
    background: "#cbb69a",
    outline: "#000000",
    edge: "#cbb69a",
    texture: "KBT-cat-texture",
    material: "stone",
    font: "🍺 Dancing Script",
    fontScale: {
      "df": 1.5
    },
    visibility: "visible"
  }, "preferred");

  dice3d.addColorset({
    name: "kbt-goa-theme",
    description: "🍺 Kellerbier-Taverne Psychadelisch",
    category: "Kellerbier-Taverne",
    foreground: "#000000",
    background: "#92402a",
    outline: "#ffffff",
    edge: "#92402a",
    texture: "KBT-goa-texture",
    material: "chrome",
    font: "🍺 Dancing Script",
    fontScale: {
      "df": 1.5
    },
    visibility: "visible"
  }, "preferred");
});
