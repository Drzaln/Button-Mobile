import axios from "axios";
import url from "../../../misc/url";

export const getPattern = () => {
    return {
      type: "GET_PATTERN",
      payload: axios.get(url + "pattern", {
        headers: {
          authorization: "x-app"
        }
      })
    };
  };
  
  export const getPatternActive = () => {
    return {
      type: "GET_PATTERN_ACTIVE",
      payload: axios.get(url + "pattern/active", {
        headers: {
          authorization: "x-app"
        }
      })
    };
  };
  
  export const insertPattern = data => {
      console.log('ini id', data)
    return {
      type: "INSERT_PATTERN",
      payload: axios.post(url + "pattern", data[0], {
        headers: {
          authorization: "x-app"
        }
      })
    };
  };
  export const updatePattern = id_pattern => {
      
      return {
        type: "ACTIVE_PATTERN",
        payload: axios.patch(url + `pattern/${id_pattern}`, {
          headers: {
            authorization: "x-app"
          }
        })
      };
    };