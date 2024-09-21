import { recentlyAddedData } from "../utils/artsData";
import RecentlyAddedCard from "./common/RecentlyAddedCard";

const RecentlyAdded = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-black py-8">Recently Added Post</h1>
        <div className="grid grid-cols-4">
          {recentlyAddedData
            ?.slice(0, 4)
            .map((recent, idx) => (
              <RecentlyAddedCard
                title={recent.title}
                description={recent.description}
                owner={recent.owner}
                image={recent.image}
                key={idx}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;
