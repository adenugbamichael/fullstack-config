import './App.css'
import { CreatePost } from './components/CreatePost.jsx'
import { PostFilter } from './components/PostFilter.jsx'
// import { Post } from './components/Post.jsx'
import { PostList } from './components/PostList.jsx'
import { PostSorting } from './components/PostSorting.jsx'

const posts = [
  {
    title: 'React Projects',
    contents: "Let's become react developers!",
    author: 'Michael Adenugba',
  },
  { title: 'Hello React' },
]

export function App() {
  return (
    <div style={{ padding: 8 }}>
      <CreatePost />
      <br />
      <hr />
      Filter by:
      <PostFilter field='author' />
      <br />
      <PostSorting fields={['createdAt', 'updatedAt']} />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}

export default App
