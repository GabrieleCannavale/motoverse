import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css"
import { useSelector } from 'react-redux';
import { getPosts } from '../../redux/postSlice';
import './mapBox.css'
import markerIconUrl from './marker.png';

const MapBox = () => {
  const [markers, setMarkers] = useState([]);


  const { postsArrayRedux } = useSelector((state) => state.posts)

  useEffect(() => {
    getPosts();

    getArrayCoordinatesFromPosts();


    console.log(markers);
  }, [postsArrayRedux]);


  const getArrayCoordinatesFromPosts = async () => {
    try {
      const data = [];
      await Promise.all(postsArrayRedux.map(async (post) => {
        const response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${post.startingPoint}&lang=it&limit=1&type=street&format=json&apiKey=${process.env.REACT_APP_GEOCODING}`)
        const places = await response.json()

        data.push(places)
      }));

      const mergeData = data.map((singleData) => {
        return {
          lat: singleData.results[0].lat,
          lon: singleData.results[0].lon
        }
      });
      console.log(mergeData)
      setMarkers(mergeData)
      return mergeData
    } catch (error) {
      console.log(error);
    }
  }

  const markerIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [25, 41],
  });

  return (
    <div style={{ height: "100vh", width: "100%", position: '-webkit-sticky', top: '50px' }}>
      <MapContainer center={[41.8719, 12.5674]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((position, idx) => (
          <Marker key={`marker-${idx}`} position={position} icon={markerIcon}>
            <Popup>
              <span>Informazioni sul marker</span>
            </Popup>
          </Marker>
        )
        )}
      </MapContainer>

    </div>
  );
};

export default MapBox;