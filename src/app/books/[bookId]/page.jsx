
// export const generateStaticParms = () => {

// }

export const generateStaticParams= async ()=>{
    const res = await fetch ('http://localhost:5000/books');
    const books = await res.json();

    return books.map(book => ({bookId: book.id }));
}

const BookDetailsPage = async ({ params }) => {
   const {bookId} = await params;
   const res = await fetch(`http://localhost:3000/books/${bookId}`);
   const {title, author, price} = await res.json();
 

    return (
        <div>
            <h2>Book Detail {bookId}</h2>
            <p>{title}</p>
            <p>{price}</p>
            <p>{author}</p>
        </div>
    );
};

export default BookDetailsPage;