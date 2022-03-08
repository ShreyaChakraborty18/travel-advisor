// import axios from 'axios';

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'


// export const getPlacesData = async (sw, ne) => {
//     try{
//         const { data: { data } } = await axios.get(URL, {
        
//               params: {
//                 bl_latitude: sw.lat,
//                 tr_latitude: ne.lat,
//                 bl_longitude: sw.lng,
//                 tr_longitude: ne.lng,
//               },
//               headers: {
//                 'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//                 'x-rapidapi-key': '3871e1bfafmsh9e2033f1c711c2fp1b39f9jsnd9e95403585a'
//               }
//             });
//         return data;
//     }catch (error) {
//         console.log(error)
//     }
// }




// import axios from 'axios';

// //const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


// export const getPlacesData = async (type, sw, ne) => {
//     try{
//         //const { data: { data } } = await axios.get(URL, options);
//         const { data : {data} } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
//           params: {
//             bl_latitude: sw.lat,
//             tr_latitude: ne.lat,
//             bl_longitude: sw.lng,
//             tr_longitude: ne.lng,
//           },
//           headers: {
//             'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//             'x-rapidapi-key': '3871e1bfafmsh9e2033f1c711c2fp1b39f9jsnd9e95403585a'
//           }
//         });
//         return data;
//     }catch (error) {
//         console.log(error)
//     }
// }

import axios from 'axios';

export const getPlacesData = async (type,sw, ne) => {
  try {
    //const { data: { data } } = await axios.get(URL, options);
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '3871e1bfafmsh9e2033f1c711c2fp1b39f9jsnd9e95403585a'
      }
    });
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const getWeatherData = async (lat,lng) => {
  try {
    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find',{
      params: {lon: lng,lat: lat, },
      headers: {
                    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                    'x-rapidapi-key': '3871e1bfafmsh9e2033f1c711c2fp1b39f9jsnd9e95403585a'
                  }
    });
    return data;
  } catch (error) {
    console.log(error)
  }
}

