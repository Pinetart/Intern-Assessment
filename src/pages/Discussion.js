import Text from "../components/Text/Text";

const Discussion = () => {
  const discussionText = `This is the Dicussion Page. Page is empty. Sed ut perspiciatis unde omnis
      iste natus error sit voluptatem accusantium doloremque laudantium, totam
      rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
      architecto beatae vitae dicta.`;

  return (
    <div>
      <Text recievedText={discussionText} />
    </div>
  );
};

export default Discussion;
