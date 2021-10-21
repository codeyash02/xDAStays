import axios from 'axios';

const fetchFunction = (type, path,  data, header, replaceurl) => {
 
const baseUrl = `http://localhost:4000/`
  return axios({
    method: type,
    url: baseUrl+path,
    headers:{
      "Content-Type": 'application/json',
   
    },
    data
  }).then((data)=>{
    return data
  }).catch((e)=>{
    return e.response
  })

}
export default fetchFunction;
