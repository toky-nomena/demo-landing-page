import { Clock, History, Timer } from "lucide-react";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { fr } from "date-fns/locale";

// Function to format date in the desired French format
const formatActivityDate = (dateString: string) => {
  const date = parseISO(dateString);
  const formattedDate = format(date, "EEEE d MMMM yyyy", { locale: fr });

  // Capitalize the first letter of the day and month
  return formattedDate
    .replace(/^(\w)/, (match) => match.toUpperCase())
    .replace(/\s(\w)/, (match) => match.toUpperCase());
};

const activities = [
  {
    id: "1",
    date: "2025-02-05",
    title: "Morning Workout",
    description: "Cardio and strength training at the gym",
    startTime: "08:00",
    endTime: "09:30",
    location: "123 Fitness Ave, Gym City",
  },
  {
    id: "2",
    date: "2025-02-05",
    title: "Team Meeting",
    description: "Weekly team sync-up to discuss ongoing projects",
    startTime: "10:00",
    endTime: "11:30",
    location: "Desjardins Office, 456 Business Blvd, Lévis, QC",
  },
  {
    id: "3",
    date: "2025-02-05",
    title: "Lunch with Client",
    description: "Discuss project requirements and expectations",
    startTime: "12:30",
    endTime: "14:00",
    location: "789 Gourmet St, Downtown",
  },
  {
    id: "4",
    date: "2025-02-05",
    title: "Code Review",
    description: "Review and approve pull requests for the team",
    startTime: "15:00",
    endTime: "16:30",
    location: "Remote - Zoom Meeting",
  },
  {
    id: "5",
    date: "2025-02-05",
    title: "Evening Study",
    description: "Deep dive into advanced Next.js topics",
    startTime: "18:00",
    endTime: "20:00",
    location: "Home Office, 123 Tech Lane",
  },
];

export default function Page() {
  return (
    <section
      id="activites"
      className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24  md:py-32"
    >
      <div className="space-y-4 w-full">
        <h1 className="bg-gradient-to-br text-center from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Nos Activités
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
          Découvrez les événements et activités de la communauté FJKM Québec
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <div className="relative">
          <div className="absolute bottom-0 left-6 top-8 w-px bg-gray-200 dark:bg-gray-700" />
          <div className="space-y-8">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex relative gap-4 items-start"
              >
                <div className="flex relative z-10 justify-center items-center w-12 h-12 bg-white rounded-full border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <Clock className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
                <div className="flex flex-1 p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex-1">
                    <div className="mb-1 text-sm text-slate-600 dark:text-slate-300">
                      <span className="font-bold">
                        {formatActivityDate(activity.date)}
                      </span>{" "}
                      {activity.startTime} - {activity.endTime}
                    </div>
                    <div className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                      {activity.title}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">
                      {activity.description}
                    </div>
                    {activity.location && (
                      <Link
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          activity.location
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-2 text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {activity.location}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <button className="flex gap-2 items-center ml-16 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">
              <History className="w-4 h-4" />
              Show 3 similar activities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
