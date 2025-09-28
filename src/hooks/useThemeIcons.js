import { useMemo } from "react";
import { useTheme } from "../assets/context/ThemeContext";
import sun from "../assets/pictures/icons/sun.svg";
import moon from "../assets/pictures/icons/moon.svg";
import backLight from "../assets/pictures/icons/back-light.svg";
import backDark from "../assets/pictures/icons/back-dark.svg";
import atLight from "../assets/pictures/icons/at-light.svg";
import atDark from "../assets/pictures/icons/at-dark.svg";
import linkedinLight from "../assets/pictures/icons/linkedin-light.svg";
import linkedinDark from "../assets/pictures/icons/linkedin-dark.svg";
import githubLight from "../assets/pictures/icons/github-light.svg";
import githubDark from "../assets/pictures/icons/github-dark.svg";
import checkmarkLight from "../assets/pictures/icons/checkmark-light.svg";
import checkmarkDark from "../assets/pictures/icons/checkmark-dark.svg";

export function useThemeIcons() {
  const { theme } = useTheme();

  return useMemo(
    () => ({
      theme: theme === "light" ? moon : sun,
      at: theme === "light" ? atLight : atDark,
      github: theme === "light" ? githubLight : githubDark,
      linkedin: theme === "light" ? linkedinLight : linkedinDark,
      back: theme === "light" ? backLight : backDark,
      checkmark: theme === "light" ? checkmarkLight : checkmarkDark,
    }),
    [theme]
  );
}
