import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {

  const [blogs,setBlogs]=useState([])

  useEffect(()=>{
    const savedBlogs=getBlogs();
    setBlogs(savedBlogs)

  },[])

  const handleDelete=id=>{
    deleteBlog(id);
    const savedBlogs=getBlogs();
    setBlogs(savedBlogs)
  }

  if (blogs.length < 1) {
   return <EmptyState   message='No Bookmarks Found'
    address='/blogs'
    label='Browse Blogs'></EmptyState>
  }



    return (
        <div className="container mx-auto py-6 space-y-6 sm:space-y-12">
         <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {
                blogs.map(blog=> <BlogCard deletable={true} handleDelete={handleDelete} key={blog.id} blog={blog}></BlogCard>)
             }
        
            </div>
            
        </div>
    );
};

export default Bookmarks;