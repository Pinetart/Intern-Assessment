import Text from "../components/Text/Text";

const Contact = () => {
  const contactText = `This is the Conact Page. Page is empty. Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
      massa. Cum sociis natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus.`;

  return (
    <div>
      <Text recievedText={contactText} />
    </div>
  );
};

export default Contact;
