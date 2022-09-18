// kind of an example of another way 
// of displaying "rust" to the console

let letters: string[] = ["r", "u", "s", "t"]
let word: string = ""

for (const l of letters)
    word += l

console.log(word)