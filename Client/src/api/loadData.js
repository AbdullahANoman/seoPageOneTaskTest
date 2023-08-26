export const loadIncomplete = async () =>{
    const url = "https://seo-page-one-task-abdullahanoman.vercel.app/incomplete"

    const res = await fetch(url)
    const data = await res.json()
    return data ;
}

export const loadTodo = async () =>{
    const url = "https://seo-page-one-task-abdullahanoman.vercel.app/todo"

    const res = await fetch(url)
    const data = await res.json()
    return data ;
}

export const loadDoing = async () =>{
    const url = "https://seo-page-one-task-abdullahanoman.vercel.app/doing"

    const res = await fetch(url)
    const data = await res.json()
    return data ;
}

export const loadUnderReview = async () =>{
    const url = "https://seo-page-one-task-abdullahanoman.vercel.app/underReview"

    const res = await fetch(url)
    const data = await res.json()
    return data ;
}

export const loadCompleted = async () =>{
    const url = "https://seo-page-one-task-abdullahanoman.vercel.app/completed"

    const res = await fetch(url)
    const data = await res.json()
    return data ;
}