export const campaignInto = `Welcome to the gang, our mission, Steal all the gold from all the banks, how will we do that?... by playing poker.. co-operatively.
Follow throught the missions, if you are new, start at the beginning, if you have played through all of the hard modifiers and are looking for more of a challenge, start at mission $$$,
, if you have already been playing with custom modifiers and are ready to ramp it up, start at mission $$$.

This campaign is designed for people who have already played the base game however the difficulty starts easier than a few of the base modifiers. All mission are best out of 3, I felt making it best out of 5 draws the game out too long but best of 1 is too easy to just get lucky on.

This game uses light poker terms, namely, "Pre-Flop", "Flop", "Turn" and "River" to refer to what is known in the game respectively as rounds 1,2,3 and 4. It just hurts to refer to them as rounds as a poker player. It also in places can use the word "muck", this will be used in context to "muck your hand" by placing your cards face down in the middle

Difficulty: Each mission is given a difficulty score, however with more players the missions become significantly harder, a formula I have created for difficulty modifiers is below. Assuming 4 or more players are in play.



where "p" is the player count and "m" is the score of the difficulty modifier.`;

interface Mission {
  Mission: number;
  Difficulty: number;
  Modifier: string;
}

export const campaign = [
  {
    Mission: 1,
    Difficulty: 1,
    Modifier:
      "On the Turn, if either of your hold cards matches the card that comes out, you must muck your hand and draw a new one.",
  },
  {
    Mission: 2,
    Difficulty: 2,
    Modifier:
      "On the river, a player the group chooses mucks their hand and draws a new one.",
  },
  {
    Mission: 3,
    Difficulty: 3,
    Modifier: "You may only look at 1 card until the turn.",
  },
  {
    Mission: 4,
    Difficulty: 3,
    Modifier: "The order is dealt: River, Turn, Flop.",
  },
  {
    Mission: 5,
    Difficulty: 4,
    Modifier:
      "You are dealt 4 cards; you play precisely 2 from your hand and 3 from the board.",
  },
  {
    Mission: 6,
    Difficulty: 5,
    Modifier:
      "There is another round after the river where 2 cards are dealt; redistribute the white chips. You only need 4 cards for a straight, flush, and straight flush.",
  },
  {
    Mission: 7,
    Difficulty: 5,
    Modifier:
      "PLO5, 3 extra cards, still only playing 2 from hand and 3 from board.",
  },
  {
    Mission: 8,
    Difficulty: 6,
    Modifier:
      "You may only look at 1 card until the turn. You only need 4 cards for a straight, flush, and straight flush.",
  },
  {
    Mission: 9,
    Difficulty: 6,
    Modifier:
      "PLO6, you are dealt 4 extra cards, you play 2 from your hand and 3 from the board.",
  },
  {
    Mission: 10,
    Difficulty: 7,
    Modifier:
      "2 boards are dealt, on the river the board with the lowest card is wiped. In the event of a tie, both boards are kept and you play the board you are best on. You may only look at 1 card until the turn.",
  },
  {
    Mission: 11,
    Difficulty: 10,
    Modifier: `All base game modifiers (except blackout) are in play. This means:
  - You are dealt an extra card each.
  - There is no distribution of white or orange chips.
  - Flip the 1-star and highest value yellow chips to the black side; they cannot be retaken.
  - If there is a face card on the Turn (as opposed to the flop normally), the player with the 1-star yellow chip mucks their hand and draws a new one, otherwise the player with the highest value white chip mucks and redraws.
  - On showdown, after all other cards are revealed, everyone else must agree on both the hand ranking and a card in the hand of the player with the highest value red chip. If either are incorrect the heist fails.`,
  },
];
