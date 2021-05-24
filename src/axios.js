import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-backenddeploy.herokuapp.com"
})

export default instance