import Image from "next/image";

const reviews = [
  {
    name: "Renee M.",
    date: "March 2026",
    quote:
      "My tour of Antelope Island was beautiful in many ways. It began with a hotel pickup and as we traveled we chatted about a mutual love for photography and Clayton’s knowledge, education and experience that seemed to make him perfectly suited for this job. Utilizing various threads of knowledge, a caring disposition, and photography insights Clayton guided me towards fantastic landscapes that produced incredible pictures. We delved into history, geology, culture, nature and religion along the way. This was a wonderful experience and worth every dollar spent.",
    rating: 5,
  },
  {
    name: "Alison N.",
    date: "January 2026",
    quote:
      "Love this tour! Clayton is an amazing human and a fabulous guide! His knowledge of the history of the region and the inhabitants really brought the island to life for my grandchildren. Don't wait! Just say yes today and have a great adventure with Clayton.",
    rating: 5,
  },
  {
    name: "Arianna C.",
    date: "March 2026",
    quote:
      "I was expecting a tour bus type safari and they showed up in a mini van. No disappointment whatsoever. It was a small group of 5 including me and my boyfriend. I felt entirely more comfortable, very relaxed. Sinead was so personable and friendly, knowledgeable and welcome. I would absolutely book with them again and recommend them. Her and her husband have only just started and the way they run this is exactly what people look for. Small time company with good hospitality and solid information. It sounds too good to be true but for an anxious person like myself this put me at ease with no worries at all.",
    rating: 5,
  },
  {
    name: "Chrissy M.",
    date: "March 2026",
    quote:
      "This was amazing! Who knew 35 minutes from downtown Salt Lake City there was such amazing wildlife! Clayton was an amazing guide! He stopped for any picture we wanted!",
    rating: 5,
  },
  {
    name: "Julie B.",
    date: "March 2026",
    quote:
      "What an amazing afternoon spent learning about the history of Utah and Salt Lake City and enjoying the beauty that is Antelope Island. Sinead was fun, engaging, and so knowledgeable! Such a unique way to experience the natural amenities of the this area.",
    rating: 5,
  },
  {
    name: "Brittany S.",
    date: "March 2026",
    quote:
      "It was an AMAZING experience! Antelope island is so beautiful. Clayton was the best tour guide! He picked us up on time, personable, and EXTREMELY knowledgable about the region, nature, and wildlife. Easily one of my most memorable life experiences!",
    rating: 5,
  },
  {
    name: "Ryan M.",
    date: "March 2026",
    quote:
      "Sinead was an outstanding guide from start to finish. Her wildlife knowledge was impressive — she spotted bison, birds, and more while sharing fascinating facts about the Great Salt Lake’s ecology and history. The hike to the peak was a blast, with Sinead keeping the energy up and the information flowing the whole way.If you’re visiting Antelope Island, a tour with Sinead is an absolute must. You’ll leave knowing so much more about this incredible place!​​​​​​​​​​​​​​​​",
    rating: 5,
  },
  {
    name: "Debbie H.",
    date: "March 2026",
    quote:
      "This experience is a rare opportunity to become immersed in the beauty of the mountains, bison, pronghorn antelope, and Salt Lake. Clayton, our guide, is an amazing resource for learning about the history, geology, and animals of the area. It was the best part of my trip to Salt Lake City.",
    rating: 5,
  },
  {
    name: "Debbie H.",
    date: "March 2026",
    quote:
      "This was an amazing experience! Clayton knows so much about the geology, history, and animals of Utah and this area. What was particularly striking to me is that Clayton has a spiritual connection to the land and the importance of conservation. He has wonderful people skills. He created an environment of kindness and friendship among the group. It was a once in a lifetime opportunity for me",
    rating: 5,
  },
  {
    name: "Janette.",
    date: "March 2026",
    quote:
      "This was a great tour! Sinéad provided a lot of great information. The smaller tour group made for a more personalized experience which I really enjoyed. The afternoon felt morelike hanging out with friends than being part of a tour.",
    rating: 5,
  },
  {
    name: "Alex E.",
    date: "July 2025",
    quote:
      "If I could give Safari Utah TEN stars, I absolutely would. This isn’t just a tour—it’s a once-in-a-lifetime experience that blows every expectation out of the water. From start to finish, we were in awe. The highlight? Seeing massive bison up close in their natural habitat—majestic, powerful, and absolutely unforgettable. And just when we thought it couldn’t get better, we hiked to the top of Antelope Island and were rewarded with jaw-dropping panoramic views that looked like something straight out of a movie. It was surreal. But the real MVP of this wild adventure? Clayton—the owner, guide, and all-around legend. His energy, passion, and storytelling elevated every moment. It’s clear this isn’t just a business for him—it’s a calling. He made us feel like family while delivering a world-class, bucket-list-worthy experience. Safari Utah is the kind of place you dream about visiting—and once you do, you’ll wonder why you didn’t come sooner. Clayton, thank you for making our trip unforgettable. We’re still buzzing with excitement and already planning our next visit. If you’re even thinking about going—stop thinking. Go. It’s pure magic.",
    rating: 5,
  },
  {
    name: "Sam B.",
    date: "April 2025",
    quote:
      "Thoroughly enjoyed Antelope Island with Clayton! From start to finish, the entire time was filled with natural beauty, adventure, and excellent guidance from Clayton. Hotel pick up and drop off made this a convenient choice for us. We were flying out that night and Clayton was so accommodating with our schedule. We arrived at the airport with plenty of time to spare. I had never heard of Antelope Island and didn't know what to expect but it is beautiful. What I especially appreciated was the fact that the group size was small, which allowed for a more personalized experience. We were also able to take our time and stop for photos. Even with the cloudy weather, Clayton has an amazing eye and spotted animals from the road like small birds and even a porcupine up in a tree. He took great photos for us as well, of us and of nature. Would recommend doing this tour! Absolutely worth it.",
    rating: 5,
  },
  {
    name: "Jonathan M.",
    date: "September 2025",
    quote:
      "What a brilliant tour! Clayton is a fantastic guide, who seems to know everything about Antelope Island, whether it's the wildlife, flora, history or geology. We had a fantastic trip: loads of bison, with really good close-up views, which made for great photos; pronghorn antelope, coyote, porcupine and innumerable birds. If you're a keen birdwatcher, I'd definitely recommend stopping on the causeway, where we saw literally thousands of birds: everything from avocets and phalaropes to gadwall and long-billed curlew. High on Bison Point, at the north end of the island, we saw many small species, including rock wren, gnat-catcher, vireos and even a MacGillivray's warbler. Clayton was able to answer any question we threw at him, and made sure that we got to see the things we wanted. I can't wait to take another tour the next time we come to Salt Lake.",
    rating: 5,
  },
  {
    name: "William R.",
    date: "December 2025",
    quote:
      "Absolutely Outstanding Tour with Clayton! Our visit to Antelope Island State Park was unforgettable, thanks entirely to our incredible tour guide, Clayton. From the moment the tour began, Clayton’s passion for the island, its wildlife, and its history was obvious. He has that rare combination of deep knowledge and genuine enthusiasm that makes every detail fascinating. Clayton didn’t just point things out, he brought the island to life. Whether he was explaining the behaviors of the bison, identifying birds on the shoreline, or sharing fun historical stories, he made us feel like we were discovering the island alongside a good friend who happened to know everything. What truly set Clayton apart was how attentive and patient he was with our two young children. He engaged them with fun facts, made sure they felt included, and never rushed us, no matter how many questions or pauses came with having little ones along. Our kids adored him! Clayton also worked incredibly hard to get us as close to the bison as possible while staying safe, and balancing our excitement with complete respect for the animals and their space. We always felt safe, informed, and in awe as we watched these magnificent creatures up close. He was engaging, thoughtful, and committed to giving us the best experience possible. If you’re planning a visit to Antelope Island State Park, do yourself a favor and book a tour with Clayton. It was easily the highlight of our trip, and we left feeling inspired, informed, and grateful for such an exceptional guide. Highly, highly recommended!",
    rating: 5,
  },
  {
    name: "Matthew B.",
    date: "June 2025",
    quote:
      "We just completed a tour of Antelope Island with Clayton Andersen. Clayton only does small group tours (we were a party of 4) which made the experience even more enjoyable. Clayton is very knowledgeable and, simply put, the tour was great. I would recommend this tour and would enthusiastically rate it a 5 on a 1–5 scale.",
    rating: 5,
  },
  {
    name: "Mackey M.",
    date: "October 2025",
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
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-night/50" />
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
              className="min-w-[260px] max-w-sm h-[360px] border border-sand/20 rounded-2xl p-5 bg-night/50 flex flex-col"
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

              <blockquote className="flex-1 overflow-y-auto pr-2 text-sand/90 italic leading-relaxed">
                “{r.quote}”
              </blockquote>

              <figcaption className="mt-3 flex items-center justify-between gap-3 text-xs text-sand/70">
                <span>— {r.name}</span>
                {r.date && <span className="shrink-0">{r.date}</span>}
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
            className="text-xs uppercase tracking-[0.2em] text-sand-bold hover:text-sand transition underline"
          >
            View all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
