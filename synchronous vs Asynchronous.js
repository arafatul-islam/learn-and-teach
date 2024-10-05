const craftingCompleteWait = 4;
const combiningMaterialsWait = 2;
const smeltingIronBarsWait = 1;
const shapingIronWait = 3;

// Don't touch below this line

setTimeout(() => console.log("Iron Longsword Complete!"), craftingCompleteWait);
setTimeout(() => console.log("Combining Materials..."), combiningMaterialsWait);
setTimeout(() => console.log("Smelting Iron Bars..."), smeltingIronBarsWait);
setTimeout(() => console.log("Shaping Iron..."), shapingIronWait);

console.log("Firing up the forge...");

sleep(2000);
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
