import Axios from "axios";

export const personalAPI = async (data) => {
  try {
    const response = await Axios.post(
      `https://run.mocky.io/v3/892bc38b-c7e2-4432-a478-2eac4df57942`,
      data
    );

    return response;

  } catch (error) {
    console.log(error);
  }
};

export const businessAPI = async (data) => {
  try {
    const response = await Axios.post(
      `https://run.mocky.io/v3/e1724715-51d4-4ed2-b20f-cd3c59659e47`,
      data
    );

    return response;
        
  } catch (error) {
    console.log(error);
  }
};
