import api from "./urls/api"

export default ({
  create: (params) => api.post("users", params)
})
