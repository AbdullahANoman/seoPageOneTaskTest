export const updateIncompleteCount = async(id,value) =>{
    const url = `https://seo-page-one-task-abdullahanoman.vercel.app/updateIncompleteCount/${id}`

    const res = await fetch(url,{
        method : 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(value)
    })
    const data = await res.json() 
    return data 
}


export const updateToDoCount = async(id,value) =>{
    const url = `https://seo-page-one-task-abdullahanoman.vercel.app/updateToDoCount/${id}`

    const res = await fetch(url,{
        method : 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(value)
    })
    const data = await res.json() 
    return data 
}

export const updateDoingCount = async(id,value) =>{
    const url = `https://seo-page-one-task-abdullahanoman.vercel.app/updateDoingCount/${id}`

    const res = await fetch(url,{
        method : 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(value)
    })
    const data = await res.json() 
    return data 
}
export const updateReviewCount = async(id,value) =>{
    const url = `https://seo-page-one-task-abdullahanoman.vercel.app/updateReviewCount/${id}`

    const res = await fetch(url,{
        method : 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(value)
    })
    const data = await res.json() 
    return data 
}

export const updateCompletedCount = async(id,value) =>{
    const url = `https://seo-page-one-task-abdullahanoman.vercel.app/updateCompletedCount/${id}`

    const res = await fetch(url,{
        method : 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(value)
    })
    const data = await res.json() 
    return data 
}