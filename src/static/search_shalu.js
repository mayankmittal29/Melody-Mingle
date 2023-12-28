const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const durationInput = document.getElementById("duration-input");
const searchResults = document.getElementById("search-results");
const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", () => {
  durationInput.value = "";
  document.getElementById("yes").checked = false;
  searchForm.dispatchEvent(new Event("submit"));
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var exp;
  if (document.getElementById("yes").checked) {
    exp = "yes";
  } else {
    exp = "no";
  }
  // console.log(exp)
  const searchTerm = searchInput.value;
    var durationTerm = durationInput.value;
    if(durationTerm == 0)
    {
        durationTerm=100000;
    }
  const url = `https://itunes.apple.com/search?term=${searchTerm}&entity=song&limit=10&explicit=${exp}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        searchResults.innerHTML = "";
        const table = document.createElement("table");
        let row = document.createElement("tr");
        let count = 0;
        data.results.forEach((result) => {

        const trackName = result.trackName;
        const artistName = result.artistName;
        var trackTime = result.trackTimeMillis / 60000;
        
        const artworkUrl = result.artworkUrl100;
        const previewUrl = result.previewUrl;
        const explicitness = result.trackExplicitness;
        const artworkImg = document.createElement("img");
        artworkImg.src = artworkUrl;

        const trackNameHeader = document.createElement("h2");
        trackNameHeader.textContent = trackName;
        if (explicitness == "explicit") {
        trackNameHeader.textContent = trackName+" (Explicit) ";
        }
        const artistNameParagraph = document.createElement("p");
        artistNameParagraph.textContent = artistName;

        const TimeParagraph = document.createElement("p");
        TimeParagraph.textContent = " Duration:- " + trackTime.toFixed(2) + " Mins";


        const previewAudio = document.createElement("audio");
        previewAudio.controls = true;

        if (previewUrl) {
          const previewSource = document.createElement("source");
          previewSource.src = previewUrl;
          previewSource.type = "audio/mpeg";
          previewAudio.appendChild(previewSource);
        } else {
          previewAudio.textContent = "No preview available";
        }

        const resultDiv = document.createElement("td");
        resultDiv.appendChild(artworkImg);
        resultDiv.appendChild(trackNameHeader);
        resultDiv.appendChild(artistNameParagraph);
        resultDiv.appendChild(TimeParagraph);

        resultDiv.appendChild(previewAudio);

        const cell = document.createElement("td");
        if(trackTime<durationTerm){
        cell.appendChild(resultDiv);
        row.appendChild(cell);
        count++;
}
        if (count === 5) {
          table.appendChild(row);
          row = document.createElement("tr");
          count = 0;
        }
      });

      if (count > 0) {
        for (let i = count; i < 5; i++) {
          const cell = document.createElement("td");
          row.appendChild(cell);
        }
        table.appendChild(row);
      }

      searchResults.appendChild(table);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});