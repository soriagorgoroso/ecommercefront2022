import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

function TopSeller() {
  const [articles, setArticles] = React.useState(null);

  React.useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get("http://localhost:8000/articles");
      setArticles(response.data);
    };
    getArticles();
  }, []);

  //const topSellers = articles.filter((article) => article.topSeller);
  //console.log(topSellers);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    articles && (
      <div>
        <h2 className="mt-5">También te podría gustar</h2>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {articles.map((article) => (
            <div className="my-4 px-4">
              <a href={`/articulos/${article.id}`}>
                <img
                  src={`/img/photos/${article.category}/${article.image}`}
                  className="img-thumbnail"
                ></img>
              </a>

              <div className="d-flex justify-content-between mt-2">
                <p>{article.name}</p>
                <p>US$ {article.price}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    )
  );
}

export default TopSeller;
