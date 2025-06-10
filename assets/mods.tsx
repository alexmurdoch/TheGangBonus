export const goldMods = [
  {
    name: "Smoke Screen 1",
    description:
      "On the Turn, if either of your hold cards matches the card that comes out, you must muck your hand and draw a new one",
    category: "none",
    difficulty: 1,
    custom: true,
    diffCategory: "easy",
  },
  {
    name: "Smoke Screen 2",
    description:
      "On the Turn, if either of your hold cards matches the card that comes out, you must muck your hand and draw a new one",
    category: "none",
    difficulty: 1,
    custom: true,
    diffCategory: "easy",
  },
  {
    name: "Smoke Screen 3",
    description:
      "On the Turn, if either of your hold cards matches the card that comes out, you must muck your hand and draw a new one",
    category: "none",
    difficulty: 2,
    custom: true,
    diffCategory: "easy",
  },
  {
    name: "Klutz",
    description:
      "On the river, a player the group chooses discards their hand and draws a new one.",
    category: "none",
    difficulty: 2,
    custom: true,
    diffCategory: "easy",
  },
  {
    name: "Mix-Up",
    description:
      "On the flop, the players with the highest and second highest chips swap a card at random.",
    category: "none",
    difficulty: 2,
    custom: true,
    diffCategory: "easy",
  },

  {
    name: "Flashbang",
    description:
      "The player with the 1 white chip may not take a chip until the river; they are given the remaining chip in other rounds.",
    category: "none",
    difficulty: 2,
    custom: true,
    diffCategory: "easy",
  },
  {
    name: "Double Agent",
    description:
      "An extra hand is dealt. It does not take a chip until the river. The player with the 1 star white chip may view the hand on the river.",
    category: "none",
    difficulty: 2,
    custom: true,
    diffCategory: "easy",
  },
  {
    name: "Oceans something",
    description:
      "There is another round after the river where 2 cards are dealt; redistribute the white chips.",
    category: "none",
    difficulty: 2,
    custom: true,
    diffCategory: "easy",
  },
  {
    name: "Jokers",
    description: `Shuffle 2 jokers into the deck, if drawn by a player, they count as the best card they can have in the hand, they win ties, if they hit the board, discard the joker and place 2 cards in place (there will be an extra community card)`,
    category: "none",
    difficulty: 2,
    custom: true,
    diffCategory: "easy",
  },

  {
    name: "Thought I Had It",
    description:
      "You only need 4 cards for a straight, flush, and straight flush.",
    category: "none",
    difficulty: 3,
    custom: true,
    diffCategory: "medium",
  },
  {
    name: "Stun Grenade",
    description: "You may only look at 1 card until the turn.",
    category: "none",
    difficulty: 3,
    custom: true,
    diffCategory: "medium",
  },
  {
    name: "Pineapple",
    description:
      "You are dealt 3 cards. On the flop, discard the lowest card that does not connect with the board,(if you were to make a 5 card hand using 2 cards from your hand and 3 from the board, the card not currently playing will be discarded, in the even of a tie, you choose).",
    category: "moreCards",
    difficulty: 3,
    custom: true,
    diffCategory: "medium",
  },
  {
    name: "Reverse",
    description: "The order is dealt: River, Turn, Flop.",
    category: "none",
    difficulty: 3,
    custom: true,
    diffCategory: "medium",
  },
  {
    name: "PLO",
    description:
      "You are dealt 4 cards; you play precisely 2 from your hand and 3 from the board.",
    category: "moreCards",
    difficulty: 4,
    custom: true,
    diffCategory: "medium",
  },

  {
    name: "Split Corridors",
    description:
      "Until the river, players in even seats can only take even chips and players in odd seats can only take odd chips (dealer is seat 1).",
    category: "none",
    difficulty: 3,
    custom: true,
    diffCategory: "medium",
  },
  {
    name: "No stragglers",
    description: `all players with hand ranking of "High card" on the turn must muck their hand and draw a new one`,
    category: "none",
    difficulty: 2,
    custom: true,
    diffCategory: "easy",
  },
  {
    name: "Wipeout",
    description:
      "2 boards are dealt. On the river, the board with the lowest card dealt is wiped. In the event of a tie, both boards remain and each player plays the board where they have the highest ranking hand.",
    category: "none",
    difficulty: 4,
    custom: true,
    diffCategory: "medium",
  },
  {
    name: "PLO5",
    description:
      "3 extra cards, still only playing 2 from hand and 3 from board.",
    category: "PLO",
    difficulty: 5,
    custom: true,
    diffCategory: "hard",
  },
  {
    name: "PLO6",
    description:
      "4 extra cards — way too many. Play 2 from hand and 3 from board.",
    category: "PLO",
    difficulty: 6,
    custom: true,
    diffCategory: "hard",
  },
  {
    name: "PLO But Weird",
    description: "You are dealt 4 cards and you play precisely 3 of them.",
    category: "PLO",
    difficulty: 5,
    custom: true,
    diffCategory: "hard",
  },
  {
    name: "Caught In 4K",
    description: "2 extra cards are dealt; you may play them all.",
    category: "PLO",
    difficulty: 4,
    custom: true,
    diffCategory: "hard",
  },
];

export const defaultMods = [
  {
    name: "Quick Access",
    description:
      "Do not distribute the white chips, go immediately to the flop",
    category: "none",
    difficulty: 2,
    custom: false,
    diffCategory: "easy",
  },
  {
    name: "Noise Sensors",
    description:
      "Flip the 1-star white, yellow and orange chips to the dark side, these chips cannot change owners once taken",
    category: "none",
    difficulty: 1,
    custom: false,
    diffCategory: "beginner",
  },
  {
    name: "Motion Detector",
    description:
      "If at least 1 of the community cards on the flop is a face card, The player with the 1-star white chip must muck their pocket cards and draw new ones",
    category: "none",
    difficulty: 1,
    custom: false,
    diffCategory: "beginner",
  },
  {
    name: "Retina Scan",
    description:
      "After all other players reveal their hands, they must agree on a card they belive is in the highest ranking players hand, if incorrect, the heist fails",
    category: "none",
    difficulty: 2,
    custom: false,
    diffCategory: "easy",
  },
  {
    name: "Hasty Getaway",
    description:
      "There is no distibution of orange chips, go straight to the river",
    category: "none",
    difficulty: 1,
    custom: false,
    diffCategory: "easy",
  },
  {
    name: "Ventilation Shaft",
    description:
      "Flip the highest value white, yellow and orange chips to the dark side, these chips cannot change owners once taken",
    category: "none",
    difficulty: 1,
    custom: false,
    diffCategory: "easy",
  },
  {
    name: "Laser Tripwires",
    description:
      "If none of the cards on the flop are a face card, the player with the highest value white chip mucks their hand and draws a new one",
    category: "none",
    difficulty: 1,
    custom: false,
    diffCategory: "beginner",
  },
  {
    name: "Blackout",
    description: "Chips from the previous round are discarded",
    category: "bad",
    difficulty: 2,
    custom: false,
    diffCategory: "easy",
  },
  {
    name: "Fingerprint Scan",
    description:
      "Before the player with the highest star red chips hand is revealed, everyone else agrees on what hand ranking they have, if they guess wrong the heist fails",
    category: "none",
    difficulty: 2,
    custom: false,
    diffCategory: "easy",
  },
  {
    name: "Security Cameras",
    description: "Each player is dealt an additional pocket card",
    category: "none",
    difficulty: 2,
    custom: false,
    diffCategory: "easy",
  },
];

export const experimentalMods = [
  {
    name: "Indian",
    description: `you may not view your hand, hold your hand to your forehead, once the white chips have been distributed,
     players must put their hands face down and they can no longer be looked at`,
    category: "experimental",
    difficulty: 1,
    custom: true,
    diffCategory: "easy",
  },
  {
    name: "Imposter among us",
    description: `A seperate deck is used where players are dealt a card, all but 1 is red,
     they are crew mates, the other card is a spade which value goes from Ace to the number of players, 
     a random card from that pile is shuffled in with the red cards, a card is dealt to all players, 
     the red players play as normal and the player with the black card has to finish the round with the red chip equal to the value on the card, 
     (4 of spades means they need the 4 star chip), 
     after the round is over before reveal, players all vote on a count of 3 who to eliminate, that person is eliminated and their hand doesn't play, if you are the imposter, 
    have the correct chip and your hand does play, you win, it is possible that your hand does rank correctly with the group and all players win the round`,
    category: "experimental",
    difficulty: 5,
    custom: true,
    diffCategory: "hard",
  },
];
