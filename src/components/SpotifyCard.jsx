import { useEffect, useState } from "react";

export default function SpotifyCard() {
  const [spotify, setSpotify] = useState(null);

  useEffect(() => {
    fetch("https://api.lanyard.rest/v1/users/190386686956535810")
      .then(res => res.json())
      .then(data => {
        if (data.data && data.data.spotify) {
          setSpotify(data.data.spotify);
        }
      });
  }, []);

  if (!spotify) return <section className="spotify-card">Not Listening</section>;

  return (
    <section className="spotify-card">
      <h2>Now Playing</h2>
      <p>{spotify.song} - {spotify.artist}</p>
      <img src={spotify.album_art_url} alt="Album Art" width="100" />
    </section>
  );
}
