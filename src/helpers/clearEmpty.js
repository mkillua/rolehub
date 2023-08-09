
const clearEmpty = (obj, deep = true) => {
    Object.keys(obj).forEach(key => {
        if(obj[key] === undefined || obj[key] === '' || obj[key] === null) delete obj[key]
        if(deep && typeof obj[key] === 'object') obj[key] = clearEmpty(obj[key])
    })

    return obj
}

export default clearEmpty