import React, { Component } from 'react'
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavouriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

export default class SwipeButtons extends Component {
    render() {
        return (
            <div className="swipeButtons">
                <IconButton className="swipeButton_repeat">
                    <ReplayIcon fontSize="large" />
                </IconButton>
                <IconButton className="swipeButton_close">
                    <CloseIcon fontSize="large"/>
                </IconButton>
                <IconButton className="swipeButton_star">
                    <StarRateIcon fontSize="large"/>
                </IconButton>
                <IconButton className="swipeButton_fav">
                    <FavouriteIcon fontSize="large"/>
                </IconButton>
                <IconButton className="swipeButton_flash">
                    <FlashOnIcon fontSize="large"/>
                </IconButton>
            </div>
        )
    }
}
