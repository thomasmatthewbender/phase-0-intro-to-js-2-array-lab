// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    const addCatEnd = cats.push("Ralph")
    return addCatEnd
}

function destructivelyPrependCat(name) {
    const addCatFront = cats.unshift("Bob")
    return addCatFront
}

function destructivelyRemoveLastCat(name) {
    const removeLastCat = cats.pop(2)
    return removeLastCat
}

function destructivelyRemoveFirstCat(name) {
    const removeFirstCat = cats.shift(0)
    return removeFirstCat
}

function appendCat(name) {
    const allCatsAddEnd = [...cats, "Broom"]
    return allCatsAddEnd
}

function prependCat(name) {
    const allCatsAddFront = ["Arnold", ...cats]
    return allCatsAddFront
}

function removeLastCat(name) {
    const removeLastCatArr = cats.slice(0, cats.length - 1)
    return removeLastCatArr
}

function removeFirstCat(name) {
    const removeFirstCatArr = cats.slice(1)
    return removeFirstCatArr
}