export const capitalized = (data) => {
    if(!data) return ""
    const splitData = data.replace('_', ' ').split(" ");
    for (let i = 0; i < splitData.length; i++) {
        splitData[i] = splitData[i].charAt(0).toUpperCase() + splitData[i].slice(1);
    }
    return splitData.join(" ");
}

export const arrayToObject = (data) => {
    let object = {}
    data.forEach((val) => {
       if(val) { object[val] = val }
    })
    return object
}

export const objectToArray = (data) => {
    let array = []
    Object.keys(data).forEach((val) => {
        if(val) { array.push(val) }
    })
    return array
}

export const compareToObjects = (mainObj, compareObj) => {
    let object = {}
    Object.keys(mainObj).forEach((val) => {
        if(val){
            object[val] = Object.keys(compareObj).includes(val)
        }
    })
    return object
}