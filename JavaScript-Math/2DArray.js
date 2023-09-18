// player array

var playerInfo = [
    ["Ashraful",95],
    ["Sakib",19],
    ["Mushfiq",3],
    ["Mahmudullah",45],
    ["Mashrafee",131]
];
function highestRunScorer(playerInfo){
    let highestScore = playerInfo[0][1];
    let name = playerInfo[0][0];
    for(let i=0; i<5; i++){
        for(let j=0; j<2; j++){
            if(highestScore < playerInfo[i][1]){
                highestScore = playerInfo[i][1];
                name = playerInfo[i][0];
            }
        }
    }
    return name;
}
console.log(highestRunScorer(playerInfo));