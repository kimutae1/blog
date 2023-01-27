import React  from 'react';
import { TopNav, SearchAndToggler, PostHeader, PostContent, SideNav, PageDimmer, Masonry, NotFound, Footer } from './element/';
//import { Route, Switch } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

class App extends element {
  render() {
    return (
       <div>
         {/* <TopNav />
         <SearchAndToggler />
         <PageDimmer />

        <SideNav> */}
          {/* <Route path='/' element={PostHeader} /> */}
          <Routes>
            {/* <Route path='/search/:query' element={< Masonry />} />
            <Route path='/category/:query' element={< Masonry />} />
            <Route path='/PageNotFound' exact element={<NotFound />} />
            <Route path='/:postId' element={< PostContent />} /> */}
            <Route path='/'  element={< PostContent /> } />
          </Routes>
          <Footer />
        {/* </SideNav> */}
      </div>
    )
  }
};

export default App
