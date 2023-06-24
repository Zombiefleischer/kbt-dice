Hooks.on("init", () => { // for the font init

});

Hooks.on('diceSoNiceReady', (dice3d) => { // for the dices
  
  // Default Kellerbier-Tavernen Dice
  dice3d.addSystem({ id: "KBT - Kellerbier-Taverne", name: "🍺 Kellerbier-Taverne" }, "default");

  dice3d.addDicePreset({});

  dice3d.addTexture({});

  dice3d.addColorset({});
});