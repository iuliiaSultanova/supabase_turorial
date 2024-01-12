export default function BookCard({ book }) {
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <div className="rating">{book.rating}</div>
        </div>
    );
}