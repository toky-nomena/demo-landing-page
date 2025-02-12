import Activities from "@/components/activities/activities";

export default function ActivitiesPage() {
  return (
    <section
      id="activites"
      className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-16 py-24 md:py-32"
    >
      <div className="space-y-4 w-full">
        <h1 className="bg-gradient-to-br text-center from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Nos activités
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
          Découvrez les événements et activités à venir prochainement de la
          communauté FJKM Québec
        </p>
      </div>
      <div className="w-full max-w-4xl">
        <Activities />
      </div>
    </section>
  );
}
