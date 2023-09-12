import React, { useState } from 'react';
import { YMaps, Map, Placemark, Clusterer, ZoomControl } from '@pbe/react-yandex-maps';

import {operators} from '../data/operators'


const MapComponent = () => {





 
  const [selectedOperators, setSelectedOperators] = useState([]);

  const handleOperatorToggle = (operatorId) => {
    if (selectedOperators.includes(operatorId)) {
      setSelectedOperators(selectedOperators.filter((id) => id !== operatorId));
    } else {
      setSelectedOperators([...selectedOperators, operatorId]);
    }
  };




  return (
    <div className="map-container">
    <YMaps>
      <Map
        defaultState={{ center: [42.349170, 69.606002], zoom: 13 }}
        style={{ width: '100%', height: '615px' }}
      >
        <Clusterer
          options={{
            preset: "islands#invertedVioletClusterIcons",
            clusterDisableClickZoom: true,
            groupByCoordinates: false,
          }}
        >
           {operators.map((operator) => {
            if (selectedOperators.includes(operator.id)) {
               return operator.points.map((point) => (
                  <Placemark
                    key={point.id}
                    geometry={point.coordinates}
                    properties={{
                      balloonContent: point.name,
                    }}
                    options={{
                      iconLayout: 'default#image',
                      iconImageHref: operator.pointIcon,
                      iconImageSize: [100, 100],
                      iconImageOffset: [-24, -48],
                    }}
                  />
                ))
                  }
                return null
              })}
        </Clusterer>
        <ZoomControl options={{ float: 'right' }} />
      </Map>
    </YMaps>
    <div className="filter-container">
      <p style={{marginTop: "20px",  fontSize: "24px", fontWeight: "600", textAlign: 'center'}}>Карта сетей</p>
      <div style={{display: "grid", marginTop: "-110px"}}>
        <label style={{marginRight: "30px", marginLeft: "10px"}}>
          <input
            type="checkbox"
            checked={selectedOperators.includes(1)}
            onChange={() => handleOperatorToggle(1)}
          />
          Kcell 5G
        </label>
        <label style={{marginRight: "30px", marginLeft: "10px"}}>
          <input
            type="checkbox"
            checked={selectedOperators.includes(2)}
            onChange={() => handleOperatorToggle(2)}
          />
          Kcell БС
        </label>
        <label style={{marginRight: "30px", marginLeft: "10px", alignItems: "center"}}>
          <input
            type="checkbox"
            checked={selectedOperators.includes(3)}
            onChange={() => handleOperatorToggle(3)}
          />
          Қар-Тел БС 
        </label>
        <label style={{marginRight: "30px", marginLeft: "10px", alignItems: "center"}}>
          <input
            type="checkbox"
            checked={selectedOperators.includes(4)}
            onChange={() => handleOperatorToggle(4)}
          />
          Строительство новых сетей
        </label>
        {/* Добавьте другие галочки для других операторов */}
      </div>
    </div>
    </div>
  );
};


export default MapComponent