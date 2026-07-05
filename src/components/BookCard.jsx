// import Image from "next/image";

import Link from "next/link";



const BookCard = ({ book }) => {
    const {title, author, category, price,description} = book;
    return (
       <div className="card bg-base-100 w-96 shadow-sm">
  {/* <figure>
    <Image
      src={image}
      alt="Shoes" 
      width={200}
      height={200}/>
  </figure> */}
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{author}</p>
    <p>{category}</p>
    <p>{price}</p>
    <p>{description}</p>


    <div className="card-actions justify-end">
      <Link href={`/books/${book.id}`}>
         <button className="btn btn-primary">Show Details</button>
 
      </Link>
    </div>
  </div>
</div>
    );
};

export default BookCard;