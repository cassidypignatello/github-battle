import React from 'react';

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang
      }
    });
  }
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className='languages'>
        <p>Selected Language: {this.state.selectedLanguage}</p>
        {languages.map((lang) => <li key={lang} onClick={this.updateLanguage.bind(null, lang)}>{lang}</li>)}
      </ul>
    );
  }
}