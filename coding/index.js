function getValueInObj(obj, value) {
    console.log(obj)
    if (value in obj) {
        return obj[value];
    } else {
        return undefined;
    }
}

const findPath = (inputObj, inputStr) => {
    const path = inputStr.split('.');
    console.log("🚀 ~ file: Untitled-2 ~ line 12 ~ findPath ~ path", path)

    // [a, b, c] => inputObj[]
    let finalVal = null;

    for (let strIndex = 0; strIndex < path.length; strIndex++) {
        if (strIndex === 0) {
            finalVal = getValueInObj(inputObj, path[strIndex]);
        } else {
            finalVal = getValueInObj(finalVal, path[strIndex]);
        }
    }
    // inputObj[a[0]][a[1]]

    return finalVal;
}

var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

console.log(findPath(obj, 'a.b.d'));