/* eslint-disable react/prop-types */
const NewsItem = (props) => {
  //   console.log(props);
  return (
    <div>
      <img src={props.superArtikel.img} alt="" />
      <h3>{props.superArtikel.title}</h3>
      <p>{props.superArtikel.description}</p>
      <a target="_blank" href={props.superArtikel.link} rel="noreferrer">
        zum Beitrag
      </a>
    </div>
  );
};

export default NewsItem;
