interface Props {
  image: string;
  title: string;
  desc: string;
  onClick?: () => void;
}

function Card({ image, title, desc, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View ${title} details`}
      className="bg-red-200 h-80 w-full relative overflow-hidden rounded-xl text-left"
    >
      <img
        src={image}
        alt="card"
        className="w-full h-full object-cover brightness-40 cursor-pointer hover:scale-105 duration-300"
      />
      <div className="absolute bottom-3 left-3 text-white">
        <p className="">{desc}</p>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </div>
    </button>
  );
}

export default Card;
