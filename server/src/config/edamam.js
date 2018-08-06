import { isString } from "util";

let url = 'https://api.edamam.com/search';
let KEY = process.env.API_KEY;
let ID = process.env.APP_ID;

function MakeURL(props) {
    console.log(props)
    let urlstring = `${url}`;

    let { uri, keyword, health, diet, excluded, from, to, ingredients, calories, time, nutrients } = props;
    if (uri !== undefined) {
        let theuri = uri.split('&')
        urlstring += '?'
        theuri.forEach( element => {
            let theurl = encodeURIComponent(`http://www.edamam.com/ontologies/edamam.owl#recipe_${element}`);
            if(theuri.indexOf(element) > 0) {
                urlstring += `&r=${theurl}`
            } else {
                urlstring += `r=${theurl}`                
            }

        })
        return urlstring += `&app_id=${ID}&app_key=${KEY}`
    }
    if (keyword !== undefined) {
        let removeunwanted = new RegExp(/['a-zA-Z0-9]+/gim);
        if(keyword === "") {
            urlstring += `?q=&app_id=${ID}&app_key=${KEY}`
        } else {
            let words = keyword.match(removeunwanted);
            let newword = words.map(word => {
                if (word.includes(`'`)) {
                    let test = word.split("");
                    let test2 = test.map(letter => {
                        if (letter === `'`) {
                            return `%27`;
                        } else {
                            return letter;
                        }
                    });
                    return test2.join("");
                } else {
                    return word;
                }
            });
            urlstring += `?q=${newword.join("%20")}&app_id=${ID}&app_key=${KEY}`;
        }
    }

    if(from !== undefined && to !== undefined) {
        urlstring += `&from=${from}&to=${to}`;
    }else {
        urlstring += `&from=${0}&to=${20}`;       
    } 

    if (calories !== undefined) {
        let range = calories
        if (range.includes('+')) {
            range = range.split('').map(letter => {
                if (letter === '+') {
                    letter = '%2B'
                }
                return letter
            }).join('')
        }
        urlstring += `&calories=${range}`
    }

    if (time !== undefined) {
      let range = time;
      if (range.includes("+")) {
        range = range
          .split("")
          .map(letter => {
            if (letter === "+") {
              letter = "%2B";
            }
            return letter;
          })
          .join("");
      }
      urlstring += `&time=${range}`;
    }

    if (health !== undefined) {
        if (isString(health)) {
            health = [health]
        }        
        health.forEach(
            healthitem => {
                urlstring += `&health=${healthitem}`;
            }
        );
    }
    if (diet !== undefined) {
        if(isString(diet)) {
            diet = [diet]
        }
        diet.forEach(
            dietitem => {
                urlstring += `&diet=${dietitem}`;
            }
        );
    }

    if (excluded !== undefined) {
        let removeunwanted = new RegExp(/['\sa-zA-Z0-9]+/gmi);
        let words = excluded.match(removeunwanted);
        let newword = words.map(word => {
            if (word[0] === ` `) {
                word = word.slice(1);
            }
            if (word[(word.length - 1)] === ` `) {
                word = word.slice(0, -1);
            }
            if (word.includes(`'`)) {
                let test = word.split('')
                let test2 = test.map(letter => {
                    if (letter === `'`) {
                        return `%27`
                    } else {
                        return letter
                    }
                })
                word = test2.join('')
            }
            if (word.includes(` `)) {
                let test = word.split('')
                let test3 = test.map(letter => {
                    if (letter === ` `) {
                        return `%20`
                    } else {
                        return letter
                    }
                })
                word = test3.join('')
            }
            urlstring += `&excluded=${word}`
        })
    }

    if (!keyword && !calories && !time && !nutrients && !excluded && !health && !diet) {
        urlstring += `&calories=${100000}`;
    }

    console.log(urlstring)
    return urlstring
}

export default function goEdamam (props) {
    
    let theURL = MakeURL(props)

    return theURL

}

