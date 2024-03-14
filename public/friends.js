function battle(num) {
    switch (num) {
        case 1:
            localStorage.setItem("Opponent", "Mr Knight");
            break;
        case 2:
            localStorage.setItem("Opponent", "Mrs Knight");
            break;
        case 3:
            localStorage.setItem("Opponent", "NoLifr96");
            break;
        default:
            localStorage.setItem("Opponent", "Mr Knight");
    }
}