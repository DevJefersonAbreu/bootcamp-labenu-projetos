import './Banner.css';

export const Banner = () => {
  const STARS_LENGTH = 8;
  return (
    <section>
      <h2>The Last Jedi</h2>
      {[...Array(STARS_LENGTH)].map((_, index) => {
        return <div key={index} className={`star star-${index + 1}`} />;
      })}
    </section>
  );
};