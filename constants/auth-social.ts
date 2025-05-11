import { AuthSocial } from "@/types";
import { FcGoogle } from "react-icons/fc";
import {
  RiTwitterXLine,
  // RiGithubFill,
  // RiFacebookBoxFill,
} from "react-icons/ri";

export const authSocials: AuthSocial[] = [
  {
    id: "google",
    name: "Google",
    label: "Sign in with Google",
    icon: FcGoogle,
  },
  {
    id: "twitter",
    name: "Twitter",
    label: "Sign in with Google",
    icon: RiTwitterXLine,
  },
  // {
  //   id: "facebook",
  //   name: "Facebook",
  //   label: "Sign in with Google",
  //   icon: RiFacebookBoxFill,
  // },
  // {
  //   id: "github",
  //   name: "GitHub",
  //   label: "Sign in with Google",
  //   icon: RiGithubFill,
  // },
];
