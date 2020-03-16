import axios from 'axios'

axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export const get = ({
    url
    
}) => {
    return axios({
        url,
      
    })
    .then((result)=>{
        return result.data
    })
    .catch((err)=>{
        return err.message
    })
}