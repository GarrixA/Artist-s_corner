import RecentlyAdded from "../components/RecentlyAddedComponent";

/* eslint-disable react/no-unescaped-entities */
const HomePage = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-[5%] py-20 bg-black text-white min-h-screen">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-6">Art's Corner</h1>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ducimus error eos deserunt dolore, quos cum odio incidunt veniam,
            ipsam ratione consequatur. Enim temporibus, voluptas magni ipsa
            dignissimos illum nostrum? Sed consequuntur quaerat deserunt quae
            exercitationem esse asperiores ea sint odio necessitatibus
            recusandae facilis enim, ex voluptas quas, quam, sit nemo tempore
            tempora eveniet dolor facere omnis rerum neque. Obcaecati! Iusto
            suscipit quo quod numquam consectetur sed commodi odio? Nostrum,
            nemo animi iste inventore excepturi, quam velit eveniet nulla veniam
            iure temporibus reprehenderit, similique aliquam. Consectetur
            cupiditate eaque deserunt sed? Id repellat deleniti excepturi earum
            obcaecati sequi sunt ex, beatae qui, mollitia hic quasi nostrum
            neque ab praesentium odit, labore tempore nihil repellendus fugit
            maiores nesciunt ipsa! Possimus, in totam. Quasi eaque pariatur
            deserunt neque nulla inventore dolores blanditiis at perferendis
            quis veniam quia corrupti fugit recusandae, dolorum illo impedit
            dignissimos error exercitationem quidem natus cupiditate quod ad
            saepe. Odit.
          </p>
          <button className="bg-gray-800 hover:bg-gray-700 px-10 py-3 rounded-full text-white">
            Explore
          </button>
        </div>

        <div className=" gap-4 b p-4">
          <img
            src="/art_home_image.png"
            alt="Trench"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
      <div className="bg-black text-white px-[5%] mx-auto">
        <RecentlyAdded />
      </div>
    </div>
  );
};

export default HomePage;
