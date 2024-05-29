type ColorfulTitleProps = {
  colors: string[];
  text: JSX.Element | string;
};

const ColorfulTitle = ({ colors, text }: ColorfulTitleProps) => {
  return (
    <h1
      style={{
        background: `linear-gradient(to right, ${colors.join(", ")})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      className="text-2xl font-bold my-5"
    >
      {text}
    </h1>
  );
};

export default ColorfulTitle;
