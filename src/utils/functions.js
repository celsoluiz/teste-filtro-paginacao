export const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
}

export const sortNumber = (a, b) => {
    return a - b;
}

export const mergeObjects = (arrFull) => {
    if (!arrFull.length)  return [];

    const arr1 = arrFull[0];
    const arr2 = arrFull[1];

    const arrMerged = arr2.map(obj2 => {
        const sameId = arr1.filter(obj1 => obj1.id === obj2.id);
        return {...obj2, ...sameId}
    });

    return arrMerged;
}