import React from "react";
import AlbumList from "./component";

AlbumFeature.propTypes = {}

function AlbumFeature(props) {
    const albumList = [
        { id: 1, name: "Task 1", thumbnaiURL: "https://vn.pikbest.com/backgrounds/lit-colored-up-image-of-a-music-wave_9453862.html" },
        { id: 2, name: "Task 2", thumbnaiURL: "https://taoanhdep.com/nhan/anh-dep/" },
        { id: 3, name: "Task 3", thumbnaiURL: "https://mytour.vn/vi/blog/bai-viet/hinh-nen-am-nhac-phong-nen-am-nhac-dep-nhat.html"}
    ]

    return (
        <div>
            <AlbumList albumList={albumList}/>
        </div>
    )
}

export default AlbumFeature;