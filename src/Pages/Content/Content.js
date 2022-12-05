import React, { useEffect, useState } from 'react';

const Content = () => {
    const [contents, setContents] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    useEffect(() => {
        fetch(`https://syntex-server.up.railway.app/content/contentCollection?page=${page}`)
          .then((res) => res.json())
          .then((data) => {
            setContents(data.books)
            const count = data.count;
            const pageNumber = Math.ceil(count / 8);
            setPageCount(pageNumber);
          });
      }, [page]);
    return (
        <div className="container mt-5">
      <h1 className="text-center">All Content Are Here</h1>

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {contents.map((content) => (
          <div key={content._id} className="col">
            <div className="card">
              <img
                height={200}
                src={content.img}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title">{content.label}</h4>
                <p className="card-text">{content.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination container mb-5 mt-2">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={number === page ? "selected" : ""}
            key={number}
            onClick={() => setPage(number)}
          >
            {number+1}
          </button>
        ))}
      </div>
    </div>
    );
};

export default Content;