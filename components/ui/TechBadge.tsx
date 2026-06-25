const colorMap: Record<string, string> = {
  "React": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Next.js": "bg-white/5 text-white/80 border-white/10",
  "TypeScript": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
  "MongoDB": "bg-green-600/10 text-green-500 border-green-600/20",
  "PostgreSQL": "bg-blue-600/10 text-blue-400 border-blue-600/20",
  "Tailwind CSS": "bg-cyan-600/10 text-cyan-400 border-cyan-600/20",
  "Redis": "bg-red-500/10 text-red-400 border-red-500/20",
  "Docker": "bg-blue-400/10 text-blue-400 border-blue-400/20",
  "GraphQL": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "AWS": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Stripe": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Socket.io": "bg-white/5 text-white/60 border-white/10",
  "Prisma": "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "Express": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Redux": "bg-purple-600/10 text-purple-400 border-purple-600/20",
  "OpenAI": "bg-green-400/10 text-green-400 border-green-400/20",
  "Chart.js": "bg-orange-400/10 text-orange-400 border-orange-400/20",
  "AWS S3": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "React Native": "bg-blue-400/10 text-blue-400 border-blue-400/20",
};

export default function TechBadge({ tech }: { tech: string }) {
  const cls = colorMap[tech] || "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-mono font-medium ${cls}`}>
      {tech}
    </span>
  );
}
