import React from 'react';

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };
  static getDerivedStateFromProps({ media }) {
    let photos = [
      'http://placecorgi.com/600/600',
    ];
    if (media.lenght) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }
  handelIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="anaima" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handelIndexClick}
              data-index={index}
              src={photo}
              className={
                index === active ? 'active' : ''
              }
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
