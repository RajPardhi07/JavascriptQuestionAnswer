const string = "Hello JS , You are amazing"

const vowels = ['a','e', 'i', 'o', 'u', ]


function countVowel(data) {
    let count = 0;

    data.toLowerCase().split("").forEach((ch) => {
        vowels.includes(ch) && count++;
    })


    return count;
}

