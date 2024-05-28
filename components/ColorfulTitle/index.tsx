type ColorfulTitleProps = {
  colors: string[];
  text: string;
};

const ColorfulTitle = ({ colors, text }: ColorfulTitleProps) => {
  return (
    <h1
      style={{
        background: `linear-gradient(to right, ${colors.join(", ")})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      className="text-4xl font-bold"
    >
      {text}
    </h1>
  );
};

export default ColorfulTitle;
