  import React, { useEffect } from 'react';

  const Map = () => {
    useEffect(() => {
      const loadMapScript = () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = `https://www.bing.com/api/maps/mapcontrol?callback=initMap&key=AkRfb75WTat5KTJVX5QtJvNJKW7fPr6EGVMkTPLSTrot0fD6mzW3BMpVh1tkkjWN`;

        document.head.appendChild(script);
      };

      const initMap = () => {
        const map = new window.Microsoft.Maps.Map('.map', {
          credentials: 'AkRfb75WTat5KTJVX5QtJvNJKW7fPr6EGVMkTPLSTrot0fD6mzW3BMpVh1tkkjWN',
          center: new window.Microsoft.Maps.Location(35.7137137137, 51.713713713),
          zoom: 13,
        });

        // Generate random locations
        const locations = generateRandomLocations(500, map.getBounds());

        window.Microsoft.Maps.loadModule('Microsoft.Maps.HeatMap', () => {
          const heatmap = new window.Microsoft.Maps.HeatMapLayer(locations, { intensity: 1 });
          map.layers.insert(heatmap);
        });
      };

      const generateRandomLocations = (count, bounds) => {
        const locations = [];
        const minLat = bounds.getSouth();
        const maxLat = bounds.getNorth();
        const minLon = bounds.getWest();
        const maxLon = bounds.getEast();

        for (let i = 0; i < count; i++) {
          const lat = Math.random() * (maxLat - minLat) + minLat;
          const lon = Math.random() * (maxLon - minLon) + minLon;
          locations.push(new window.Microsoft.Maps.Location(lat, lon));
        }

        return locations;
      };

      // Load the Microsoft Maps script and initialize the map
      loadMapScript();

      // Set a timeout to check if the Microsoft.Maps object is available
      const checkMapsAvailability = () => {
        if (window.Microsoft && window.Microsoft.Maps) {
          initMap();
        } else {
          setTimeout(checkMapsAvailability, 100);
        }
      };

      checkMapsAvailability();
    }, []);

    return (<>
            <div className="map"></div>
      <p>testalise</p>
    </>
      )
  };

  export default Map;
