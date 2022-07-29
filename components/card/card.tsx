import Image from "next/image";
import { Post } from "../../types/post";

type Props = {
  post: Post;
};

const Card: React.FC<Props> = ({ post }) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src="https://placeimg.com/400/225/arch"
            width={304}
            height={171}
            layout="fixed"
            alt="Image of Products"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{post.title}</h2>
          <div className="card-actions flex justify-center items-center my-2">
            <button className="btn btn-error text-white">-</button>
            <p className="font-bold mx-2">{String(post.quantity)}</p>
            <button className="btn btn-success text-white">+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
