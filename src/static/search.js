window.onload = function () {
  document.getElementById("searchTerm").value = "";
  document.getElementById("durationFilter").value = "";
  // document.getElementById("searchButton").addEventListener("click", search);
  // document.getElementById("clearButton").addEventListener("click", clearResults);
}

let prevSearchTerm = "";

function search(event) {
  event.preventDefault();
  const searchTerm = document.getElementById("searchTerm").value;
  if (searchTerm === prevSearchTerm) {
    return;
  }
  prevSearchTerm = searchTerm;

  const url = `https://itunes.apple.com/search?term=${searchTerm}&limit=10`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayResults(data.results))
    .catch(error => console.log(error));
  // displayResults(results);
}

function displayResults(results) {
  const resultList = document.getElementById("results");
  const durationFilter = parseInt(document.getElementById("durationFilter").value);
  let exp = document.getElementById("yes").checked;
  let nonexp = document.getElementById("no").checked;
  resultList.innerHTML = "";

  // if (results.length === 0 || isNaN(durationFilter) || durationFilter < 0) {
  //   const li = document.createElement("li");
  //   li.textContent = "No results found.";
  //   resultList.appendChild(li);
  // } 
  // else
  //  {



   if((durationFilter>0)&&(exp==false)&&(nonexp==false))
   {
    const filteredResults = results.filter(result => durationFilter >= result.trackTimeMillis / 60000);
    if (filteredResults.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No results found.";
      resultList.appendChild(li);
    } else {
      filteredResults.forEach(result => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const album = document.createElement("p");
        const artist = document.createElement("p");
        const audio = document.createElement("audio");
        audio.className = "ab";
        const source = document.createElement("source");
        img.src = result.artworkUrl100;
        album.textContent = result.trackName;
        artist.textContent = result.artistName;
        source.src = result.previewUrl;
        audio.controls = true;

        div.appendChild(album);
        div.appendChild(artist);
        li.appendChild(img);
        li.appendChild(div);
        li.appendChild(audio);
        audio.appendChild(source);
        resultList.appendChild(li);
        // if(result.trackTimeMillis/60000)
        // {
        // console.log(result.trackTimeMillis/60000)
        // }
      });
    }
    }
    else if((durationFilter=="")&&(exp==false)&&(nonexp==false))
   {
    const filteredResults = results;
    if (filteredResults.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No results found.";
      resultList.appendChild(li);
    } else {
      filteredResults.forEach(result => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const album = document.createElement("p");
        const artist = document.createElement("p");
        const audio = document.createElement("audio");
        audio.className = "ab";
        const source = document.createElement("source");
        img.src = result.artworkUrl100;
        album.textContent = result.trackName;
        artist.textContent = result.artistName;
        source.src = result.previewUrl;
        audio.controls = true;

        div.appendChild(album);
        div.appendChild(artist);
        li.appendChild(img);
        li.appendChild(div);
        li.appendChild(audio);
        audio.appendChild(source);
        resultList.appendChild(li);
        // if(result.trackTimeMillis/60000)
        // {
        // console.log(result.trackTimeMillis/60000)
        // }
      });
    }
    }
    else if((durationFilter=="")&&(exp==true)&&(nonexp==false))
   {
    const filteredResults = results.filter(result => result.trackExplicitness="Explicit");
    if (filteredResults.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No results found.";
      resultList.appendChild(li);
    } else {
      filteredResults.forEach(result => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const album = document.createElement("p");
        const artist = document.createElement("p");
        const audio = document.createElement("audio");
        audio.className = "ab";
        const source = document.createElement("source");
        img.src = result.artworkUrl100;
        album.textContent = result.trackName;
        artist.textContent = result.artistName;
        source.src = result.previewUrl;
        audio.controls = true;

        div.appendChild(album);
        div.appendChild(artist);
        li.appendChild(img);
        li.appendChild(div);
        li.appendChild(audio);
        audio.appendChild(source);
        resultList.appendChild(li);
        // if(result.trackTimeMillis/60000)
        // {
        // console.log(result.trackTimeMillis/60000)
        // }
      });
    }
    }
   else if((durationFilter=="")&&(exp==false)&&(nonexp==true))
   {
    const filteredResults = results.filter(result => result.trackExplicitness="notExplicit");
    if (filteredResults.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No results found.";
      resultList.appendChild(li);
    } else {
      filteredResults.forEach(result => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const album = document.createElement("p");
        const artist = document.createElement("p");
        const audio = document.createElement("audio");
        audio.className = "ab";
        const source = document.createElement("source");
        img.src = result.artworkUrl100;
        album.textContent = result.trackName;
        artist.textContent = result.artistName;
        source.src = result.previewUrl;
        audio.controls = true;

        div.appendChild(album);
        div.appendChild(artist);
        li.appendChild(img);
        li.appendChild(div);
        li.appendChild(audio);
        audio.appendChild(source);
        resultList.appendChild(li);
        // if(result.trackTimeMillis/60000)
        // {
        // console.log(result.trackTimeMillis/60000)
        // }
      });
    }
    }
    else if((durationFilter>0)&&(exp==false)&&(nonexp==true))
   {
    const filteredResults = results.filter(result => result.trackExplicitness="notExplicit" && durationFilter>=result.trackTimeMillis/60000);
    if (filteredResults.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No results found.";
      resultList.appendChild(li);
    } else {
      filteredResults.forEach(result => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const album = document.createElement("p");
        const artist = document.createElement("p");
        const audio = document.createElement("audio");
        audio.className = "ab";
        const source = document.createElement("source");
        img.src = result.artworkUrl100;
        album.textContent = result.trackName;
        artist.textContent = result.artistName;
        source.src = result.previewUrl;
        audio.controls = true;

        div.appendChild(album);
        div.appendChild(artist);
        li.appendChild(img);
        li.appendChild(div);
        li.appendChild(audio);
        audio.appendChild(source);
        resultList.appendChild(li);
        // if(result.trackTimeMillis/60000)
        // {
        // console.log(result.trackTimeMillis/60000)
        // }
      });
    }
    }
    else if ((durationFilter>0)&&(exp==true)&&(nonexp==false))
    {
     const filteredResults = results.filter(result => result.trackExplicitness="Explicit" && durationFilter>=result.trackTimeMillis/60000);
     if (filteredResults.length === 0) {
       const li = document.createElement("li");
       li.textContent = "No results found.";
       resultList.appendChild(li);
     } else {
       filteredResults.forEach(result => {
         const li = document.createElement("li");
         const img = document.createElement("img");
         const div = document.createElement("div");
         const album = document.createElement("p");
         const artist = document.createElement("p");
         const audio = document.createElement("audio");
         audio.className = "ab";
         const source = document.createElement("source");
         img.src = result.artworkUrl100;
         album.textContent = result.trackName;
         artist.textContent = result.artistName;
         source.src = result.previewUrl;
         audio.controls = true;
 
         div.appendChild(album);
         div.appendChild(artist);
         li.appendChild(img);
         li.appendChild(div);
         li.appendChild(audio);
         audio.appendChild(source);
         resultList.appendChild(li);
         // if(result.trackTimeMillis/60000)
         // {
         // console.log(result.trackTimeMillis/60000)
         // }
       });
     }
     }



  



  document.getElementById("durationFilter").value = "";
  document.getElementById("yes").checked = false;
  document.getElementById("no").checked = false;


  // if(resultList[0]=="No results found.")
  // {
  //   // document.getElementById("results").innerHTML = ""; 
  //   resultList.remove(li);
  // }
}

function clearResults() {
  document.getElementById("searchTerm").value = "";
  document.getElementById("durationFilter").value = "";
  document.getElementById("results").innerHTML = "";
  document.getElementById("yes").checked = false;
  document.getElementById("no").checked = false;
  prevSearchTerm = "";
}





// const searchInput = document.getElementById("search-input");
// const searchButton = document.getElementById("search-button");
// const resultsContainer = document.querySelector('#results-container');
// const durationFilter = document.querySelector('#duration-filter');
// const explicitFilter = document.querySelector('#explicit-filter');

// // Function to fetch data from iTunes API
// const fetchData = async (searchInput) => {
//   const response = await fetch(`https://itunes.apple.com/search?term=${searchInput}&limit=10`);
//   const data = await response.json();
//   return data.results;
// }

// // Function to render results to the page
// const renderResults = (results) => {
//   // Clear previous results
//   resultsContainer.innerHTML = '';

//   if (results.length === 0) {
//     resultsContainer.textContent = 'No results found';
//     return;
//   }

//   // Render each result
//   results.forEach(result => {
//     const resultDiv = document.createElement('div');
//     resultDiv.classList.add('result');

//     const trackName = document.createElement('h2');
//     trackName.textContent = result.trackName;

//     const artistName = document.createElement('p');
//     artistName.textContent = result.artistName;

//     const albumImage = document.createElement('img');
//     albumImage.src = result.artworkUrl100;

//     const audioPlayer = document.createElement('audio');
//     audioPlayer.controls = true;
//     audioPlayer.src = result.previewUrl;

//     resultDiv.appendChild(trackName);
//     resultDiv.appendChild(artistName);
//     resultDiv.appendChild(albumImage);
//     resultDiv.appendChild(audioPlayer);

//     resultsContainer.appendChild(resultDiv);
//   });
// }

// // Event listener for search button
// searchButton.addEventListener('click', async () => {
//   const searchTerm = searchInput.value;
//   const results = await fetchData(searchTerm);
//   renderResults(results);

//   const filterResults = () => {
//     // Event listener for filters
//     const durationValue = Number(durationFilter.value);
//     const explicitValue = explicitFilter.value;
//     let filteredResults = resultsContainer.querySelectorAll('.result');

//     // Filter by duration
//     if (durationValue) {
//       filteredResults = Array.from(filteredResults).filter(result => {
//         const durationInSeconds = result.querySelector('audio').duration;
//         const durationInMinutes = durationInSeconds / 60;
//         return durationInMinutes <= durationValue;
//       });
//     }

//     // Filter by explicitness
//     if (explicitValue !== '') {
//       filteredResults = Array.from(filteredResults).filter(result => {
//         return result.querySelector('p').textContent.toLowerCase().includes(explicitValue);
//       });
//     }

//     // Render filtered results
//     resultsContainer.innerHTML = '';
//     filteredResults.forEach(result => {
//       resultsContainer.appendChild(result);
//     });

//     if (filteredResults.length === 0) {
//       resultsContainer.textContent = 'No results found';
//     }
//   }

//   durationFilter.addEventListener('input', filterResults);
//   explicitFilter.addEventListener('change', filterResults);

//   filterResults();
// });





// const searchInput = document.querySelector("#search-input");
// const searchButton = document.querySelector("#sbtn");
// const resultsContainer = document.querySelector("#results");
// const durationFilter = document.querySelector("#duration-filter");
// const explicitFilter = document.querySelector("#explicit-filter");
// const filterButton = document.querySelector("#filter-btn");
// const clearButton = document.querySelector("#clearButton");

// let results = [];

// // Function to fetch data from iTunes API
// const fetchData = async (searchInput) => {
//   const response = await fetch(`https://itunes.apple.com/search?term=${searchInput}&limit=10`);
//   const data = await response.json();
//   results = data.results;
// }

// // Function to render results to the page
// const renderResults = () => {
//   // Clear previous results
//   resultsContainer.innerHTML = '';

//   if (results.length === 0) {
//     resultsContainer.textContent = 'No results found';
//     return;
//   }

//   // Render each result
//   results.forEach(result => {
//     const resultItem = document.createElement('li');
//     const trackName = document.createElement('h2');
//     const artistName = document.createElement('p');
//     const albumImage = document.createElement('img');
//     const audioPlayer = document.createElement('audio');

//     trackName.textContent = result.trackName;
//     artistName.textContent = result.artistName;
//     albumImage.src = result.artworkUrl100;
//     audioPlayer.controls = true;
//     audioPlayer.src = result.previewUrl;

//     resultItem.appendChild(trackName);
//     resultItem.appendChild(artistName);
//     resultItem.appendChild(albumImage);
//     resultItem.appendChild(audioPlayer);

//     resultsContainer.appendChild(resultItem);
//   });
// }

// // Event listener for search button
// searchButton.addEventListener('click', async () => {
//   const searchTerm = searchInput.value;
//   await fetchData(searchTerm);
//   renderResults();
// });

// // Function to filter results
// const filterResults = () => {
//   // Get current results
//   let filteredResults = [...results];

//   // Filter by duration
//   const durationValue = Number(durationFilter.value);
//   if (durationValue) {
//     filteredResults = filteredResults.filter(result => {
//       const durationInSeconds = result.trackTimeMillis / 1000;
//       const durationInMinutes = durationInSeconds / 60;
//       return durationInMinutes <= durationValue;
//     });
//   }

//   // Filter by explicitness
//   const explicitValue = explicitFilter.value;
//   if (explicitValue !== '') {
//     filteredResults = filteredResults.filter(result => {
//       return result.trackExplicitness.toLowerCase() === explicitValue;
//     });
//   }

//   // Render filtered results
//   results = filteredResults;
//   renderResults();
// }

// // Event listener for filter button
// filterButton.addEventListener('click', filterResults);

// // Event listener for clear button
// clearButton.addEventListener('click', () => {
//   searchInput.value = '';
//   durationFilter.value = '';
//   explicitFilter.value = '';
//   results = [];
//   renderResults();
// });
