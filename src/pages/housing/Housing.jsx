import { useNavigate, useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Description from "../../components/Description/Description";
import { useFetch } from "../../utils/useFetch";
import NotFound from "../notfound/NotFound"; // Importer le composant NotFound

const Housing = () => {
  const { fetchedData, isLoading, error } = useFetch(`/data.json`);
  const { housingId } = useParams();

  const currentHousing =
    fetchedData && fetchedData.find((item) => item.id === housingId);

  if (!currentHousing) {
    return <NotFound />; // Utiliser le composant NotFound à la place du message
  }

  document.title = `Kasa - ${currentHousing.title}`;

  return (
    <main>
      <Carrousel
        key={currentHousing.id}
        id={currentHousing.id}
        cover={currentHousing.cover}
        title={currentHousing.title}
        pictures={currentHousing.pictures}
      />
      <Description currentHousing={currentHousing} />
    </main>
  );
};

export default Housing;
