import React, { Component } from 'react';

export default class Diets extends Component {
  constructor() {
    super();
    this.state = {
      diets: ['balanced',
        'high-fiber',
        'high-protein',
        'low-carb',
        'low-fat',
        'low-sodium',
        'alcohol-free',
        'celery-free',
        'crustacean-free',
        'dairy',
        'eggs',
        'fish',
        'gluten',
        'kidney-friendly',
        'kosher',
        'low-potassium',
        'lupine-free',
        'mustard-free',
        'no-oil-added',
        'no-sugar',
        'paleo',
        'peanuts',
        'pescatarian',
        'pork-free',
        'red-meat-free',
        'sesame-free',
        'shell-fish',
        'soy',
        'sugar-conscious',
        'tree-nuts',
        'vegan',
        'vegetarian',
        'wheat-free']
    }
  }
  render() {
    let num = 0;
    return (
      <div className="diet-selection">
        <label htmlFor="">Diet Selection</label>
        <br/>
        {this.state.diets.map((diet) => {
          console.log(diet);
          num++;
          return (
            <div className="form-check form-check-inline" key={num}>
              <input className="form-check-input" type="checkbox" id={`inlineCheckbox${num}`} value={`option${num}`} />
              <label className="form-check-label" htmlFor={`inlineCheckbox${num}`}>{diet}</label>
            </div>
          )
        })}
      </div>
    )
  }
}

//'balanced',
//'high-fiber',
//'high-protein',
//'low-carb',
//'low-fat',
//'low-sodium',
//'alcohol-free',
//'celery-free',
//'crustacean-free',
//'dairy',
//'eggs',
//'fish',
//'gluten',
//'kidney-friendly',
//'kosher',
//'low-potassium',
//'lupine-free',
//'mustard-free',
//'no-oil-added',
//'no-sugar',
//'paleo',
//'peanuts',
//'pescatarian',
//'pork-free',
//'red-meat-free',
//'sesame-free',
//'shell-fish',
//'soy',
//'sugar-conscious',
//'tree-nuts',
//'vegan',
//'vegetarian',
//'wheat-free'