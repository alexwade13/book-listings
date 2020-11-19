import './App.css';
import React, {useState} from 'react';
import BookListing from './BookListing.js'

function App() {

  // see https://repl.it/@Dotdash/Goodreads-Server-Express for implementation details
  

  // let seachButton = document.getElementsByTagName('button')[0]

  const [listings, setListings] = useState([]);

  const search = (e) => {
    e.preventDefault()
  
    let input = document.getElementsByTagName('input')[0]
    let term = input.value || ""
    const apiUrl = `https://goodreads-server-express--dotdash.repl.co/search/${term}`;

    fetch(apiUrl).then((res) => {
      return res.json()
    }).then(resJson => {
      console.log("what???",resJson,"")
      setListings(resJson.list)
    }).catch((error) => {
      console.log(listings,error)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <form>
            <input />
            <button onClick={search}>Search</button>
          </form>
          
          <ul>
            { listings.map((listing, i) => {
              return (
                <li key={i}>
                  <BookListing  listing={listing}/>
                </li>
              )
            })
              
            }
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
