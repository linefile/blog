import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { Contributor } from '#types/contributor';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.github.com/repos/teknologi-umum/blog/contributors');
  const contributors: Contributor[] = await res.json();
  return {
    props: {
      contributors,
    },
  };
};

export default function About({ contributors = [] }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <div className="w-full md:w-4/5 text-lg font-serif">
        <h1 className="text-left text-2xl font-bold py-8 uppercase font-sans">Tentang Teknologi Umum</h1>
        <p className="pb-3">
          <strong className="font-bold">Teknologi Umum</strong> merupakan suatu paguyuban yang berdiri sejak tahun 2021
          awal karena keresahan sang pencipta, La Ode Muhammad Al Fatih yang kesulitan untuk mengungkapkan rasa,
          keinginan, dan hasratnya untuk membicarakan hal-hal yang berbau
          <em> out of topic</em> seperti Tesla, SpaceX, Boring Company, dan hal-hal berbau Elon Musk lainnya.
        </p>
        <p className="pb-3">
          Namun, siapa yang sangka kalau grup yang tidak punya aturan ini bisa aktif sekali, hingga sering ada 1000
          pesan setiap harinya. Dari member yang suka meracuni bahasa pemrograman C#, adu skill dukun, hingga
          membicarakan konspirasi elit global seperti provider internet <span className="bg-black">redacted</span> dan
          keberadaan <span className="bg-black">redacted redacted</span>.
        </p>
        <p className="pb-3">
          Untungnya, kamu juga bisa masuk ke grup Telegram Teknologi Umum hanya dengan klik&nbsp;
          <a href="https://t.me/teknologi_umum" className="text-primary-600 hover:underline">
            tulisan ini
          </a>
          .
        </p>
      </div>
      <div className="py-4">
        <h2 className="text-left text-2xl font-bold py-8 uppercase">Contributors</h2>
        <div className="grid grid-flow-row grid-cols-4 md:grid-cols-8 lg:grid-cols-12 grid-rows-3 gap-2 py-4 pb-2">
          {contributors.map((contributor: Contributor) => (
            <a href={contributor.html_url} key={contributor.id}>
              <img
                src={contributor.avatar_url}
                className="w-10 h-auto rounded-full mx-auto"
                loading="lazy"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
                alt={contributor.login}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
