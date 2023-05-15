import axios from "axios"

export const getAllData = async() => {
 const alldata =  (await axios.get('https://645ed14ef9c0732c3430413d.mockapi.io/places')).data
   

}
