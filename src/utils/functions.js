export const capitalized = (data) => {
    if(!data) return ""
    const splitData = data.replace('_', ' ').split(" ");
    for (var i = 0; i < splitData.length; i++) {
        splitData[i] = splitData[i].charAt(0).toUpperCase() + splitData[i].slice(1);
    }
    return splitData.join(" ");
}