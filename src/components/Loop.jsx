import seriesData from "../api/seriesData.json";
import { Props } from "./props";

export const Loop = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((currelem) => (
        <Props key={currelem.id} data={currelem} />
      ))}
    </ul>
  );
};
    