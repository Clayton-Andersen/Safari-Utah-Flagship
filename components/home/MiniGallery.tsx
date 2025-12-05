import Image from "next/image";

export default function MiniGallery() {
    const images = [
        {
            src: "/images/hero-antelope-island.jpg",
            alt: "Panoramic landscape of Antelope Island",
            className: "col-span-2 row-span-2"
        },
        {
            src: "/images/bison-antelope-island.jpg",
            alt: "Bison grazing on Antelope Island",
            className: ""
        },
        {
            src: "/images/avocets.jpeg",
            alt: "American avocets in shallow water",
            className: ""
        },
        {
            src: "/images/arches.jpg",
            alt: "Arches National Park sandstone formations",
            className: ""
        },
        {
            src: "/images/bison-breath.jpg",
            alt: "Yellowstone bison on a frosty morning",
            className: ""
        },
        {
            src: "/images/coyote-in-grass.jpg",
            alt: "Young coyote proudly stands above the grassland",
            className: ""
        },
        {
            src: "/images/wild-horses.jpg",
            alt: "The wild horses that roam the vast deserts of Utah",
            className: ""
        },
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="
        max-w-6xl mx-auto px-4 
        grid grid-cols-3 md:grid-cols-5 
        gap-4 
        auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px]
      ">
                {images.map((img) => (
                    <div
                        key={img.src}
                        className={`relative rounded-xl overflow-hidden group ${img.className}`}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
