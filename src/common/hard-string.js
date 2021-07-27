export default {
  about: {
    greeting: {
      title: "About Us",
      description: `
        Founded in 2010, we are a creative agency that produces lasting results
        for our clients. We've partnered with many startups, corporations, and
        nonprofits alike to craft designs that make real impact. We're always 
        looking forward to creating brands, products, and digital experiences 
        that connect with our clients' audiences.
      `
    },
    more: {
      worldClassTalent: {
        title: "World-class talent",
        imageURL: {
          mobile: "/static/about/mobile/image-world-class-talent.jpg",
          tablet: "/static/about/tablet/image-world-class-talent.jpg",
          laptop: "/static/about/laptop/image-world-class-talent.jpg"
        },
        descriptions: [
          `
            We are a crew of strategists, problem-solvers, and technologists. Every design 
            is thoughtfully crafted from concept to launch, ensuring success in its given
            market. We are constantly updating our skils in a myriad of platforms.
          `,
          `
            Our team is multi-disciplinary and we are not merely interested in form — content
            and meaning are just as important. We give great importance to craftsmanship,
            service, and prompt delivery. Clients have always been impressed with our
            high-quality outcomes that encapsulates their brand's story and mission.
          `
        ]
      },
      realDeal: {
        title: "The real deal",
        imageURL: {
          mobile: "/static/about/mobile/image-real-deal.jpg",
          tablet: "/static/about/tablet/image-real-deal.jpg",
          laptop: "/static/about/laptop/image-real-deal.jpg"
        },
        descriptions: [
          `
            As strategic partners in our clients' businesses, we are ready to take on any
            challenge as our own. Solving real problems require empathy and collaboration,
            and we strive to bring a fresh perspective to every opportunity. We make design
            and technology more accessible and give you tools to measure success.
          `,
          `
            We are visual storytellers in appealing and captivating ways. By combining
            business and marketing strategies, we inspire audiences to take action and drive
            real results.
          `
        ]
      }
    }
  },
  design: {
    web: {
      title: "WEB DESIGN",
      titleNoCap: "Web Design",
      toURL: "/web",
      imageURL: {
        mobile: "/static/common/design-link-bg/mobile/image-web-design.jpg",
        tablet: "/static/common/design-link-bg/tablet/image-web-design.jpg",
        laptop: "/static/common/design-link-bg/laptop/image-web-design-small.jpg",
        laptopLarge: "/static/common/design-link-bg/laptop/image-web-design-large.jpg"
      },
      description: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
      cards: [
        {
          title: "EXPRESS",
          titleNoCap: "Express",
          description: "A multi-carrier shipping website for ecommerce businesses",
          imageURL: "/static/design/web/image-express.jpg"
        },
        {
          title: "TRANSFER",
          titleNoCap: "Transfer",
          description: "Site for low-cost money transfers and sending money within seconds",
          imageURL: "/static/design/web/image-transfer.jpg"
        },
        {
          title: "PHOTON",
          titleNoCap: "Photon",
          description: "A state-of-the-art music player with high-resolution audio and DSP effects",
          imageURL: "/static/design/web/image-photon.jpg"
        },
        {
          title: "BUILDER",
          titleNoCap: "Builder",
          description: "Connects users with local contractors based on their location",
          imageURL: "/static/design/web/image-builder.jpg"
        },
        {
          title: "BLOGR",
          titleNoCap: "Blogr",
          description: "Blogr is a platform for creating an online blog or publication",
          imageURL: "/static/design/web/image-blogr.jpg"
        },
        {
          title: "CAMP",
          titleNoCap: "Camp",
          description: "Get expert in training in coding, data, design, and digital marketing",
          imageURL: "/static/design/web/image-camp.jpg"
        }
      ]
    },
    app: {
      title: "APP DESIGN",
      titleNoCap: "App Design",
      toURL: "/app",
      imageURL: {
        mobile: "/static/common/design-link-bg/mobile/image-app-design.jpg",
        tablet: "/static/common/design-link-bg/tablet/image-app-design.jpg",
        laptop: "/static/common/design-link-bg/laptop/image-app-design.jpg"
      },
      description: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
      cards: [
        {
          title: "AIRFILTER",
          titleNoCap: "AirFilter",
          description: "Solving the problem of poor indoor air quality by filtering the air.",
          imageURL: "/static/design/app/image-airfilter.jpg"
        },
        {
          title: "EYECAM",
          titleNoCap: "EyeCam",
          description: "Product that lets you edit your favourite photos and videos at any time",
          imageURL: "/static/design/app/image-eyecam.jpg"
        },
        {
          title: "FACEIT",
          titleNoCap: "FaceIt",
          description: "Get to meet your favourite internet superstar with the faceit app",
          imageURL: "/static/design/app/image-faceit.jpg"
        },
        {
          title: "TODO",
          titleNoCap: "ToDo",
          description: "A todo app that features cloud sync with light and dark mode",
          imageURL: "/static/design/app/image-todo.jpg"
        },
        {
          title: "LOOPSTUDIOS",
          titleNoCap: "LoopStudios",
          description: "A VR experience app made for Loopstudios",
          imageURL: "/static/design/app/image-loopstudios.jpg"
        }
      ]
    },
    graphic: {
      title: "GRAPHIC DESIGN",
      titleNoCap: "Graphic Design",
      toURL: "/graphic",
      imageURL: {
        mobile: "/static/common/design-link-bg/mobile/image-graphic-design.jpg",
        tablet: "/static/common/design-link-bg/tablet/image-graphic-design.jpg",
        laptop: "/static/common/design-link-bg/laptop/image-graphic-design.jpg",
      },
      description: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
      cards: [
        {
          title: "TIM BROWN",
          titleNoCap: "Tim Brown",
          description: "A book cover designed for Tim Brown's new release, 'Change'",
          imageURL: "/static/design/graphic/image-change.jpg"
        },
        {
          title: "BOXED WATER",
          titleNoCap: "Boxed Water",
          description: "A simple packaging concept made for Boxed Water",
          imageURL: "/static/design/graphic/image-boxed-water.jpg"
        },
        {
          title: "SCIENCE!",
          titleNoCap: "Science!",
          description: "A poster made in collaboration with the Federal Art Project",
          imageURL: "/static/design/graphic/image-science.jpg"
        }
      ]
    }
  },
  locations: [
    {
      id: "ca",
      name: "Canada",
      nameCaps: "CANADA",
      hq: "Designo Central Office",
      address: [
        '3886 Wellington Street',
        'Toronto, Ontario M9C 3J5'
      ],
      phone: '+1 253-863-8967',
      email: 'contact@designo.co',
      lat: 43.64426472131995,
      lng: -79.3946252325258,
      imageURL: "/static/common/locations/illustration-canada.svg"
    },
    {
      id: "aus",
      name: "Australia",
      nameCaps: "AUSTRALIA",
      hq: "Designo AU Office",
      address: [
        '19 Balonne Street',
        'New South Wales 2443'
      ],
      phone: '(02) 6720 9092',
      email: 'contact@designo.au',
      lat: -30.329401064457144,
      lng: 149.7882425021095,
      imageURL: "/static/common/locations/illustration-australia.svg"
    },
    {
      id: "uk",
      name: "United Kingdom",
      nameCaps: "UNITED KINGDOM",
      hq: "Designo UK Office",
      address: [
        '13 Colorado Way',
        'Rhyd-y-fro SA8 9GA'
      ],
      phone: '078 3115 1400',
      email: 'contact@designo.uk',
      lat: 51.93943805902307,
      lng: -3.8814627292346766,
      imageURL: "/static/common/locations/illustration-united-kingdom.svg"
    }
  ],
  advantages: [
    {
      title: "PASSIONATE",
      description: `
        Each project starts with an in-depth brand research to ensure we only create products 
        that serve a purpose. We merge art, design, and technology into exciting new solutions.
      `,
      imageURL: "/static/home/illustration-passionate.svg"
    },
    {
      title: "RESOURCEFUL",
      description: `
        Everything that we do has a strategic purpose. We use an agile approach in all of our 
        projects and value customer collaboration. It guarantees superior results that fulfill 
        our clients' needs.
      `,
      imageURL: "/static/home/illustration-resourceful.svg"
    },
    {
      title: "FRIENDLY",
      description: `
        We are a group of enthusiastic folks who know how to put people first. Our success 
        depends on our customers, and we strive to give them the best experience a company 
        can provide.
      `,
      imageURL: "/static/home/illustration-friendly.svg",
    }
  ],
  contact: {
    title: "Contact Us",
    description: `
      Ready to take it to the next level? Let's talk about your project or idea and find out how
      we can help your business grow. If you are looking for unique digital experiences that's
      relatable to your users, drop us a line.
    `,
    error: {
      common: {
        required: "This field is required"
      },
      email: "This email is invalid"
    }
  }
}