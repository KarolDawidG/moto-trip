type DayCardProps = {
  day: string;
  route: string;
  distance: string;
  time: string;
  link: string;
  embed: string;
  dzien: string;

  hotel?: {
  name: string;
  address: string;
  booking: string;
  };
};

export default function DayCard({
  day,
  route,
  distance,
  time,
  link,
  embed,
  dzien,
  hotel,
}: DayCardProps) {
  return (
    <div className="grid gap-4 rounded-3xl border border-zinc-800 bg-zinc-900 p-5 lg:grid-cols-[1fr_400px]">
      {/* LEWA STRONA */}
      <div>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">{day}</h2>
            <p className="mt-1 text-zinc-400">{route}</p>
          </div>

     <a
            href={link}
            target="_blank"
            className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            Otwórz Maps
          </a>
        </div>

        <div className="mt-6 flex gap-6 text-zinc-300">
          <div>
            <div className="text-sm text-zinc-500">Dystans</div>
            <div className="text-lg font-semibold">{distance}</div>
          </div>

          <div>
            <div className="text-sm text-zinc-500">Czas</div>
            <div className="text-lg font-semibold">{time}</div>
          </div>

          
          <div>
            <div className="text-sm text-zinc-500">Nocleg</div>
            <div className="text-lg font-semibold">{dzien}</div>
          </div>

        {
  hotel && (
    <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
      <div className="mb-2 text-sm text-zinc-500">
        Nocleg
      </div>

      <h3 className="text-lg font-semibold">
        {hotel.name}
      </h3>

      <p className="mt-1 text-sm text-zinc-400">
        {hotel.address}
      </p>

      <a
        href={hotel.booking}
        target="_blank"
        className="mt-4 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
      >
        Link do noclegu
      </a>
    </div>
  )
}

        </div>
      </div>

  {/* PRAWA STRONA */}
      <div className="overflow-hidden rounded-2xl border border-zinc-800">
        <iframe
          src={embed}
          width="100%"
          height="250"
          loading="lazy"
          className="border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}