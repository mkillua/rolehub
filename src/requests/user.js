import api from "./urls/api"

export default ({
  create: (params) => api.post("/users", params),
  authenticate: (params) => api.post("/login", params),
})
