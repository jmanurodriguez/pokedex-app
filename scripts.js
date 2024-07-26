document.addEventListener("DOMContentLoaded", () => {
    const botonBusqueda = document.getElementById("boton-busqueda");
    const inputBusqueda = document.getElementById("input-busqueda");
    const nombrePokemon = document.getElementById("nombre-pokemon");
    const idPokemon = document.getElementById("id-pokemon");
    const imagenPokemon = document.getElementById("imagen-pokemon");
    const pesoPokemon = document.getElementById("peso");
    const alturaPokemon = document.getElementById("altura");
    const tiposPokemon = document.getElementById("tipos");
    const hpPokemon = document.getElementById("hp");
    const ataquePokemon = document.getElementById("ataque");
    const defensaPokemon = document.getElementById("defensa");
    const ataqueEspecialPokemon = document.getElementById("ataque-especial");
    const defensaEspecialPokemon = document.getElementById("defensa-especial");
    const velocidadPokemon = document.getElementById("velocidad");
  
    botonBusqueda.addEventListener("click", () => {
        const valorBusqueda = inputBusqueda.value.trim().toLowerCase();
        if (!valorBusqueda) return;
  
        fetch(`https://pokeapi.co/api/v2/pokemon/${valorBusqueda}`)
            .then(response => {
                if (!response.ok) throw new Error("Pokémon no encontrado");
                return response.json();
            })
            .then(datos => mostrarInformacionPokemon(datos))
            .catch(error => alert(error.message));
    });
  
    const mostrarInformacionPokemon = (datos) => {
        nombrePokemon.textContent = datos.name.toUpperCase();
        idPokemon.textContent = `#${datos.id}`;
        imagenPokemon.innerHTML = `<img src="${datos.sprites.front_default}" alt="${datos.name}">`;
        pesoPokemon.textContent = `Peso: ${datos.weight}`;
        alturaPokemon.textContent = `Altura: ${datos.height}`;
        tiposPokemon.innerHTML = datos.types.map(tipo => `<span class="${tipo.type.name}">${tipo.type.name.toUpperCase()}</span>`).join(", ");
        hpPokemon.textContent = datos.stats.find(stat => stat.stat.name === "hp").base_stat;
        ataquePokemon.textContent = datos.stats.find(stat => stat.stat.name === "attack").base_stat;
        defensaPokemon.textContent = datos.stats.find(stat => stat.stat.name === "defense").base_stat;
        ataqueEspecialPokemon.textContent = datos.stats.find(stat => stat.stat.name === "special-attack").base_stat;
        defensaEspecialPokemon.textContent = datos.stats.find(stat => stat.stat.name === "special-defense").base_stat;
        velocidadPokemon.textContent = datos.stats.find(stat => stat.stat.name === "speed").base_stat;
    };
  });
  