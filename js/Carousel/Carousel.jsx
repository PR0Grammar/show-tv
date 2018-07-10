import React from 'react';
import Slide from './Slide';
import Arrow from './Arrow';
import preload from '../../data.json';

class Carousel extends React.Component {

  static async fetchContent() {
      return preload.shows;
    }

  constructor(props){
    super(props);

    this.state = {
      imageIndex: 0,
      imgUrls: [],
      titles: [],
      descriptions: []
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.prevSlide.bind(this);
  }

  componentDidMount() {
    this.fetchContent().then(shows => {
      const imgUrls = shows.map(show => show.slideShowImg);
      const  titles = shows.map(show => show.title);
      const descriptions = shows.map(show => show.description);

      this.setState(prevState => ({
        imgUrls: [... prevState.imgUrls, imgUrls ],
        titles: [... prevState.titles, titles],
        description: [... prevState.description, descriptions]
      }));
    })
  }


  prevSlide() {
    const lastIndex = this.state.imgUrls.length - 1;
    const { imageIndex } = this.state;
    const shouldResetIndex = imageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : imageIndex - 1;

    this.setState({
      imageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = this.state.imgUrls.length - 1;
    const { imageIndex } = this.state;
    const shouldResetIndex = imageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : imageIndex - 1;

    this.setState({
      imageIndex: index
    });
  }

  render(){
    return(
      <div className='carousel'>
        <Arrow
          direction="left"
          click={ this.prevSlide }
          glyph="&#9664;" />
        <Slide
          imgUrl= { this.state.imgUrls[this.state.imageIndex] }
          title={this.state.titles[this.state.imageIndex]}
          description = {this.state.titles[this.state.imageIndex]} />
          <Arrow
            direction="right"
            click={ this.nextSlide }
            glyph="&#9664;" />
      </div>
    )
  }
}

export default Carousel;
