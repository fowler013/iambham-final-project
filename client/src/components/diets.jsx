import React, { Component } from 'react';
//let num = 0;

export default class Diets extends Component {
  constructor() {
    super();
    this.num = 0;
    this.state = {
      selectedDiets: [],
      diets: [
      { name: 'balanced', toggled: false },
      { name: 'high-fiber', toggled: false },
      { name: 'high-protein', toggled: false },
      { name: 'low-carb', toggled: false },
      { name: 'low-fat', toggled: false },
      { name: 'low-sodium', toggled: false },
      { name: 'alcohol-free', toggled: false },
      { name: 'celery-free', toggled: false },
      { name: 'crustacean-free', toggled: false },
      { name: 'dairy', toggled: false },
      { name: 'eggs', toggled: false },
      { name: 'fish', toggled: false },
      { name: 'gluten', toggled: false },
      { name: 'kidney-friendly', toggled: false },
      { name: 'kosher', toggled: false },
      { name: 'low-potassium', toggled: false },
      { name: 'lupine-free', toggled: false },
      { name: 'mustard-free', toggled: false },
      { name: 'no-oil-added', toggled: false },
      { name: 'no-sugar', toggled: false },
      { name: 'paleo', toggled: false },
      { name: 'peanuts', toggled: false },
      { name: 'pescatarian', toggled: false },
      { name: 'pork-free', toggled: false },
      { name: 'red-meat-free', toggled: false },
      { name: 'sesame-free', toggled: false },
      { name: 'shell-fish', toggled: false },
      { name: 'soy', toggled: false },
      { name: 'sugar-conscious', toggled: false },
      { name: 'tree-nuts', toggled: false },
      { name: 'vegan', toggled: false },
      { name: 'vegetarian', toggled: false },
      { name: 'wheat-free', toggled: false }]
    }
  }
  toggleCheckbox() {
    let dietsCopy = JSON.parse(JSON.stringify(this.state.diets))
    //dietsCopy[0].toggled = true;
    //this.setState({diets: dietsCopy});
    Object.values(dietsCopy).forEach((diet) => {
      let { name, toggled } = diet;
      console.log(name);
    })

  }
  render() {
    return (
      <div className="diet-selection">
        <label htmlFor="">Diet Selection</label>
        <br />
        {this.state.diets.map((diet) => {
          //console.log(diet);
          this.num++;
          return (
            <div className="form-check form-check-inline" key={this.num}>
              <input className="form-check-input" type="checkbox" id={`inlineCheckbox${this.num}`} value={`option${this.num}`} onChange={() => {
                this.toggleCheckbox()
              }} />
              <label className="form-check-label" htmlFor={`inlineCheckbox${this.num}`}>{diet.name}</label>
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


//{ name: 'balanced', toggled: false },
//{ name: 'high-fiber', toggled: false },
//{ name: 'high-protein', toggled: false },
//{ name: 'low-carb', toggled: false },
//{ name: 'low-fat', toggled: false },
//{ name: 'low-sodium', toggled: false },
//{ name: 'alcohol-free', toggled: false },
//{ name: 'celery-free', toggled: false },
//{ name: 'crustacean-free', toggled: false },
//{ name: 'dairy', toggled: false },
//{ name: 'eggs', toggled: false },
//{ name: 'fish', toggled: false },
//{ name: 'gluten', toggled: false },
//{ name: 'kidney-friendly', toggled: false },
//{ name: 'kosher', toggled: false },
//{ name: 'low-potassium', toggled: false },
//{ name: 'lupine-free', toggled: false },
//{ name: 'mustard-free', toggled: false },
//{ name: 'no-oil-added', toggled: false },
//{ name: 'no-sugar', toggled: false },
//{ name: 'paleo', toggled: false },
//{ name: 'peanuts', toggled: false },
//{ name: 'pescatarian', toggled: false },
//{ name: 'pork-free', toggled: false },
//{ name: 'red-meat-free', toggled: false },
//{ name: 'sesame-free', toggled: false },
//{ name: 'shell-fish', toggled: false },
//{ name: 'soy', toggled: false },
//{ name: 'sugar-conscious', toggled: false },
//{ name: 'tree-nuts', toggled: false },
//{ name: 'vegan', toggled: false },
//{ name: 'vegetarian', toggled: false },
//{ name: 'wheat-free', toggled: false }