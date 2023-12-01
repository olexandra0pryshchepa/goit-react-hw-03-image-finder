import './Button.css'

export const Button = ({ onClick }) => {
  return (
    <div className="load-more-container">
      <button type="button" className="loadMore" onClick={onClick}>
        Load More
      </button>
    </div>
  );
}
