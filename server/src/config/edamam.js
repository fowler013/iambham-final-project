let url = 'https://api.edamam.com/search';
let KEY = process.env.API_KEY;
let ID = process.env.APP_ID;

export default function (props) {
let urlstring = `${url}`
let { health, diet, excluded} = props
    if(health) {
        health.forEach(healthitem => {
            urlstring += `&health=${healthitem}`;
        });
    };
    if (diet) {
        health.forEach(dietitem => {
            urlstring += `&diet=${dietitem}`;
        });
    };

    if (excluded) {
        excluded.forEach(excludeditem => {
            urlstring += `&excluded=${excludeditem}`;
        });
    };

}