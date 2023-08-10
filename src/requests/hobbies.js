import api from "./urls/api"

export default ({
  list: (params) => api.get("hobbies", params),
})
