import logo from './logo.svg';
import "./App.css";
//  import Layout from './Components/Layout/Layout';
 import Router from "./Components/Router/Router";
import Layout from './Components/Layout/layout';
import Header from './Components/Layout/header';
import Footer from './Components/Layout/footer';
 
 function App() {
  return (
    // <Layout>

     <div className='App'>
      <div className='App-header' >
        <Header />
      { <Router /> }

         <img src={logo} className="App-logo" alt="logo" />
       <h4>이제 react  블로그 환경 셋팅 끝</h4>
      </div> 

<Footer />

    </div>


    // </Layout>

  );
}


export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn  React
//         </a>
//       </header>
//     </div>
//   );
// }


