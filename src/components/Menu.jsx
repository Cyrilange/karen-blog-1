import React from "react";

const Menu = () => {
  const posts = [
    {
      id: 2,
      title: "el lotus",
      desc: "joyas con un toque elegante",
      img: "https://m.media-amazon.com/images/S/shoppable-media-external-prod-dub-us-east-1/ffc8f22c-5d0a-4a15-b0da-56d7b44f11ff/5b5aa-ca85-49e4-8246-35766a620._SX1200_SCLZZZZZZZ_.jpeg",
      link: "https://www.amazon.es/shop/kamachasi/photo/amzn1.shoppablemedia.v1.9b6a364f-bc5c-457d-a41d-b0566d885752?tag=onamzkarencha-21&ref_=cm_sw_r_cp_mwn_aipsfshop_aipsfkamachasi_4B9CF4Y6RVA6MJVRED7W",
    },
    {
      id: 3,
      title: "Pot tu ordinador",
      desc: " ea est doloremque voluptatum numquam amet quos consequatur tempora inventore dolores assumenda itaque adipisci sed quo quae nisi architecto ipsa doloribus. Delectus nihil, dolorum eveniet voluptatem maiores id consectetur excepturi necessitatibus consequatur odit cumque aliquid accusantium vitae est ratione sit. Provident deleniti deserunt voluptas eaque non expedita, rem tempore cupiditate eos ea qui consequuntur neque vel placeat ipsam nemo quisquam doloribus ad facilis, iusto modi? Sint totam, placeat repellendus, quos nulla, nobis at eius obcaecati asperiores tenetur ipsa enim. Placeat, eaque a sint, corrupti obcaecati, rem facilis voluptatum adipisci error at consectetur! Incidunt, et eligendi! Perspiciatis.",
      img: "https://m.media-amazon.com/images/I/61Vwn8ZemFL._AC_SX569_.jpg",
      link: "https://www.amazon.es/Kingston-DataTraveler-Memoria-DTXON-128GB/dp/B0BW9R7P3J?pd_rd_w=1YAYV&content-id=amzn1.sym.22a8c146-5655-4677-8e49-50eee0d1d0dc&pf_rd_p=22a8c146-5655-4677-8e49-50eee0d1d0dc&pf_rd_r=2XGSBRPF90GEBBMZRN4D&pd_rd_wg=1UKTN&pd_rd_r=0410d1b3-8e25-4a71-b55d-e2c7acbe512a&pd_rd_i=B0BW9R7P3J&th=1&linkCode=ll1&tag=kamachasi-21&linkId=7dc979d3dd5ff66af69ccefc6e5eedd5&language=es_ES&ref_=as_li_ss_tl",
    },
    {
      id: 4,
      title: "Lavadora",
      desc: "Lavadora-secadora de carga frontal, capacidad 9/6 kg, 1400 rpm, bajo consumo, con inteligencia artificial, función de vapor, cuidado de la ropa, color blanco",
      img: "https://m.media-amazon.com/images/I/71p39P-kmxL._AC_SX522_.jpg",
      link: "https://www.amazon.es/dp/B09NRRG7QZ?linkCode=ssc&tag=onamzkarencha-21&creativeASIN=B09NRRG7QZ&asc_item-id=amzn1.ideas.2STLBPC9SIXG2&ref_=cm_sw_r_cp_mwn_aipsfshop_aipsfkamachasi_4B9CF4Y6RVA6MJVRED7W_asin&th=1",
    },
    {
      id: 5,
      title: "",
      desc: "",
      img: "",
      link: "",
    },
    {
      id: 6,
      title: "",
      desc: "",
      img: "",
      link: "",
    },
    {
      id: 7,
      title: "",
      desc: "",
      img: "",
      link: "",
    },
    {
      id: 9,
      title: "",
      desc: "",
      img: "",
      link: "",
    },
    {
      id: 9,
      title: "",
      desc: "",
      img: "",
      link: "",
    },
  ];
  return (
    <div className="menu">
      <h2>"Otros posts que podrían interesarte"</h2>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.desc}</p>
          {post.link && ( // Check if the post has a link
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <button>Go</button>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
