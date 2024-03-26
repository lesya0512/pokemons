import React, { useState } from 'react';
import PokemonInfo from "../item/item";
import './list.css'

function PokemonList( {pokemonList} ) {

    const [filter, setFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    // Функция для обновления фильтра
    const handleFilterChange = event => {
        setFilter(event.target.value);
    };

    // Функция для обновления фильтра по типу
    const handleTypeFilterChange = event => {
        setTypeFilter(event.target.value);
    };

    // Применение фильтра к списку покемонов
    const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase()) &&
    (typeFilter === '' || pokemon.types.some(type => type.type.name.toLowerCase() === typeFilter.toLowerCase()))
    );

     // Получение уникальных типов покемонов
  const uniqueTypes = Array.from(new Set(pokemonList.flatMap(pokemon => pokemon.types.map(type => type.type.name))));

    return (
        <div className="container">
            <div className="text">
                <h1>All Pokemon</h1>
            </div>

        <div className="form">
        <div className="input">
            <input type="text" placeholder="Search Pokemon" value={filter}
            onChange={handleFilterChange}/>
        </div>

        <div className="select">
            <select value={typeFilter} onChange={handleTypeFilterChange}>
            <option value="">All Types</option>
            {uniqueTypes.map(type => (
                <option key={type} value={type}>{type}</option>
            ))}
            </select>
        </div>
        </div>

            <div className="area">
                {pokemonList.length > 0 ? (
                     filteredPokemonList.map(pokemon => <PokemonInfo key={pokemon.id} pokemon={pokemon} />)
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
      );
}

export default PokemonList;