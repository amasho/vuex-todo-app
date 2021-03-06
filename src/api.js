import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

const api = {
  async read () {
    try {
      const res = await axios.get('/todos')
      return res.data
    } catch (e) {
      console.error(e)
    }
  },
  async add (value) {
    try {
      axios.post('/todos', value).then(function (res) {
        console.log(res.statusText)
      })
    } catch (e) {
      console.log(e)
    }
  },
  async remove (id) {
    try {
      axios.delete('/todos/' + id).then(function (res) {
        console.log(res.statusText)
      })
    } catch (e) {
      console.log(e)
    }
  },
  async edit (value) {
    try {
      axios.put('/todos/' + value.id, value).then(function (res) {
        console.log(res.statusText)
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export default api
