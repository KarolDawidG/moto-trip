import DayCard from "./DayCard";
import tripDays from "./tripDays.json";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-10 text-5xl font-bold">
          Moto Trip 2026
        </h1>

        <div className="space-y-8">
          {tripDays.map((day, index) => (
            <DayCard
              key={index}
              day={day.day}
              route={day.route}
              distance={day.distance}
              time={day.time}
              link={day.link}
              embed={day.embed}
              dzien={day.dzien}
              hotel={day.hotel}
            />
          ))}
        </div>
      </div>
    </main>
  );
}