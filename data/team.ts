interface TeamMember {
  name: string;
  role: string;
  image: string;
  initials?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    image: "/images/team/team4.jpg",
    initials: "JD",
  },
  {
    name: "John Smith",
    role: "CTO",
    image: "/images/team/team5.jpg",
    initials: "JS",
  },
  {
    name: "Alice Johnson",
    role: "Lead Developer",
    image: "/images/team/team6.jpg",
    initials: "AJ",
  },
];
