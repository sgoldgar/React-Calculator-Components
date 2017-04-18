import React, {Component} from 'react'; //import react functionality


/*the name of our component is going to be Meme, we want to leverage existing functionality so extend*/
class Gray extends Component{
  render(){ //render and return html. Props is everything passed into the component
    return(
      <input type="button" className="button gray" value={this.props.value}  />
    )
  }
}

export default Gray; //export our component, Meme
