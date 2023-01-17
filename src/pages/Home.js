import Text from "../components/Text";

const Home = () => {
  const homeText = `This is the Home Page. Page is Empty. Li Europan lingues es membres del
      sam familie. Lor separat existentie es un myth. Por scientie, musica,
      sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in
      li grammatica, li pro`;

  return (
    <div>
      <Text recievedText={homeText} />
    </div>
  );
};

export default Home;
