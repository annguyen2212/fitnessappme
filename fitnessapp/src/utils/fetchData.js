export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '27f00afdf3msh1d170616970514ap144e19jsnfdd2b66a8f4e'
    }
  };

export const fetchData = async (url, options) =>{

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}