import getHash from '../utils/getHash';
import getData from "../utils/getData";

const Character = async () => {
    const id = getHash();
    const character = await getData(id);
    const view = `
        <div class="Characters-inner">
            <article class="Characters-card">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
            <article class="Characters-card">
                <h3>Episodes: <spam> ${character.episode.length} </spam></h3>
                <h3>Status: <spam> ${character.status} </spam></h3>
                <h3>Species: <spam> ${character.species} </spam></h3>
                <h3>Gender: <spam> ${character.gender} </spam></h3>
                <h3>Origin:<spam> ${character.origin.name} </spam></h3>
                <h3>Last Location: <spam> ${character.location.name} </spam></h3>
            </article>
        </div>
    `
    return view
}

export default Character;