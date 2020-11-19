import './BookListing.css';

function BookListing(props) {
  console.log(props.listing)

  const { title, authorName } = props.listing

  return (
    <div className="book-listing">
      <div>
        Title: {title.length > 20 ? title.substring( 0, 30) + '...' : title}
      </div>
      <div>
        Author: {authorName.length > 20 ? authorName.substring( 0, 30) + '...' : authorName}
      </div>
    </div>
  )
}

export default BookListing;