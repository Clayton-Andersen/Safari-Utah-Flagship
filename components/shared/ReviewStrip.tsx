import Image from "next/image";

const reviews = [
  {
    name: "Alex Epps",
    quote:
      "If I could give Safari Utah TEN stars, I absolutely would. This isn’t just a tour—it’s a once-in-a-lifetime experience that blows every expectation out of the water. From start to finish, we were in awe. The highlight? Seeing massive bison up close in their natural habitat—majestic, powerful, and absolutely unforgettable. And just when we thought it couldn’t get better, we hiked to the top of Antelope Island and were rewarded with jaw-dropping panoramic views that looked like something straight out of a movie. It was surreal. But the real MVP of this wild adventure? Clayton—the owner, guide, and all-around legend. His energy, passion, and storytelling elevated every moment. It’s clear this isn’t just a business for him—it’s a calling. He made us feel like family while delivering a world-class, bucket-list-worthy experience. Safari Utah is the kind of place you dream about visiting—and once you do, you’ll wonder why you didn’t come sooner. Clayton, thank you for making our trip unforgettable. We’re still buzzing with excitement and already planning our next visit. If you’re even thinking about going—stop thinking. Go. It’s pure magic.",
    rating: 5,
  },
  {
    name: "Sam Baker",
    quote:
      "Thoroughly enjoyed Antelope Island with Clayton! From start to finish, the entire time was filled with natural beauty, adventure, and excellent guidance from Clayton. Hotel pick up and drop off made this a convenient choice for us. We were flying out that night and Clayton was so accommodating with our schedule. We arrived at the airport with plenty of time to spare. I had never heard of Antelope Island and didn't know what to expect but it is beautiful. What I especially appreciated was the fact that the group size was small, which allowed for a more personalized experience. We were also able to take our time and stop for photos. Even with the cloudy weather, Clayton has an amazing eye and spotted animals from the road like small birds and even a porcupine up in a tree. He took great photos for us as well, of us and of nature. Would recommend doing this tour! Absolutely worth it.",
    rating: 5,
  },
  {
    name: "Jonathan Mallone",
    quote:
      "What a brilliant tour! Clayton is a fantastic guide, who seems to know everything about Antelope Island, whether it's the wildlife, flora, history or geology. We had a fantastic trip: loads of bison, with really good close-up views, which made for great photos; pronghorn antelope, coyote, porcupine and innumerable birds. If you're a keen birdwatcher, I'd definitely recommend stopping on the causeway, where we saw literally thousands of birds: everything from avocets and phalaropes to gadwall and long-billed curlew. High on Bison Point, at the north end of the island, we saw many small species, including rock wren, gnat-catcher, vireos and even a MacGillivray's warbler. Clayton was able to answer any question we threw at him, and made sure that we got to see the things we wanted. I can't wait to take another tour the next time we come to Salt Lake.",
    rating: 5,
  },
  {
    name: "Matthew Brewer",
    quote:
      "We just completed a tour of Antelope Island with Clayton Andersen. Clayton only does small group tours (we were a party of 4) which made the experience even more enjoyable. Clayton is very knowledgeable and, simply put, the tour was great. I would recommend this tour and would enthusiastically rate it a 5 on a 1–5 scale.",
    rating: 5,
  },
  {
    name: "Mackey McNeill",
    quote:
      "Love this tour! Clayton is an amazing human and a fabulous guide! His knowledge of the history of the region and the inhabitants really brought the island to life for my grandchildren. Don't wait! Just say yes today and have a great adventure with Clayton.",
    rating: 5,
  },
];

export default function ReviewStrip() {
  return (
    <section className="relative border-y border-sand/20">
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/buffalo_point_winter_light.jpeg" // existing image you mentioned
          alt="Soft view of American avocets near Antelope Island"
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-night/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-10 space-y-4">
        <h2 className="font-serif text-2xl text-bone">
          Guest Reviews from Antelope Island
        </h2>
        <p className="text-sm text-sand/70">
          A few words from guests who&apos;ve experienced Safari Utah.
        </p>

        <div className="flex gap-8 overflow-x-auto pb-2 text-sm">
          {reviews.map((r) => (
            <figure
              key={r.name + r.quote.slice(0, 20)}
              className="min-w-[260px] max-w-sm border border-sand/20 rounded-2xl p-5 bg-night/70"
            >
              {/* ⭐ Stars */}
              <div className="flex items-center gap-1 mb-2">
                <span className="sr-only">
                  {r.rating} out of 5 stars
                </span>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i} aria-hidden="true" className="text-sand text-xs">
                    ★
                  </span>
                ))}
              </div>

              <blockquote className="text-sand/90 italic leading-relaxed">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-3 text-xs text-sand/70">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Google reviews link */}
        <div className="pt-4">
          <a
            href="https://www.google.com/search?q=safari+utah&oq=safari+utah&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIICAEQRRgnGDsyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQgyNzIzajBqN6gCCLACAfEF9KK6AlchuEHxBfSiugJXIbhB&sourceid=chrome&ie=UTF-8&lqi=CgtTYWZhcmkgVXRhaEi5paTxwruAgAhaExAAGAAYASILc2FmYXJpIHV0YWiSAQ10b3VyX29wZXJhdG9y4AEA#lkt=LocalPoiReviews&rlimm=8288452450578165872"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-sand/60 hover:text-sand transition underline"
          >
            View all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
