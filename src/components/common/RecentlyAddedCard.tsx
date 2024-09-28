interface RecentlyAddedCardProps {
  title: string;
  description: string;
  owner: string;
  image: string;
}

const RecentlyAddedCard = ({
  description,
  owner,
  title,
  image,
}: RecentlyAddedCardProps) => {
  return (
    <div>
      <div className="relative">
        <div className="">
          <img src={image} alt="image" />
        </div>
        <div className="absolute top-0">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="absolute top-10">{owner}</div>
      </div>
    </div>
  );
};

export default RecentlyAddedCard;
