function FindTour() {
  return (
    <div className="container my-16" id="findtour">
      <div className="flex flex-col items-center text-center">
        <div className="space-y-4">
          <span className="subtitle">CARI TEMPAT WISATA</span>
          <h2>Cari Tempat Wisata Didekatmu</h2>
          <p>
            Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat
            yang sedang populer di daerah kamu dengan begitu kamu akan selalu
            update dan gak kudet lagi 👍🏻
          </p>
        </div>
        <div className="mt-11">
          <img src="/map.jpg" className="rounded-lg" alt="Map" />
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-start gap-4">
          <img src="/find1.png" alt="Find Tour Icon 1" />
          <div className="flex flex-col items-start">
            <h6 className="font-extrabold">Populer Di dekatmu</h6>
            <p className="mt-2 font-medium">
              Tempat pariwisata yang populer dan pasti dikenal semua orang
              didekatmu
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <img src="/find2.png" alt="Find Tour Icon 2" />
          <div className="flex flex-col items-start">
            <h6 className="font-extrabold">Favorit di dekatmu</h6>
            <p className="mt-2 font-medium">
              Tempat favorit dan disukai semua orang orang di sekitar daerah
              kamu
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <img src="/find3.png" alt="Find Tour Icon 3" />
          <div className="flex flex-col items-start">
            <h6 className="font-extrabold">Ramai di didekatmu</h6>
            <p className="mt-2 font-medium">
              Spot yang paling ramai dikunjungi para warga sekaligus para
              wisatawan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindTour;
