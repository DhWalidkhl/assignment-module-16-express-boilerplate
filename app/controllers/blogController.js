//Create Route Controller
export const createBlog = (req, res) => {
    res.json({message: `Blog Created Successfully`})
}

//Read Route Controller
export const readBlog = (req, res) => {
    res.json({message: `Blog Read Successfully`})
}


//Update Route
export const updateBlog = (req, res) => {
    res.json({message: `Blog Updated Successfully`})
}

//Delete Route
export const deleteBlog = (req, res) => {
    res.json({message: `Blog Deleted Successfully`})
}