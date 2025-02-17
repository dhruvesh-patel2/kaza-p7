import { useEffect, useState } from "react";

export function useFetch(url) {
  // État pour stocker les données récupérées
  const [fetchedData, setFetchedDat] = useState(null);

  // État pour gérer le statut de chargement
  const [isLoading, setLoading] = useState(true);

  // État pour gérer les erreurs
  const [error, setError] = useState(false);

  // useEffect pour lancer la récupération des données à chaque changement de l'URL
  useEffect(() => {
    // Si l'URL est vide, on ne fait rien
    if (!url) return;

    // On met le statut de chargement à true
    setLoading(true);

    // Fonction asynchrone pour récupérer les données
    async function fetchData() {
      try {
        // On envoie la requête fetch
        const response = await fetch(url);

        // On parse la réponse en JSON
        const data = await response.json();

        // On met les données dans le state
        setFetchedDat(data);
      } catch (err) {
        // En cas d'erreur, on affiche l'erreur et met à jour le state d'erreur
        console.log(err);
        setError(true);
      } finally {
        // On met le statut de chargement à false une fois l'opération terminée
        setLoading(false);
      }
    }

    // Appel de la fonction de récupération des données
    fetchData();
  }, [url]); // Le useEffect se lance uniquement si l'URL change

  
  return { fetchedData, isLoading, error };
}
