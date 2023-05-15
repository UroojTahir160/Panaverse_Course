"use strict";
function make_album(artistName, albumTitle, tracksNum) {
    if (tracksNum !== undefined) {
        return {
            artist_name: artistName,
            album_title: albumTitle,
            track_number: tracksNum,
        };
    }
    else {
        return {
            artist_name: artistName,
            album_title: albumTitle,
        };
    }
}
const album1 = make_album("Urooj", "The Rock", 3);
console.log(album1);
const album2 = make_album("Aurad", "The Magician");
console.log(album2);
const album3 = make_album("Ahmad", "The Superstar", 5);
console.log(album3);
