

const loading = () => {
    return (
        <div className="flex items-center justify-center mt-4 ">

           <h2>Book Detail Loading...</h2> 
           <span className="loading loading-spinner text-success"></span>
           <span className="loading loading-spinner text-warning"></span>
           <span className="loading loading-spinner text-error"></span>
        </div>
    );
};

export default loading;