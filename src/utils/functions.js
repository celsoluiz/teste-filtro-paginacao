export const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
}

export const sortNumber = (a, b) => {
    return a - b;
}