let url = 'https://api.edamam.com/search';
let KEY = process.env.API_KEY;
let ID = process.env.APP_ID;

function MakeURL(props) {
    let urlstring = `${url}`;

    let { uri, keyword, health, diet, excluded, from, to, calories, time, nutrients } = props;

    if (uri) {
        let theuri = encodeURIComponent(uri);
        return urlstring += `?r=${theuri}&app_id=${ID}&app_key=${KEY}`
    }
    if (keyword) {
        keyword


    }

    if (health) {
        health.forEach(
            healthitem => {
                urlstring += `&health=${healthitem}`;
            }
        );
    }
    if (diet) {
        health.forEach(
            dietitem => {
                urlstring += `&diet=${dietitem}`;
            }
        );
    }

    if (excluded) {
        excluded.forEach(
            excludeditem => {
                urlstring += `&excluded=${excludeditem}`;
            }
        );
    }

    return urlstring
}

export default function goEdamam (props) {
    console.log(props)
                                  
    let theURL = MakeURL(props)

    console.log(theURL)
    // fetch(theURL, {
    //     method: 'Get',
    //     headers: { 'Content-Type': 'application/json' }
    // }).then
    //     (res => res.json()).then((res) => {
    //         console.log('this is the response', res)
    //     })
}