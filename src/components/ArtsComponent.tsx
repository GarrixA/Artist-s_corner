import { artsData } from "../utils/artsData";

/* eslint-disable react/no-unescaped-entities */
const ArtsComponent = () => {
  return (
    <div className="bg-black">
      <div className="text-white flex flex-col gap-4 py-6">
        <h1 className="text-4xl font-bold">The Artist's Corner</h1>
        <p className="text-xl my-4">
          Explore a curated gallery showcasing diverse artistic expressions,
          from vibrant paintings to captivating sculptures. Each piece tells a
          unique story, reflecting the artist's vision and creativity. Whether
          you're drawn to abstract art, contemporary styles, or classic
          influences, our collection offers something for every taste. Immerse
          yourself in a visual journey where color, form, and emotion collide,
          inspiring both art enthusiasts and casual visitors alike. Discover new
          talents and connect with the art that resonates with you.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {artsData.map((art, idx) => (
          <div key={idx}>
            <img src={art.image} alt="art_image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtsComponent;
