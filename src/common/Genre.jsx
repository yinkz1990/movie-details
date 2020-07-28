import React from "react";

const Genre = (props) => {
  const {
    genre,
    onGenreSelect,
    selectedGenre,
    textProperty,
    valueProperty,
  } = props;
  return (
    <div>
      <ul className="list-group">
        {genre.map((genre) => (
          <li
            key={genre[valueProperty]}
            onClick={() => onGenreSelect(genre)}
            className={
              selectedGenre === genre
                ? "list-group-item active"
                : "list-group-item"
            }
            style={{ cursor: "pointer" }}
          >
            {genre[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};
Genre.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default Genre;
