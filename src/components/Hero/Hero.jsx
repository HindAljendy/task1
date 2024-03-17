import "./Hero.css";

const Hero = ({HeroTitle , HeroMain }) => {
  return (
    <div className="HJ_Hero">
      <div className="HJ_ContentHero">
        <span className="HJ_TitleHero">{HeroTitle}</span>
        <h2 className="HJ_HeadingHero">{HeroMain}</h2>
      </div>
    </div>
  );
};

export default Hero;
