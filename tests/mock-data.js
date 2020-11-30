export const mockEvent = {
  name: "sample",
  location: "Mars",
  tagLines: [
    "Exclusive community for sample",
    "Not just for sample, but for all samples",
  ],
  description: "some event description goes here",
  submitTalk: "https://random.link/submit",
  feedback: "https://random.link/feedback",
  members: "1000+",
  socialLinks: [
    { name: "instagram", link: "https://www.instagram.com" },
    { name: "twitter", link: "http://twitter.com" },
    { name: "linkedin", link: "http://www.linkedin.com" },
    { name: "youtube", link: "https://www.youtube.com" },
  ],
  contact: {
    email: "no-reply@thoughtworks.com",
    address: {
      name: "ThoughtWorks Technologies (India) Pvt Ltd",
      addressLine1: "1st Floor, KCT Tech Park",
      addressLine2: "Thudiyalur Rd, Saravanampatti",
      City: "Coimbatore",
      mapRef: "https://random.link/map",
      embededMapRef: "https://random.link/embedMap",
    },
  },
  editions: [
    {
      id: 5,
      title: "Event titile of 5 - Single workshop",
      type: "workshop",
      startTime: 1605932100000,
      endTime: 1605942900000,
      sessions: [
        {
          talks: [
            {
              title: "Talk 1 of event 5",
              speaker: "Anonymous 1, ThoughtWorks.",
              startTime: 1605932100000,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Event titile of 4 - multiple talks",
      type: "talk",
      startTime: 1602303300000,
      endTime: 1602315000000,
      sessions: [
        {
          talks: [
            {
              title: "Talk 1 of event 4",
              speaker: "Anonymous 1, ThoughtWorks.",
              startTime: 1605932100000,
            },
            {
              title: "Talk 2 of event 4",
              speaker: "Anonymous 2, ThoughtWorks.",
              startTime: 1605932100000,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Event titile of 3 - multiple tracks/sessions",
      type: "Talk | Demo",
      startTime: 1598674500000,
      endTime: 1598680800000,
      sessions: [
        {
          talks: [
            {
              title: "Talk 1 of event 3",
              speaker: "Anonymous 1, ThoughtWorks.",
              startTime: 1598675400000,
            },
            {
              title: "Talk 2 of event 3",
              speaker: "Anonymous 1, ThoughtWorks.",
              startTime: 1598679000000,
            },
            {
              title: "Talk 3 of event 3",
              speaker: "Anonymous 1, ThoughtWorks.",
              startTime: 1598679900000,
            },
          ],
        },
        {
          talks: [
            {
              title: "Talk 4 of event 3",
              speaker: "Anonymous 1, ThoughtWorks.",
              startTime: 1599280200000,
            },
            {
              title: "Talk 5 of event 3",
              speaker: "Anonymous 1, ThoughtWorks.",
              startTime: 1599283800000,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Event titile of 2",
      type: "Talk | Demo",
      startTime: 1575691200000,
      endTime: 1575702000000,
      sessions: [
        {
          talks: [
            {
              title: "Talk 1 of event 2",
              speaker: "Anonymous 1, ThoughtWorks.",
              startTime: 1575691200000,
            },
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Event titile of 1",
      type: "Talk",
      startTime: 1549080000000,
      endTime: 1549090800000,
      sessions: [
        {
          talks: [
            {
              title: "Talk 1 of event 1",
              speaker: "Anonymous 1, ThoughtWorks.",
              startTime: 1549080000000,
            },
          ],
        },
      ],
    },
  ],
};
