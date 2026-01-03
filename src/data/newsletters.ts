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
    title: "Need of Special Needs Education in the Present Time",
    content: "In today's rapidly changing world, special needs education is not a choice—it is a necessity. Children learn differently, grow at different paces, and face unique emotional, physical, and cognitive challenges. Inclusive and special education ensures that no child is left behind. With better medical and psychological screening, conditions such as autism, ADHD, learning disabilities, speech delays, and neuromotor challenges are being identified early. Early intervention through special education changes lives.",
    date: "2025-01-03",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=200&fit=crop"
  },
  {
    id: "2",
    title: "New Special Education Resources",
    content: "We've compiled a comprehensive list of special education resources in Bangalore including therapy centres, inclusive schools, and support groups for parents. Contact us for personalized guidance.",
    date: "2024-12-28",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=200&fit=crop"
  }
];

export const getRecentNewsletters = (count: number = 3): Newsletter[] => {
  return newsletters.slice(0, count);
};
