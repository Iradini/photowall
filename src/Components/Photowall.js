import React from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FaPlusCircle} from 'react-icons/fa';

function PhotoWall(props) {
    return (
        <div>

            <Link className="add-icon" to="/AddPhoto"><i className="fas fa-plus-circle fa-lg"></i></Link>
            <div className="photo-grid">
                {props.posts
                .sort(function(x,y) {
                    return y.id - x.id
                })
                .map((post, index)  => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
            </div>
        </div>
    )}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall