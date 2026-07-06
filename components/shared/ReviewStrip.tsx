import Image from "next/image";

const reviews = [
  {
    name: "J. R.",
    date: "July 2026",
    quote: "Wonderful, informative and personal tour. We would have missed so much doing this on our own. Very much worth it!",
    rating: 5,
  },
  {
    name: "Gregory Z.",
    date: "June 2026",
    quote: "Sinéad knew where animals were likely to be. We saw hundreds of bison, pronghorns, many species of birds, several burrowing owls and even a porcupine resting in a tree. Her knowledge of the island and its history was incredible (ex. 700+ bison on the island and the herd is culled to 500 at year end). She provided binoculars which was a nice touch. Very safe driver too. I highly recommend this tour.",
    rating: 5,
  },
  {
    name: "Janna W.",
    date: "June 2026",
    quote: "Great trip to Antelope Island to see bison, antelope and migrating birds. Sinéad was well informed and shared her knowledge. We were not staying at a hotel, so we agreed to meet at The Aviary. She was on time and easy to locate. She was friendly and personable. She provided binoculars and water. She made sure we were able to see the wildlife. Great trip to learn about Salt Lake and surrounding area.",
    rating: 5,
  },
  {
    name: "Barbara L.",
    date: "June 2026",
    quote: "We had an amazing experience. Sinéad was great at pointing out the many different birds that migrate to the Island. She had binoculars available for each of us to use. We learned about the history of the Island, details on the animals and geology of the region. All in all it was a fantastic day!",
    rating: 5,
  },
  {
    name: "Johnny B.",
    date: "June 2026",
    quote: "This was a great trip learning about and see in the Great Salt Lake and Antelope Island. Sinéad was extremely knowledgable about the wildlife, geology, and history of the area. We thoroughly enjoyed her and the tour!",
    rating: 5,
  },
  {
    name: "Ruth D.",
    date: "June 2026",
    quote: "Clayton gave us a wonderful tour of Antelope Island. He was very knowledgeable about all the floral, fauna and history of the area. He help us to get great photos of the birds, buffalo and deer. Wonderful and fun time. Highly recommend!",
    rating: 5,
  },
  {
    name: "Ron D.",
    date: "June 2026",
    quote: "Absolutely the best. Clayton was friendly and knowledgeable. By the time the tour was over it felt like he was family. If you do one tour while visiting the area, this is the one. Lots of Bison sightings and much more. I can't say enough about how much my wife and I enjoyed this",
    rating: 5,
  },
  {
    name: "Brenda E.",
    date: "June 2026",
    quote: "This was a lovely tour. It felt relaxed and yet we saw so much. Clayton had a a deep knowledge of the flora, fauna, and geology as well as the history of the area, which he also clearly loves. He shared all this with us while using his laser vision to point out the denizens and set up great photo ops. Would do this again next time we visit!",
    rating: 5,
  },
  {
    name: "Molly P.",
    date: "June 2026",
    quote: "This was a wonderful tour - Clayton is an expert and such a professional. He gave us so much interesting information and answered every question we threw at him (including some wild ones from our two 13 year olds). His eagle-eye allowed us to spot great wildlife and he even found a couple porcupines hanging out in the trees. He was also just really nice to hang out with. Highly recommend!",
    rating: 5,
  },
  {
    name: "Karen W.",
    date: "June 2026",
    quote: "What a wonderful afternoon on Antelope Island with Sinéad! I signed up hoping to see a little of Utah’s beauty before heading home, and I got so much more. Sinéad shared the history, wildlife, and stories of the island in a way that made everything feel personal and alive. We saw bison, pronghorn antelope, breathtaking views, a lizard, and migratory birds. Her warmth, knowledge, and love for this special place made the experience unforgettable. Highly recommend!",
    rating: 5,
  },
  {
    name: "Karen A.",
    date: "June 2026",
    quote: "Oh my I am so glad that I took this tour of Antelope Island on my trip to Salt Lake City. I was picked up on time in a clean, air conditioned van. Clayton was such a great tour guide! He is so knowledgeable in the history of the area as well as the natural sciences and is perfect for this role. I would never have appreciated this beautiful Island as much without this tour.",
    rating: 5,
  },
  {
    name: "Pamela M.",
    date: "June 2026",
    quote: "Clayton was a wonderful guide and has a knack for spotting animals and birds. We saw several birds a Clayton identified them, telling us how to spot them. We also got to see an antelope fairly close and many bison. It was and experience we will not forget.",
    rating: 5,
  },
  {
    name: "Drew A.",
    date: "June 2026",
    quote: "Had an awesome time!!!! Clayton showed us all the cool areas of the island, it was the highlight of my trip, I really learned a lot!!!",
    rating: 5,
  },
  {
    name: "Alexander W.",
    date: "June 2026",
    quote: "Clayton was our expert tour guide for our trip! He is extremely knowledgeable about both the wildlife and the history of the island! Our trip was 3 guests (I was a solo traveler) which felt very personal and uniquely curated. On our tour there were many opportunities to observe and photograph the species on the island including antelope, bison, jackrabbits, coyotes, burrowing owls, and many bird species (Clayton had a birding field guide to help ID each species). There were stop offs for bathroom breaks (Clayton knew which were the cleanest), the visitors center (to get an idea where the bison herds would be that day), and the Fielding Garr Ranch House. Clayton and his wife own and operate the Safari Utah tour company and their personal dedication and attention to detail shine in their tour experiences! We had access to pairs of binoculars for observing distant wildlife. Pickup was easy directly from our hotel, and the trip was about 5 hours, including the drive to and from SLC. I would very highly recommend booking your unforgettable Antelope Island experience with Safari Utah!",
    rating: 5,
  },
  {
    name: "Mark P.",
    date: "June 2026",
    quote: "Sinéad was wonderful. Very knowledgeable about professional. We thoroughly enjoyed our tour.",
    rating: 5,
  },
  {
    name: "Ryan S.",
    date: "June 2026",
    quote: "Had an amazing 1/2 day with Clayton, would 100% book them again",
    rating: 5,
  },
  {
    name: "Susan M.",
    date: "June 2026",
    quote: "This was a wonder experience. Sinéad was fantastic. She was knowledgeable, personable, and was Excellent at spotting wildlife. Sinéad was willing to take lots of photos. Answered all our questions and truly cared about the island and peoples experience while there.",
    rating: 5,
  },
  {
    name: "Kerstin D.",
    date: "June 2026",
    quote: "Our tour of Antelope Island with Sinéad was incredible. She’s so knowledgeable of the island itself as well as all the wildlife. She went out of her way to ensure we enjoyed all aspects of the island and checked in to make sure we were comfortable all morning.",
    rating: 5,
  },
  {
    name: "Leslie W.",
    date: "June 2026",
    quote: "Safari Utah gave us a great tour of the Great Salt Lake and Antelope Island. We also greatly appreciated their flexibility when our flight into Salt Lake City was diverted and delayed. We were able to reschedule our morning tour for the afternoon tour, and we couldn't have been happier! You can't go wrong with Safari Utah!",
    rating: 5,
  },
  {
    name: "Sissel",
    date: "June",
    quote: "Fantastic experience! Our guide Sinéad was super friendly and knowledgeable, and showed great care for us. We got to see incredible landscape and wildlife including bison, and Sinéad provided a lot of historical context about the Great Salt Lake. Would highly recommend this experience!",
    rating: 5,
  },
  {
    name: "Harsha K.",
    date: "June 2026",
    quote: "I had an amazing experience with Safari Utah's Great Salt Lake Safari to Antelope Island! Our guide was incredibly knowledgeable and friendly, sharing fascinating insights about the area's wildlife and history. The views were breathtaking, especially the sight of bison roaming the island and the stunning contrast of the lake against the mountains. The tour was well-organized, and the vehicle was comfortable, making the trip enjoyable. It’s a perfect adventure for both locals and visitors. I highly recommend this tour for anyone looking to explore the beauty of Utah’s landscapes. I can't wait for my next adventure with Safari Utah! Five stars all the way!",
    rating: 5,
  },
  {
    name: "Ron H.",
    date: "June 2026",
    quote: "Clayton was an excellent tour guide and driver. He was a wealth of information and ensured went out of his way to ensure we were able to see and photograph all we wanted. As for the island, the landscape was extraordinary. We saw hundreds of bison, owls, and antelope thanks to Clayton's sharp eyes and knowledge of the area. Highly recommend this tour.",
    rating: 5,
  },
  {
    name: "LKarina H.",
    date: "June 2026",
    quote: "Amazing Experience!This tour was extremely educational, I got to learn so much and see all type of wildlife! You have the perfect time to take pictures and Sinéad is the best! Highly recommend!",
    rating: 5,
  },
  {
    name: "Nikhil K.",
    date: "June 2026",
    quote: "Sinéad was an excellent and highly knowledgeable tour guide, and also incredibly friendly. Tour was interesting and engaging, with lots of opportunities to observe wildlife. I highly recommend to anyone visiting Salt Lake City.",
    rating: 5,
  },
  {
    name: "Victoria B.",
    date: "June 2026",
    quote: "I would definitely recommend the tour with Clayton to everyone! Clayton was really knowledgeable about the geology of Utah, the wildlife, and so on. I learned a lot from talking with him. He guided us to spot multiple bison and antelopes, day owls and a porcupine. Thank you for such a terrific experience.",
    rating: 5,
  },
  {
    name: "Shell M.",
    date: "May 2026",
    quote: "This tour was amazing. I really enjoyed myself, Sinéad was incredible, very personable and extremely knowledgable regarding birds, wildlife, Salt Lake City/Utah history, geology and everything in between! We saw lots of beautiful birds, pronghorns and bisons up close. I would recommend this tour to anyone coming to SLC. Thank you again Sinéad for a great day!",
    rating: 5,
  },
  {
    name: "Arlene P.",
    date: "May 2026",
    quote: "Clayton's Antelope Island Safari was great. He was very knowledgeable about all the birds and other wildlife. We saw an unusual snowy egret and at least 20 other bird species. Binoculars were provided to enhance the experience. Some great Bison photo ops and a bonus sleeping porcupine.",
    rating: 5,
  },
  {
    name: "YJ A.",
    date: "May 2026",
    quote: "If you have the chance to book a tour with Sinéad, do it! Beyond the scenery, Sinéad’s ability to find and identify the local animals added so much excitement to our trip. She is a fantastic guide. We left with amazing photos and even better memories. Thank you, Sinéad!",
    rating: 5,
  },
  {
    name: "Sherry M.",
    date: "April 2026",
    quote: "Such an amazing afternoon of awesome sights and so much information and knowledge from our guide. We got to see so many baby Bison with their pack. Watching them get the zoomies was a highlight of the day. So many amazing birds with beautiful songs. We even stopped to watch a hawk hover as he hunted and swooped down to catch his meal. Very very cool experience to witness just outside the car. Our last pull over for Bison viewing turned into 3 males approx 25’ from the car so we got to see them up close as they grazed. It. Was. Amazing Our guide was so kind, knowledgeable and enjoyable to be with throughout the whole tour. We lucked out with a cloudy windy day so the bugs were a non issue and the clouds were appreciated from this Phoenix family. I did this tour with my 14 year old daughter on a quick 2 day trip to Utah for USA gymnastics XCEL regionals . It was perfect for seeing the island and sights without physical activity (saving energy was a priority for us) 10/10 would recommend for any person no matter age or physical condition.(as long as you can get into the vehicle)",
    rating: 5,
  },
  {
    name: "John E.",
    date: "April 2026",
    quote: "AWESOME safari. Clayton is great. Super knowledgeable and kind. My family loved it!",
    rating: 5,
  },
  {
    name: "Edwin O.",
    date: "April 2026",
    quote: "I had an amazing experience with Safari Utah visiting Antelope Island. Everything was very well organized, but what truly made the difference was our guide, Sinéad. She was incredibly kind, knowledgeable, and made the whole experience feel very personal. We had great conversations, and she went above and beyond to show us wildlife, especially birds, which made it even more special. One detail I really appreciated was that on the way back, she kindly dropped me off exactly where I needed to go — a small gesture that says a lot about her level of care and service. This was definitely one of the highlights of my trip. I would absolutely recommend Safari Utah to anyone visiting the area.",
    rating: 5,
  },
  {
    name: "Veronica",
    date: "April 2026",
    quote: "Clayton goes above and beyond to accommodate your every wish. We saw everything! He knows exactly where to look! Excellent",
    rating: 5,
  },
  {
    name: "Lisa P.",
    date: "April 2026",
    quote: "Our tour was outstanding! Clayton has an expansive knowledge of the area, its geological history, fauna and wildlife. He tailored the tour with my wish list of birds in mind, and took into consideration a new enthusiast. Highly recommended",
    rating: 5,
  },
  {
    name: "Hannah J.",
    date: "April 2026",
    quote: "The tour by Clayton was absolutely fantastic! I really enjoyed the tour and it definitely made my trip to Salt Lake City so much better :) I learnt a lot about different aspects of both the city and the Great Salt Lake that I had no idea of before, which made my overall trip much more interesting, including the wildlife, geography and life in Salt Lake! Clayton was able to provide really interesting facts and answered all the questions we asked - clearly an expert on the area!! Even more importantly, you could tell he cared about the area and not negatively disrupting the wildlife whilst giving us great views. As someone who didn’t know that much about life in the US, Clayton was happy to answer all the questions asked, no matter how obvious! We saw incredible views on the route taken to and during Antelope Island, and most importantly the we saw an incredible variety of Salt Lake wildlife! It was like nothing I’d seen before in the UK and was certainly a highlight of the trip. Thank you again to Clayton for being so hospitable, friendly and a great tour guide!! Moreover, thank you for the complimentary coffee :)",
    rating: 5,
  },
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
      "I was expecting a tour bus type safari and they showed up in a mini van. No disappointment whatsoever. It was a small group of 5 including me and my boyfriend. I felt entirely more comfortable, very relaxed. Sinéad was so personable and friendly, knowledgeable and welcome. I would absolutely book with them again and recommend them. Her and her husband have only just started and the way they run this is exactly what people look for. Small time company with good hospitality and solid information. It sounds too good to be true but for an anxious person like myself this put me at ease with no worries at all.",
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
      "What an amazing afternoon spent learning about the history of Utah and Salt Lake City and enjoying the beauty that is Antelope Island. Sinéad was fun, engaging, and so knowledgeable! Such a unique way to experience the natural amenities of the this area.",
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
      "Sinéad was an outstanding guide from start to finish. Her wildlife knowledge was impressive — she spotted bison, birds, and more while sharing fascinating facts about the Great Salt Lake’s ecology and history. The hike to the peak was a blast, with Sinéad keeping the energy up and the information flowing the whole way.If you’re visiting Antelope Island, a tour with Sinéad is an absolute must. You’ll leave knowing so much more about this incredible place!​​​​​​​​​​​​​​​​",
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
