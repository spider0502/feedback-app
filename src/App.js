import { React, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header text='This is a header!'></Header>
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm></FeedbackForm>
                                <FeedbackStats></FeedbackStats>
                                <FeedbackList></FeedbackList>
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<AboutPage />}></Route>
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}
// function App() {
//     const title = 'Blog Post'
//     const body = 'This is my blog post'
//     const comments = [
//         { id: 1, text: 'comment one' },
//         { id: 2, text: 'comment two' },
//         { id: 3, text: 'comment three' }
//     ]

//     const loading = false
//     const showComments = false
//     if (loading)
//         return <h1>Loading...</h1>

//     const commentBlock = (<div className="comments">
//         <h3>Comments ({comments.length})</h3>
//         <ul>
//             {comments.map((comment, index) => (
//                 <li key={index}>{comment.text}</li>
//             ))}
//         </ul>
//     </div>)

//     return (
//         <div className='container'>
//             <h1>{title}</h1>
//             <h2>{body}</h2>

//             {showComments && commentBlock}

//         </div>
//     )
// }

export default App
