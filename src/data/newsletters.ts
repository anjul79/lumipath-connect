export interface Newsletter {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
}

export const newsletters: Newsletter[] = [
  {
    id: "1",
    title: "Admission Season 2025 Updates",
    content: "Get ready for the upcoming admission season! Key dates for CBSE school admissions in Bangalore are approaching. Most schools open applications in October-November. Start your research early to secure the best options for your child.",
    date: "2025-01-03",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=200&fit=crop"
  },
  {
    id: "2",
    title: "Career Counselling Workshop Announcement",
    content: "Join our free online workshop on career planning for Class 10 students. Learn about stream selection, emerging career options, and how to align your interests with the right educational path.",
    date: "2025-01-01",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop"
  },
  {
    id: "3",
    title: "New Special Education Resources",
    content: "We've compiled a comprehensive list of special education resources in Bangalore including therapy centres, inclusive schools, and support groups for parents. Contact us for personalized guidance.",
    date: "2024-12-28",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=200&fit=crop"
  }
];

export const getRecentNewsletters = (count: number = 3): Newsletter[] => {
  return newsletters.slice(0, count);
};
