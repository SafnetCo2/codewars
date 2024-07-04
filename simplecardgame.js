function winner(deckSteve, deckJosh) {
    let cardRanks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

    let scoreSteve = 0;
    let scoreJosh = 0;

    for (let i = 0; i < deckSteve.length; i++) {
        let steveCard = deckSteve[i];
        let joshCard = deckJosh[i];

        if (cardRanks.indexOf(steveCard) > cardRanks.indexOf(joshCard)) {
            scoreSteve++;
        } else if (cardRanks.indexOf(steveCard) < cardRanks.indexOf(joshCard)) {
            scoreJosh++;
        }
    }

    if (scoreSteve > scoreJosh) {
        return 'Steve wins ' + scoreSteve + ' to ' + scoreJosh;
    } else if (scoreSteve < scoreJosh) {
        return 'Josh wins ' + scoreJosh + ' to ' + scoreSteve;
    } else {
        return 'Tie';
    }
}

// Test cases
console.log(winner(['A', '7', '8'], ['K', '5', '9'])); // Steve wins 2 to 1
console.log(winner(['T', 'J', 'Q'], ['T', 'J', 'Q'])); // Tie
console.log(winner(['2', '3', '4'], ['5', '6', '7'])); // Josh wins 3 to 0
// Explanation:
// Card Ranks: We define a string cardRanks which holds the ranks in order from lowest to highest.This helps us easily determine the rank of each card using the indexOf method.
//     Score Initialization: We initialize the scores of Steve and Josh to zero.
// Comparing Cards: We loop through each card in the decks:
// If Steve's card has a higher rank than Josh's card, increment Steve's score.
// If Josh's card has a higher rank than Steve's card, increment Josh's score.
// If both cards have the same rank, neither score is incremented.
// Determine Winner: After all rounds, we compare the scores:
// If Steve's score is higher, return "Steve wins" with the respective scores.
// If Josh's score is higher, return "Josh wins" with the respective scores.
// If scores are tied, return "Tie".
// This function will determine the winner or if the game ends in a tie based on the provided card decks.