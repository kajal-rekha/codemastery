import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692868689/Screenshot_3_cqfghe.png",
    alt: "cordemy_project",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692869707/Screenshot_4_fua8px.png",
    alt: "proxima_image",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692869981/Screenshot_5_n4kgjo.png",
    alt: "tech_alpha",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692877505/Screenshot_7_xzmhtn.png",
    alt: "foodvarse",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692877869/Screenshot_8_gxekew.png",
    alt: "todo app",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692878024/Screenshot_9_fpzwdb.png",
    alt: "immemorial",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692878285/Screenshot_10_jrsb27.png",
    alt: "antivirus",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692878446/Screenshot_11_rytwki.png",
    alt: "reel verse",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692878709/Screenshot_12_azlvba.png",
    alt: "access bank",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692880055/Screenshot_14_nndrbz.png",
    alt: "food castle",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692880323/Screenshot_15_bet30g.png",
    alt: "chillbuddy",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692880968/Screenshot_19_egojaq.png",
    alt: "photography",
  },
];

const GalleryItem = () => {
  return (
    <section className="wrapper section-padding">
      <h2 className="text-center text-3xl lg:text-5xl ">Projects Gallery</h2>
      <div className="grid grid-cols  md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-10 mt-20">
        {data.map((image) => (
          <div
            key={image.id}
            className="w-full rounded-xl overflow-hidden h-[28rem]"
          >
            <div
              className="overflow-hidden h-full"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <Link to="/projects">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover hover:scale-125 duration-500"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryItem;
