import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//Import configs
import creatorConfig from '../../assets/configs/creatorConfig.json';

//Import scripts
import dragElement from '../../assets/scripts/dragElement';

//Import other components
import MapField from './MapField';


interface IMap {
  mapSize: {
    x: number,
    y: number
  },
  mapPic: string
}

const Map: React.SFC<IMap> = ({ mapSize, mapPic }) => {
  const fieldSize = creatorConfig.map.fieldSize;

  const mapStyles = {
    width: `${mapSize.x * fieldSize}px`,
    height: `${mapSize.y * fieldSize}px`,
    backgroundImage: `url('${mapPic}')`
  }

  const mapFields = [...Array(mapSize.x*mapSize.y)].map((el, index) => {
    return <MapField key={index}/>
  })

  useEffect(() => {
    dragElement(document.getElementById("map"));
  })

  return (
    <main className="map" style={mapStyles} id="map">
        {mapFields}
    </main>
  );
}


const mapStateToProps = state => {
  return {
    mapSize: state.map.size,
    mapPic: state.map.mapPic
  }
}


export default connect(mapStateToProps)(Map);