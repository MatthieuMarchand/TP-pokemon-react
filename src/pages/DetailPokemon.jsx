import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CardPokemon from "../components/CardPokemon";
import Loader from "../components/Loader";

const DetailPokemon = ({ pokedex, setPokedex }) => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [family, setFamily] = useState([]);

  useEffect(() => {
    setPokemon(null);
    setFamily([]);

    const fetchPokemonAndFamily = async () => {
      try {
        const response = await fetch(
          `https://pokebuildapi.fr/api/v1/pokemon/${id}`,
        );
        const currentData = await response.json();
        setPokemon(currentData);

        let root = currentData;
        while (root.apiPreEvolution && root.apiPreEvolution !== "none") {
          const preResponse = await fetch(
            `https://pokebuildapi.fr/api/v1/pokemon/${root.apiPreEvolution.pokedexId}`,
          );
          root = await preResponse.json();
        }

        const familyList = [];
        const collectFamily = async (p) => {
          familyList.push(p);
          if (p.apiEvolutions && p.apiEvolutions.length > 0) {
            for (const evo of p.apiEvolutions) {
              const evoResponse = await fetch(
                `https://pokebuildapi.fr/api/v1/pokemon/${evo.pokedexId}`,
              );
              const evoData = await evoResponse.json();
              await collectFamily(evoData);
            }
          }
        };

        await collectFamily(root);
        familyList.sort((a, b) => a.id - b.id);
        setFamily(familyList);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPokemonAndFamily();
  }, [id]);

  if (!pokemon) return <Loader />;

  return (
    <div className="detail-container">
      <div className="navigation">
        <Link to="/">Retour</Link>
      </div>

      <div className="content-wrapper">
        <div className="main-card">
          <CardPokemon
            pokemon={pokemon}
            pokedex={pokedex}
            setPokedex={setPokedex}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailPokemon;
