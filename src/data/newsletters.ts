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
    content: "In today’s rapidly changing world, special needs education is not a choice—it is a necessity. Children learn differently, grow at different paces, and face unique emotional, physical, and cognitive challenges. Inclusive and special education ensures that no child is left behind.
🔹 Why Special Needs Education Is More Important Than Ever
1. Rising Awareness & Identification
With better medical and psychological screening, conditions such as autism, ADHD, learning disabilities, speech delays, and neuromotor challenges are being identified early. Early intervention through special education changes lives.
2. Inclusive Education Movement
Modern education emphasizes “education for all.” Special education supports inclusion by helping children with special needs learn alongside peers with dignity, confidence, and appropriate support.
3. Changing Family & Social Structures
Busy lifestyles, nuclear families, and digital exposure have increased emotional and behavioral challenges in children. Special educators help children develop emotional regulation, social skills, and independence.
4. Academic Pressure & Standardized Systems
Traditional teaching methods often fail children who learn differently. Special education offers individualized learning plans (IEPs) that focus on strengths rather than weaknesses.
5. Mental Health & Emotional Well-being
Special needs education addresses not only academics but also self-esteem, anxiety, communication, and life skills, which are crucial in today’s competitive world.
6. Skill-Based & Functional Learning
The focus has shifted from rote learning to life skills, vocational training, and functional independence, especially important for children with intellectual and developmental disabilities.
7. Building an Empathetic Society
When children with and without disabilities learn together, society grows more empathetic, patient, and humane—values the present world urgently needs.
🌈 Impact of Special Needs Education
Empowers children to reach their true potential
Supports parents with guidance and hope
Reduces school dropouts
Creates confident, independent individuals
Strengthens inclusive communities
✨ Powerful Quote
“Every child can learn. Just not on the same day or in the same way.”
",
    date: "2025-01-03",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=200&fit=crop"
  },
  
  {    id: "2",
    title: "New Special Education Resources",
    content: "We've compiled a comprehensive list of special education resources in Bangalore including therapy centres, inclusive schools, and support groups for parents. Contact us for personalized guidance.",
    date: "2024-12-28",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=200&fit=crop"
  }
];

export const getRecentNewsletters = (count: number = 3): Newsletter[] => {
  return newsletters.slice(0, count);
};
