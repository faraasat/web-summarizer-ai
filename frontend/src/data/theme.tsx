import { Sun, Moon, Star, Monitor } from "lucide-react";

export const themes = [
  {
    id: "light",
    name: "Light",
    icon: <Sun className="w-4 h-4" />,
    color: "from-purple-500 to-blue-500",
    bgColor: "bg-gradient-to-r from-purple-500/20 to-blue-500/20",
  },
  {
    id: "dark",
    name: "Dark",
    icon: <Moon className="w-4 h-4" />,
    color: "from-indigo-700 to-blue-700",
    bgColor: "bg-gradient-to-r from-indigo-700/20 to-blue-700/20",
  },
  {
    id: "modern",
    name: "Modern",
    icon: <Monitor className="w-4 h-4" />,
    color: "from-purple-600 to-pink-500",
    bgColor: "bg-gradient-to-r from-purple-600/20 to-pink-500/20",
  },
  {
    id: "classic",
    name: "Classic",
    icon: <Star className="w-4 h-4" />,
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-gradient-to-r from-indigo-500/20 to-blue-600/20",
  },
];

export const themeList: Array<string> = themes.map((theme) => theme.id);
