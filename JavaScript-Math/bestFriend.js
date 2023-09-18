function bestFriend(names) {
    let maxLength = 0;
    let bestFriendName = "";
    for (let i = 0; i < names.length; i++) {
        currentLength = names[i].length;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            bestFriendName = names[i];   
        }
    }
    return bestFriendName;
}
const names = ['shawon', 'nabila', 'srijon', 'jim'];
console.log(bestFriend(names));