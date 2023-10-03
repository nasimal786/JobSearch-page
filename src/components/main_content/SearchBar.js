

function SearchBar() {


  return (
    <div className="search">
       <h1>One Search, Millions of Jobs</h1>
       <div className="search-input">
        <input type="text" placeholder="Job Title, Skills Or Company" />
        <input type="text" placeholder="City,State or Country" />
        <button>Search Jobs</button>
       </div>
       <a href="https://www.google.co.in/">Upload or create a resume </a>
       <span>to easily apply to jobs.</span>
    </div>
  )
}

export default SearchBar