


// 8 kyu cheep counting
function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count++;
        }

    }
    return count
}


// 6 kyu String average
function averageString(str) {
    let res = [];
    let a = str.split(' ')
    let count = 0;
    console.log(a);



    for (let i = 0; i < a.length; i++) {

        if (a[i] === "zero") res.push(0), count++;
        if (a[i] === "one") res.push(1), count++;
        if (a[i] === "two") res.push(2), count++;
        if (a[i] === "three") res.push(3), count++;
        if (a[i] === "four") res.push(4), count++;
        if (a[i] === "five") res.push(5), count++;
        if (a[i] === "six") res.push(6), count++;
        if (a[i] === "seven") res.push(7), count++;
        if (a[i] === "eight") res.push(8), count++;
        if (a[i] === "nine") res.push(9), count++;





    }


    if (count === a.length) {
        let total = Math.floor(res.reduce((a, b) => a + b) / res.length)
        if (total === 0) return "zero"
        if (total === 1) return "one"
        if (total === 2) return "two"
        if (total === 3) return "three"
        if (total === 4) return "four"
        if (total === 5) return "five"
        if (total === 6) return "six"
        if (total === 7) return "seven"
        if (total === 8) return "eight"
        if (total === 9) return "nine"

    } else {
        return 'n/a'
    }

}

// 6 kyu Reverse every other word in the string

const reverse = (str) => {


    return str
        .trim()
        .split(' ')
        .map((str, index) => {
            if ((index + 1) % 2 === 0) {
                return str.split('')
                    .reverse()
                    .join('');;
            }
            return str
                ;
        }).join(' ');


}


// Reverse words 7 kyu

const reverseWords = (str) => {
    return str.split(' ').map(elem => elem.split('').reverse().join('')).join(' ')
}







