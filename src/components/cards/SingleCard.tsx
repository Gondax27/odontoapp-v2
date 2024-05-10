interface SingleCardProps {
  children: React. ReactNode;
  className?: string;
}

const SingleCard = ({ children, className }: SingleCardProps) => (
  <article
    className={`w-full p-4 rounded-md shadow-lg bg-black/[7%] ${className || ''}`}
  >
    {children}
  </article>
);

export default SingleCard;
