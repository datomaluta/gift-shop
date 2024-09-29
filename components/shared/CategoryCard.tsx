import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({
  title,
  image,
  color,
  href,
}: {
  title: string;
  image: string;
  color: string;
  href: string;
}) => {
  return (
    <Link href={href} className="max-w-[350px]">
      <Image src={image} alt={title} width={370} height={220} />
      <div className={`${color} p-4`}>
        <p className="border-b-2 border-navy-blue pb-2 text-center uppercase text-sm">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
