export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Easy Brew</h1>
      <p style={{ fontSize: '1.25rem', color: '#555' }}>A Japandi Coffee Sanctuary in Mojokerto</p>
      <section style={{ marginTop: '2rem' }}>
        <h2>Tentang Easy Brew</h2>
        <p>
          Easy Brew hadir sebagai tempat ngopi dengan konsep Japandi yang tenang, elegan, dan nyaman.
          Kami menyajikan specialty coffee berkualitas tinggi dari barista bersertifikat internasional,
          serta minuman lainnya seperti matcha, chocolate, dan mocktail.
        </p>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <h2>Menu Unggulan</h2>
        <ul>
          <li>☕ Specialty Coffee</li>
          <li>🍵 Matcha & Chocolate</li>
          <li>🍹 Mocktail & Light Bites</li>
        </ul>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <h2>Lokasi & Kontak</h2>
        <p>📍 Jalan Berlian A22, Perumahan Bumi Sooko Permai, Mojokerto</p>
        <p>🕗 08.00 – 22.00 WIB</p>
        <p>📱 WhatsApp: 08xxxxxxxxxx</p>
      </section>
    </main>
  )
}