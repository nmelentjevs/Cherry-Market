import React from 'react';

export default function Slider() {
  return (
    <div className="slider">
      <div
        id="slider"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" />
          <div className="carousel-item" />
          <div className="carousel-item" />
          <div className="carousel-item" />
        </div>
        <ol className="carousel-indicators">
          <li data-target="#slider" data-slide-to="0" className="active" />
          <li data-target="#slider" data-slide-to="1" />
          <li data-target="#slider" data-slide-to="2" />
          <li data-target="#slider" data-slide-to="3" />
        </ol>
      </div>
    </div>
  );
}
