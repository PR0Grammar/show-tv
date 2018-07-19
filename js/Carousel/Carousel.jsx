import React from 'react';
import Slide from './Slide';
import Arrow from './Arrow';
import preload from '../../data.json';

class Carousel extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      imageIndex: 0,
      imgUrls: [],
      titles: [],
      descriptions: []
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  componentDidMount() {
    Promise.resolve(preload.shows) // mimick GET request
    .then(shows => {
      const imgUrls = shows.map(show => show.slideShowImg)
      const titles = shows.map(show => show.title)
      const descriptions = shows.map(show => show.description)
      this.setState(prevState => ({
              imgUrls: [... prevState.imgUrls, ...imgUrls ],
              titles: [... prevState.titles, ... titles],
              description: [... prevState.descriptions, ... descriptions]
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
    const index =  shouldResetIndex ? 0 : imageIndex + 1;

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
          arrow="&#9664;" />
        <Slide
          imgUrl= { `../../public/img/slideshow/${this.state.imgUrls[this.state.imageIndex]}` }
          title={this.state.titles[this.state.imageIndex]}
          description = {this.state.descriptions[this.state.imageIndex]} />
        <Arrow
          direction="right"
          click={ this.nextSlide }
          arrow="&#9654;" />
      </div>
    )
  }
}

export default Carousel;
