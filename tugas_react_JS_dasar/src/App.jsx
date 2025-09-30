function App() {
  return (
    <>
      <div className="container">
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: "#335c67" }}
              ></i>
              <span className="ms-2 fs-4"> Bookstoreside</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="#home"
                className="nav-link px-2"
                style={{ color: "#335c67" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="nav-link px-2"
                style={{ color: "#335c67" }}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="nav-link px-2"
                style={{ color: "#335c67" }}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link px-2"
                style={{ color: "#335c67" }}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button
              type="button"
              className="btn btn-outline-primary me-2"
              style={{ borderColor: "#335c67", color: "#335c67" }}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: "#335c67", borderColor: "#335c67" }}
            >
              Register
            </button>
          </div>
        </header>

        {/* Hero */}
        <div id="home" className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1
                className="display-4 fw-bold lh-1"
                style={{ color: "#2a4a54" }}
              >
                Brian Khrisna : Seporsi Mie Ayam Sebelum Mati
              </h1>
              <p className="lead">
                Ale, pria berusia 37 tahun berbadan besar, berkulit gelap dan
                memiliki masalah dengan bau badan yang mengalami depresi akibat
                perlakuan buruk yang Ia dapatkan dari teman, lingkungan bahkan
                keluarganya sendiri. Ale merasakan kesepian, selalu dibuly, dan
                tidak punya teman untuk bercerita. Ale memutuskan untuk
                mengakhiri hidupnya dengan menelan semua obat anti depresi yang
                Ia punya, namun ada satu hal yang terlintas dipikirannya sebelum
                mati adalah dengan makan seporsi mie ayam.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button
                  type="button"
                  className="btn btn-lg px-4 me-md-2 fw-bold"
                  style={{
                    backgroundColor: "#335c67",
                    borderColor: "#335c67",
                    color: "white",
                  }}
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                  style={{ borderColor: "#2a4a54", color: "#2a4a54" }}
                >
                  Detail
                </button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                className="rounded-lg-3"
                src="/yummer.jpg"
                alt="Seporsi Mie Ayam Sebelum Mati"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "650px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <section id="features" className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light" style={{ color: "#2a4a54" }}>
                Best Seller
              </h1>
              <p className="lead text-body-secondary">
                Temukan koleksi novel terbaik Indonesia yang telah menyentuh
                jutaan hati pembaca. Dari karya-karya Tere Liye hingga
                novel-novel inspiratif lainnya.
              </p>
              <p>
                <a
                  href="#products"
                  className="btn my-2 m-2"
                  style={{
                    backgroundColor: "#335c67",
                    borderColor: "#335c67",
                    color: "white",
                  }}
                >
                  Views
                </a>
                <a
                  href="#"
                  className="btn btn-outline-secondary my-2"
                  style={{ borderColor: "#2a4a54", color: "#2a4a54" }}
                >
                  Other Books
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Product List */}
        <div id="products" className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/books/bumi.jpg"
                    className="card-img-top"
                    alt="Bumi - Tere Liye"
                    style={{
                      width: "100%",
                      maxHeight: "400px",
                      objectFit: "contain",
                      objectPosition: "top",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#2a4a54" }}>
                      Bumi - Tere Liye
                    </h5>
                    <p className="card-text">
                      Petualangan Raib, Seli, dan Ali menemukan dunia paralel.
                      Novel fantasi yang memukau tentang persahabatan dan
                      keberanian.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm"
                          style={{ backgroundColor: "#335c67", color: "white" }}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#2a4a54", color: "#2a4a54" }}
                        >
                          Cart
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 85.000</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/books/bulan.jpg"
                    className="card-img-top"
                    alt="Bulan - Tere Liye"
                    style={{
                      width: "100%",
                      maxHeight: "400px",
                      objectFit: "contain",
                      objectPosition: "top",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#2a4a54" }}>
                      Bulan - Tere Liye
                    </h5>
                    <p className="card-text">
                      Kelanjutan petualangan Raib dkk ke Klan Bulan. Penuh
                      misteri dan aksi yang menegangkan dengan twist
                      mengejutkan.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm"
                          style={{ backgroundColor: "#335c67", color: "white" }}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#2a4a54", color: "#2a4a54" }}
                        >
                          Cart
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 85.000</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/books/matahari.jpeg"
                    className="card-img-top"
                    alt="Matahari - Tere Liye"
                    style={{
                      width: "100%",
                      maxHeight: "400px",
                      objectFit: "contain",
                      objectPosition: "top",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#2a4a54" }}>
                      Matahari - Tere Liye
                    </h5>
                    <p className="card-text">
                      Rahasia besar terungkap di Klan Matahari. Novel penuh
                      emosi yang mengharukan tentang pengorbanan dan cinta.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm"
                          style={{ backgroundColor: "#335c67", color: "white" }}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#2a4a54", color: "#2a4a54" }}
                        >
                          Cart
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 90.000</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/books/hujan.jpeg"
                    className="card-img-top"
                    alt="Hujan - Tere Liye"
                    style={{
                      width: "100%",
                      maxHeight: "400px",
                      objectFit: "contain",
                      objectPosition: "top",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#2a4a54" }}>
                      Hujan - Tere Liye
                    </h5>
                    <p className="card-text">
                      Kisah cinta Lail dan Esok yang memilukan. Novel romantis
                      yang mengajarkan tentang takdir dan penerimaan.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm"
                          style={{ backgroundColor: "#335c67", color: "white" }}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#2a4a54", color: "#2a4a54" }}
                        >
                          Cart
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 95.000</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/books/pulang.jpeg"
                    className="card-img-top"
                    alt="Pulang - Tere Liye"
                    style={{
                      width: "100%",
                      maxHeight: "400px",
                      objectFit: "contain",
                      objectPosition: "top",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#2a4a54" }}>
                      Pulang - Tere Liye
                    </h5>
                    <p className="card-text">
                      Perjalanan spiritual Bujang mencari jati diri. Novel penuh
                      filosofi tentang arti pulang yang sesungguhnya.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm"
                          style={{ backgroundColor: "#335c67", color: "white" }}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#2a4a54", color: "#2a4a54" }}
                        >
                          Cart
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 88.000</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/books/funiculi_funicula.jpeg"
                    className="card-img-top"
                    alt="Funiculi Funicula"
                    style={{
                      width: "100%",
                      maxHeight: "400px",
                      objectFit: "contain",
                      objectPosition: "top",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#2a4a54" }}>
                      Funiculi Funicula
                    </h5>
                    <p className="card-text">
                      Kafe ajaib yang bisa membawa kembali ke masa lalu. Novel
                      Jepang yang menghangatkan hati tentang kesempatan kedua.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm"
                          style={{ backgroundColor: "#335c67", color: "white" }}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#2a4a54", color: "#2a4a54" }}
                        >
                          Cart
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 98.000</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/books/namaku_alam.jpeg"
                    className="card-img-top"
                    alt="Namaku Alam"
                    style={{
                      width: "100%",
                      maxHeight: "400px",
                      objectFit: "contain",
                      objectPosition: "top",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#2a4a54" }}>
                      Namaku Alam
                    </h5>
                    <p className="card-text">
                      Perjuangan anak jalanan yang gigih meraih mimpi. Novel
                      inspiratif tentang kekuatan harapan dan pendidikan.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm"
                          style={{ backgroundColor: "#335c67", color: "white" }}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#2a4a54", color: "#2a4a54" }}
                        >
                          Cart
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 75.000</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/books/perahu_kertas.jpeg"
                    className="card-img-top"
                    alt="Perahu Kertas - Dee"
                    style={{
                      width: "100%",
                      maxHeight: "400px",
                      objectFit: "contain",
                      objectPosition: "top",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#2a4a54" }}>
                      Perahu Kertas - Dee
                    </h5>
                    <p className="card-text">
                      Kisah cinta Kugy dan Keenan yang penuh warna. Novel
                      romantis yang mengajarkan tentang mimpi dan realita.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm"
                          style={{ backgroundColor: "#335c67", color: "white" }}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#2a4a54", color: "#2a4a54" }}
                        >
                          Cart
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 92.000</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/books/laskar_pelangi.jpeg"
                    className="card-img-top"
                    alt="Laskar Pelangi"
                    style={{
                      width: "100%",
                      maxHeight: "400px",
                      objectFit: "contain",
                      objectPosition: "top",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#2a4a54" }}>
                      Laskar Pelangi
                    </h5>
                    <p className="card-text">
                      Perjuangan 10 anak Belitung meraih pendidikan. Novel
                      legendaris penuh inspirasi dan keberanian bermimpi.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm"
                          style={{ backgroundColor: "#335c67", color: "white" }}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#2a4a54", color: "#2a4a54" }}
                        >
                          Cart
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 95.000</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <section id="team" className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light" style={{ color: "#2a4a54" }}>
                Meet Our Team
              </h1>
              <p className="lead text-body-secondary">
                Tim kami terdiri dari beberapa orang keren dengan pengalaman
                yang udah pasti gacor dalam dunia apapun itu yang pasti di
                universe yang ditinggali ini.
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/team/kelaz.jpg"
                    className="card-img-top"
                    alt="Firman Fadilah"
                    style={{
                      height: "225px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title text-center"
                      style={{ color: "#2a4a54" }}
                    >
                      Firman Fadilah
                    </h5>
                    <p className="card-text text-center text-body-secondary">
                      Seorang Mahasiswa dengan antusiasme terhadap Fullstack Web
                      Dev, dan juga tengah ingin membangun usaha toko Buku
                      terutama dengan fokus ke Novel
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#335c67", color: "#335c67" }}
                        >
                          LinkedIn
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#335c67", color: "#335c67" }}
                        >
                          Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/team/kelaz.jpg"
                    className="card-img-top"
                    alt="Firman Other Universe"
                    style={{
                      height: "225px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title text-center"
                      style={{ color: "#2a4a54" }}
                    >
                      Firman
                    </h5>
                    <p className="card-text text-center text-body-secondary">
                      Halo aku merupakan Firman Versi Universe lain yang bisa
                      dibilang memiliki interest yang sama tetapi dengan
                      keinginan juga memperdalam phyton untuk jenjang kedepannya
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#335c67", color: "#335c67" }}
                        >
                          LinkedIn
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#335c67", color: "#335c67" }}
                        >
                          Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/team/kelaz.jpg"
                    className="card-img-top"
                    alt="Fadilah"
                    style={{
                      height: "225px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title text-center"
                      style={{ color: "#2a4a54" }}
                    >
                      Fadilah
                    </h5>
                    <p className="card-text text-center text-body-secondary">
                      Kalau aku sendiri merupakan nama panjang dari karakter
                      utama dalam pembuatan Project ini hehe. salam kenal semua,
                      kenalin aku Firman Fadilah
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#335c67", color: "#335c67" }}
                        >
                          LinkedIn
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#335c67", color: "#335c67" }}
                        >
                          Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/team/kelaz.jpg"
                    className="card-img-top"
                    alt="manrandomside"
                    style={{
                      height: "225px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title text-center"
                      style={{ color: "#2a4a54" }}
                    >
                      manrandomside
                    </h5>
                    <p className="card-text text-center text-body-secondary">
                      manrandomside merupakan nama yang aku sering pake terutama
                      di username github. intinya ini merupakan username aku
                      yang suka aku pake
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#335c67", color: "#335c67" }}
                        >
                          LinkedIn
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ borderColor: "#335c67", color: "#335c67" }}
                        >
                          Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="container my-5">
          <div className="row">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span style={{ color: "#2a4a54" }}>Contact Info</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0" style={{ color: "#335c67" }}>
                      Address
                    </h6>
                    <small className="text-body-secondary">
                      Jl. Cendrawasih No.3, Tuban,
                    </small>
                    <br />
                    <small className="text-body-secondary">
                      Kec. Kuta, Kabupaten Badung, Bali 80361
                    </small>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0" style={{ color: "#335c67" }}>
                      Phone
                    </h6>
                    <small className="text-body-secondary">
                      +62 821-447-158-31
                    </small>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0" style={{ color: "#335c67" }}>
                      Email
                    </h6>
                    <small className="text-body-secondary">
                      firmanfdlh1@gmail.com
                    </small>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <div>
                    <h6 className="my-0" style={{ color: "#335c67" }}>
                      Business Hours
                    </h6>
                    <small className="text-body-secondary">
                      Monday - Friday: 08.00 - 17.00 (WITA)
                    </small>
                    <br />
                    <small className="text-body-secondary">
                      Saturday: 10.00 - 17.00 (WITA)
                    </small>
                    <br />
                    <small className="text-body-secondary">
                      Sunday: Closed
                    </small>
                  </div>
                </li>
              </ul>

              <div className="card p-2" style={{ borderColor: "#335c67" }}>
                <div className="card-body">
                  <h6 className="card-title" style={{ color: "#2a4a54" }}>
                    Follow Us
                  </h6>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      style={{ borderColor: "#335c67", color: "#335c67" }}
                    >
                      <i className="fa-brands fa-github"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      style={{ borderColor: "#335c67", color: "#335c67" }}
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      style={{ borderColor: "#335c67", color: "#335c67" }}
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3" style={{ color: "#2a4a54" }}>
                Contact Form
              </h4>
              <form className="needs-validation" noValidate>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@gmail.com"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="+62 821-447-158-31"
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Buku dengan Judul apa yang mau kamu ceritakan?."
                      required
                    />
                    <div className="invalid-feedback">Subject is required.</div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Ketikan Pesan yang ingin kamu sampaikan disini ya..."
                      required
                    ></textarea>
                    <div className="invalid-feedback">
                      Please enter your message.
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <button
                  className="w-100 btn btn-lg"
                  type="submit"
                  style={{
                    backgroundColor: "#335c67",
                    borderColor: "#335c67",
                    color: "white",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a
                  href="#home"
                  className="nav-link px-2"
                  style={{ color: "#335c67" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#features"
                  className="nav-link px-2"
                  style={{ color: "#335c67" }}
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#team"
                  className="nav-link px-2"
                  style={{ color: "#335c67" }}
                >
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className="nav-link px-2"
                  style={{ color: "#335c67" }}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link px-2"
                  style={{ color: "#335c67" }}
                >
                  About
                </a>
              </li>
            </ul>
            <p className="text-center" style={{ color: "#2a4a54" }}>
              &copy; 2025 Firman Fadilah - Bookstoreside
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
