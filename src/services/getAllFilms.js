async function getAllFilms() {
  const url = 'https://ghibliapi.herokuapp.com/films';

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    // console.error(error.message);
    return error.message;
  }
}

export default getAllFilms;
