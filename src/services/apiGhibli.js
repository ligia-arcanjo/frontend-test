export async function fetchFilms() {
  const url = 'https://ghibliapi.herokuapp.com/films';

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
    return {};
  }
}

export async function fetchPeople() {
  const url = 'https://ghibliapi.herokuapp.com/people';

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
    return {};
  }
}

export async function fetchLocations() {
  const url = 'https://ghibliapi.herokuapp.com/locations';

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
    return {};
  }
}

export async function fetchFilmById(id) {
  const url = `https://ghibliapi.herokuapp.com/films/${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
    return {};
  }
}
