import React from 'react';
import Slide from './Slide';
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
              descriptions: [... prevState.descriptions, ... descriptions]
      }));
    })

  this.autoNextSlide = setInterval(() => this.nextSlide(), 8000);
  }

  componentWillUnmount() {
    clearInterval(this.autoNextSlide)
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
        <Slide
          imgUrl= { `../../public/img/slideshow/${this.state.imgUrls[this.state.imageIndex]}` }
          title={this.state.titles[this.state.imageIndex]}
          leftArrowClick = {this.prevSlide}
          rightArrowClick = {this.nextSlide}
          description = {this.state.descriptions[this.state.imageIndex]} />
      </div>
    )
  }
}

export default Carousel;
