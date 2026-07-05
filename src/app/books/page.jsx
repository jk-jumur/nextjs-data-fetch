import BookCard from "@/components/BookCard";

/**
 * 
 * cache: no-store=> it will fatche the data and every request , and it will not cache the data ssr.
 * cache: force-cache=> it will cache the  cache the data and it will not fetch the data on every  request. SSG
 * revalidate: 20/ it will cache the data and it will fetch the data after 20 seconds.ISR
 * */

const BooksPage = async() => {

    
    const res = await fetch('http://localhost:5000/books',
        {next: {revalidate: 20}}
    );
    const books = await res.json();
    
    return (
        <div className="container mx-auto p-4">
            <h1> Books Pagge : {books.length}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {
                    books.map(book => <BookCard key={book.id} book={book}/>)
                 }
            </div>
        </div>
    );
};

export default BooksPage;