function startMemoryGame() {
    let memories = [
        "First trip to the beach together!",
        "The time we laughed so hard we couldn't breathe.",
        "When we binge-watched our favorite series for hours.",
        "Our first road trip—just the two of us!"
    ];

    let randomMemory = memories[Math.floor(Math.random() * memories.length)];
    let guess = prompt("Guess the memory we shared! Here's a clue: " + randomMemory);

    let result = document.getElementById("game-result");

    if (guess.toLowerCase().includes(randomMemory.toLowerCase())) {
        result.innerHTML = "You guessed it right! We really shared that moment!";
    } else {
        result.innerHTML = "Oops, that's not it! Try again!";
    }
}
