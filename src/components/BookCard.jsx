// import Image from "next/image";



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
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default BookCard;