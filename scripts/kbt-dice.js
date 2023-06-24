/*
Hooks.on("init", () => { // for the font init

});
*/

Hooks.on('diceSoNiceReady', (dice3d) => { // for the dices
  
  // Default Kellerbier-Tavernen Dice
  dice3d.addSystem({ id: "KBT", name: "🍺 Kellerbier-Taverne" }, false);

  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/kbt-dice/graphics/faces/GoblinToasti.png",
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
      "modules/kbt-dice/graphics/faces/trigger.png"
    ],
    bumpMaps: [
      "modules/kbt-dice/graphics/faces/GoblinToasti_bump.png",
      , , , , , , , , , , , , , , , , , ,
      "modules/kbt-dice/graphics/faces/trigger_bump.png"
    ],
    system: "KBT"
  });

  dice3d.addDicePreset({
    type: "d2",
    labels: [
      "modules/kbt-dice/graphics/faces/GoblinToasti.png",
      "modules/kbt-dice/graphics/faces/trigger.png"
    ],
    bumpMaps: [
      "modules/kbt-dice/graphics/faces/GoblinToasti_bump.png",
      "modules/kbt-dice/graphics/faces/trigger_bump.png"
    ],
    system: "KBT"
  });

  dice3d.addDicePreset({
    type: "d4",
    labels: [
      "modules/kbt-dice/graphics/faces/GoblinToasti.png",
      "2", "3",
      "modules/kbt-dice/graphics/faces/trigger.png"
    ],
    bumpMaps: [
      "modules/kbt-dice/graphics/faces/GoblinToasti_bump.png",
      , , 
      "modules/kbt-dice/graphics/faces/trigger_bump.png"
    ],
    system: "KBT"
  });

  dice3d.addDicePreset({
    type: "d6",
    labels: [
      "modules/kbt-dice/graphics/faces/GoblinToasti.png",
      "2", "3", "4", "5", 
      "modules/kbt-dice/graphics/faces/trigger.png"
    ],
    bumpMaps: [
      "modules/kbt-dice/graphics/faces/GoblinToasti_bump.png",
      , , , , 
      "modules/kbt-dice/graphics/faces/trigger_bump.png"
    ],
    system: "KBT"
  });


  dice3d.addDicePreset({
    type: "d8",
    labels: [
      "modules/kbt-dice/graphics/faces/GoblinToasti.png",
      "2", "3", "4", "5", "6", "7",
      "modules/kbt-dice/graphics/faces/trigger.png"
    ],
    bumpMaps: [
      "modules/kbt-dice/graphics/faces/GoblinToasti_bump.png",
      , , , , , ,
      "modules/kbt-dice/graphics/faces/trigger_bump.png"
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
    bumpMaps: [
      "modules/kbt-dice/graphics/faces/GoblinToasti_bump.png",
      , , , , , , , ,
      "modules/kbt-dice/graphics/faces/trigger_bump.png"
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
    bumpMaps: [
      "modules/kbt-dice/graphics/faces/GoblinToasti_bump.png",
      , , , , , , , , , ,
      "modules/kbt-dice/graphics/faces/trigger_bump.png"
    ],
    system: "KBT"
  });

  /*
  dice3d.addTexture({});

  dice3d.addColorset({});
  */
});