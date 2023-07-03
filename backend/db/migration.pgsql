
DROP TABLE IF EXISTS users, my_list, api_data, my_list_movies, user_profiles CASCADE;


CREATE TABLE users
(
  id       serial NOT NULL,
  email    TEXT   NOT NULL,
  password TEXT   NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE my_list
(
  id                serial  NOT NULL,
  title             text    ,
  created           date    ,
  public_or_private boolean ,
  last_modified     date    ,
  user_id           INT  NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  PRIMARY KEY (id)
);

CREATE TABLE api_data
(
  id            INT NULL ,
  type          INT NULL,
  name          TEXT  NULL,
  adult         BOOLEAN NULL,
  backdrop_path TEXT NULL,
  genre_ids     INT[] NULL,
  genre_names   TEXT[] NULL,
  keywords      TEXT[] NULL,
  cast_names    TEXT[] NULL,
  media_type    TEXT NULL,
  origin_country TEXT[] NULL,
  original_language TEXT NULL,
  original_title TEXT NULL,
  overview      TEXT NULL,
  popularity    FLOAT NULL,
  poster_path   TEXT NULL,
  release_date  TEXT NULL,
  title         TEXT NULL,
  video         BOOLEAN NULL,
  vote_average  FLOAT NULL,
  vote_count    INT NULL,
  video_key     TEXT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE my_list_movies
(
my_list_id INT NOT NULL,
api_data_id INT NOT NULL,
FOREIGN KEY (my_list_id) REFERENCES my_list (id),
PRIMARY KEY (my_list_id, api_data_id)
);

CREATE TABLE user_profiles
(
id SERIAL NOT NULL PRIMARY KEY,
user_id INT NOT NULL,
profiles JSON[] NULL
);

