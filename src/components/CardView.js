import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const CardView = (props) => {
    return (
        <div className="CardView">
        <div className="cardTitle">mycat.jpg</div>
          <div className="cardImage" />
            <div className="rating"><b>Engagement Value</b>: 9999999</div>
            <Link to="https://www.instagram.com/">
                <div className="cardButton1">
                    <div className="buttonText">
                        upload to instagram
                    </div>
                </div>
            </Link>
            <Link to="/">
                <div className="cardButton2">
                    <div className="buttonText">
                        upload another image
                    </div>
                </div>
            </Link>
        </div>
    );
  };

export default CardView
