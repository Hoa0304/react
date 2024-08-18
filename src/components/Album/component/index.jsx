import React from "react";
import PropTypes from "prop-types";

AlbumList.propTypes = {
    albumList : PropTypes.array.isRequired
};


function AlbumList({ albumList }) {
    // const {} = todoList;    nếu nhìu props
    return (
        <ul className="album-list">
            {albumList.map(album => (
                <li key={album.id}>
                    <p className="album-title">{album.name}</p>
                    <div className="album-artist">
                        <img src= {album.thumbnaiURL} alt={album.name} />
                       </div>
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;
