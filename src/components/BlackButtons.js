import React, {Component} from 'react'; //import react functionality


/*the name of our component is going to be Meme, we want to leverage existing functionality so extend*/
class Black extends Component{
  render(){ //render and return html. Props is everything passed into the component
    return(
      <input type="button" className="button black" value={this.props.value}  />
    )
  }
}

export default Black; //export our component, Meme
