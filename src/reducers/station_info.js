import { FETCH_STATION_ETD } from '../actions';

const Ajv = require('ajv');
const ajv = new Ajv();

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_STATION_ETD:
      const schema = {
        "type": "object",
        "properties": {
          "?xml": {
            "type": "object"
          },
          "root": {
            "type": "object",
            "properties": {
              "date": {
                "type": "string"
              },
              "time": {
                "type": "string"
              },
              "station": {
                "type": "array",
                "items": {
                  "properties": {
                    "name": { "type": "string" },
                    "abbr": { "type": "string" },
                    "etd": { "type": "array" }
                  },
                  "required": ["etd"]
                }
              }
            },
            "required": ["station"]
          }
        }
      };
      const isDataValid = ajv.validate(schema, action.payload.data);
      if (isDataValid) {
        const etd = action.payload.data.root.station[0].etd;
        const now = new Date(`${action.payload.data.root.date} ${action.payload.data.root.time}`);
        return etd.map(destination => {
          destination.estimate.map(estimate => {
            if (!isNaN(parseInt(estimate.minutes, 10))) estimate.time = new Date(now.getTime() + estimate.minutes*60000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            else estimate.time = estimate.minutes;
            return estimate;
          })
          return destination;
        });
      }
      return [];
    default: break;
  }
  return state;
}