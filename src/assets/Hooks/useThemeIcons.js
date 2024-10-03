import { useTheme } from "../Components/ThemeContext";
import sun from "../../files/sun.svg";
import moon from "../../files/moon.svg";
import backLight from "../../files/back-light.svg";
import backDark from "../../files/back-dark.svg";
import atLight from "../../files/at-light.svg";
import atDark from "../../files/at-dark.svg";
import linkedinLight from "../../files/linkedin-light.svg";
import linkedinDark from "../../files/linkedin-dark.svg";
import githubLight from "../../files/github-light.svg";
import githubDark from "../../files/github-dark.svg";

export function useThemeIcons() {
  const { theme } = useTheme();

  const icons = {
    theme: theme === "light" ? moon : sun,
    at: theme === "light" ? atLight : atDark,
    github: theme === "light" ? githubLight : githubDark,
    linkedin: theme === "light" ? linkedinLight : linkedinDark,
    back: theme === "light" ? backLight : backDark,
  };

  return icons;
}
