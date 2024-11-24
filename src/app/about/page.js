// app/about/page.js
export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="w-60 h-72 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Hakkımda</h1>
        <p className="text-lg">
          Öğrenim hayatım boyunca çok çeşitli dallarda proje ve çalışmalar
          yaptım. 2022 yılından beri web geliştirme üzerine çalışıyorum ve ısrarım bu daldaki yetkinliğimi artırmak üzere olacaktır.

          Spor, müzik ve tiyatro geçmişim bulunmaktadır.
        </p>
      </div>
    </section>
  );
}
