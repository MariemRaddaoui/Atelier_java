const play = () => {
    const number = Math.round(Math.random() * 10);
    n = prompt("How many times you want to try ?");
    i = 0;
    k = -1;
    while (i < n && k != number) {
        if (n - i == 1) {
            k = prompt("Enter a number between 0 and 10. You still have one chance.");
        } else {
            k = prompt("Enter a number between 0 and 10. You still have " + (n - i) + " chances. ");
        }
        i++;
    }

    if (k == number) {
        alert("You guessed right. The number was: " + number);
    } else {
        alert("Sorry, the number was " + number + ". You can try again!");
    }

    a = prompt("Press 1 if you want to try again or any other number if you want to quit.");
    if (a == 1) {
        play();
    }

}