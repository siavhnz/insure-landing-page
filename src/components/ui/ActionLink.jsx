const ActionLink = ({ children, size, theme }) => {
  let sizeStyles = "",
    themeStyles = "";

  //size
  const small = ["h-40", "text-12", "tracking-18"];
  const medium = ["h-55", "text-18", "tracking-27"];
  if (size === "small") {
    sizeStyles = small.join(" ");
  } else if (size === "medium") {
    sizeStyles = medium.join(" ");
  } else {
    sizeStyles = small.join(" ");
  }

  //theme
  const white = ["text-very-light-gray", "border-very-light-gray"];
  const violet = ["border-dark-violet", "text-dark-violet"];
  if (theme === "white") {
    themeStyles = white.join(" ");
  } else if (theme === "violet") {
    themeStyles = violet.join(" ");
  } else {
    themeStyles = white.join(" ");
  }

  return (
    <a
      href="#"
      className={`font-karla flex items-center justify-center border-2 px-26 uppercase ${sizeStyles} ${themeStyles}`}
    >
      {children}
    </a>
  );
};

export default ActionLink;
