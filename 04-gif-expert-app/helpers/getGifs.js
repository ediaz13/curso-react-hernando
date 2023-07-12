export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/trending?api_key=YdNYsR8VYDJU3aVX1VnE3WwAHhxvsfA0&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

}