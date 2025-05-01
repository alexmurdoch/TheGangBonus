import { goldMods } from "@/assets/mods";

function shuffle<T>(array: T[]): T[] {
  const result = [...array]; // make a shallow copy
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const getModifiersByDifficulty = (
  targetDifficulty: number,
  count = null
) => {
  const shuffled = shuffle(goldMods);
  const selected = [];
  let currentTotal = 0;

  for (let i = 0; i < shuffled.length; i++) {
    const mod = shuffled[i];

    if (
      currentTotal + mod.difficulty <= targetDifficulty &&
      (!count || selected.length < count)
    ) {
      selected.push(mod);
      currentTotal += mod.difficulty;

      if (
        currentTotal === targetDifficulty &&
        (!count || selected.length === count)
      ) {
        break;
      }
    }
  }

  return currentTotal === targetDifficulty ? selected : [];
};
