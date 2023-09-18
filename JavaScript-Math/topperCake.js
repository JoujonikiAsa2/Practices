function scoreCount(jim, dela, cinku) {
    const maximumScore = Math.max(jim, dela, cinku);
    if (maximumScore === jim) {
        console.log("Jim will get the cake")
    }
    else if (maximumScore === cinku) {
        console.log("Cinku will get the cake")
    }
    else {
        console.log('Dela will get the cake');
    }
}
scoreCount(67, 70,90);
scoreCount(96, 70,90);
scoreCount(77, 80,69);
scoreCount(97, 96,90);