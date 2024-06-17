import { Header, Nav, Footer, Home, NewPost, PostPage, EditPost, About, Missing } from './components';

import { Routes, Route } from 'react-router-dom';

import { DataProvider } from './context/DataContext';

function App() {

    return (
        <div className="App">
            <Header title="Blog" />
            <DataProvider>
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/post" element={<NewPost />} />
                    <Route path="/edit/:id" element={<EditPost />} />
                    <Route path="/post/:id" element={<PostPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Missing />} />
                </Routes>
            </DataProvider>
            <Footer />
        </div>
    );
}

export default App;
