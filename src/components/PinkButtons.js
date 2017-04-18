import React, {Component} from 'react'; //import react functionality


/*the name of our component is going to be Meme, we want to leverage existing functionality so extend*/
class Pink extends Component{
  render(){ //render and return html. Props is everything passed into the component
    return(
      <input type="button" className="button pink" value={this.props.value}  />
    )
  }
}

export default Pink; //export our component, Meme
