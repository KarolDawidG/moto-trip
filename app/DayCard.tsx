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
    <div className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900 p-4 lg:grid lg:grid-cols-[1fr_400px] lg:p-5">
      
      {/* LEWA STRONA */}
      <div className="flex flex-col gap-4">
        
        {/* HEADER */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold lg:text-2xl">{day}</h2>
            <p className="text-sm text-zinc-400">{route}</p>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl bg-orange-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-orange-400 lg:px-4 lg:text-sm"
          >
            Maps
          </a>
        </div>

        {/* STATS - GRID MOBILE */}
        <div className="grid grid-cols-3 gap-2 text-center text-zinc-300">
          <div>
            <div className="text-[10px] text-zinc-500">Dystans</div>
            <div className="text-sm font-semibold">{distance}</div>
          </div>

          <div>
            <div className="text-[10px] text-zinc-500">Czas</div>
            <div className="text-sm font-semibold">{time}</div>
          </div>

          <div>
            <div className="text-[10px] text-zinc-500">Data</div>
            <div className="text-sm font-semibold">{dzien}</div>
          </div>
        </div>

        {/* HOTEL */}
        {hotel && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
            <div className="text-xs text-zinc-500">Nocleg</div>

            <h3 className="mt-1 text-base font-semibold">
              {hotel.name}
            </h3>

            <p className="mt-1 text-xs text-zinc-400">
              {hotel.address}
            </p>

            <a
              href={hotel.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white"
            >
              Booking
            </a>
          </div>
        )}
      </div>

      {/* MAPA */}
      <div className="order-first overflow-hidden rounded-2xl border border-zinc-800 lg:order-none">
        <iframe
          src={embed}
          className="h-64 w-full lg:h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}