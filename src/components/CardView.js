import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const CardView = (props) => {
    return (
        <div className="CardView">
        <div className="cardTitle">mycat.jpg</div>
          <div className="cardImage" />
            <div className="rating"><b>Number of Followers</b>: 1256</div>
            <div className="rating"><b>Predicted Number of Likes</b>: 50.24</div>
            <div className="rating"><b>Score</b>: <i><b>Above Average</b></i></div>
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
