
const clickAds = () => {
    alert("Go to that ads article!");
}

// article (adsvertisement)
const adsArticles = [
    {
        image: "https://picsum.photos/400/600",
        title: "Mountain",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        clickAds: clickAds
    },
    {
        image: "https://picsum.photos/400/500",
        title: "Artwork",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        clickAds: clickAds
    },
    {
        image: "https://picsum.photos/500/800",
        title: "Bitcoin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        clickAds: clickAds
    },
    {
        image: "https://picsum.photos/500/700",
        title: "Pony",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        clickAds: clickAds
    },
    {
        image: "https://picsum.photos/500/600",
        title: "Pikachu",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        clickAds: clickAds
    },
    {
        image: "https://picsum.photos/400/800",
        title: "Kitty",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        clickAds: clickAds
    }
];

// user interest category
const favCategory = [
  {
    id: 1,
    username: "John doe",
    category: "music"
  }
];

// blog data
const blogList = [
    {
      id: 1,
      title: '7 CSS tools you should be using',
      category: 'technology',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: 'https://picsum.photos/200/500',
      createdAt: 'June 03, 2021',
      cover: 'https://picsum.photos/1920/1080',
    },
    {
      id: 2,
      title: 'Milan Places That Highlight The City',
      category: 'music',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: 'https://picsum.photos/400/300',
      createdAt: 'June 03, 2021',
      cover: 'https://picsum.photos/1910/1080',
    },
    {
      id: 3,
      title: 'Art & Perception',
      category: 'art',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: 'https://picsum.photos/500/200',
      createdAt: 'June 03, 2021',
      cover: 'https://picsum.photos/1900/1080',
    },
    {
      id: 4,
      title: 'ADVENTURE IN YOU',
      category: 'art & design',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: 'https://picsum.photos/200/700',
      createdAt: 'June 03, 2021',
      cover: 'https://picsum.photos/1890/1080',
    },
    {
      id: 5,
      title: 'Loaded BBQ Baked Potatoes',
      category: 'sports',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: 'https://picsum.photos/600/700',
      createdAt: 'June 03, 2021',
      cover: 'https://picsum.photos/1880/1080',
    },
    {
      id: 6,
      title: 'Beyond the Beach',
      category: 'music',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: 'https://picsum.photos/800/900',
      createdAt: 'June 03, 2021',
      cover: 'https://picsum.photos/1870/1080',
    },
    {
      id: 7,
      title: 'Online Shopping - An Alternative to Shopping in the Mall',
      category: 'Beauty',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: 'https://picsum.photos/100/500',
      createdAt: 'June 03, 2021',
      cover: 'https://picsum.photos/1860/1080',
    },
];

const likeArray = [
  {
    id: "1",
    like: 100
  }
]

const paymentApprove = [
  {
    id: 1,
    username: "kkntaun",
    amount: 300,
    date: "12-Mar-2022",
    status: "Approved",
    receipt: "bill.png"
  },
  {
    id: 2,
    username: "aobapirak",
    amount: 200,
    date: "12-Mar-2022",
    status: "Approved",
    receipt: "bill.png"
  },
  {
    id: 3,
    username: "neenbaebae",
    amount: 200,
    date: "12-Mar-2022",
    status: "Rejected",
    receipt: "bill.png"
  },
  {
    id: 4,
    username: "ssoniaaas ",
    amount: 200,
    date: "12-Mar-2022",
    status: "Pending",
    receipt: "bill.png"
  },
  {
    id: 5,
    username: "prariyap",
    amount: 300,
    date: "12-Mar-2022",
    status: "Pending",
    receipt: "bill.png"
  }
]

// Data for comment
const getComments = async () => {
  return [
    {
      id: "1",
      body: "First comment",
      username: "Jack",
      userId: "1",
      // parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Second comment",
      username: "John",
      userId: "2",
      // parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "First comment first child",
      username: "John",
      userId: "2",
      // parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Second comment second child",
      username: "John",
      userId: "2",
      // parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substring(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

const updateComment = async (text) => {
  return { text };
};

const deleteComment = async () => {
  return {};
};

const walletData =[{
  userId:"U001",
  userName: "Jimmy",
  coinBalance: 80,
  payment: [{
      paymentId: "2001",
      userId: "1001",
      amount: "20",
      create: "13 Mar 2022" 
  },{
      paymentId: "2002",
      userId: "1001",
      amount: "20", 
      create: "14 Mar 2022" 
  },{
      paymentId: "2003",
      userId: "1001",
      amount: "20", 
      create: "14 Mar 2022" 
  },{
      paymentId: "2004",
      userId: "1001",
      amount: "20", 
      create: "15 Mar 2022" 
  }],
  subscription: [{
      sub_id: "1001",
      sub_user_id: "1005",
      create: "15 Mar 2022" 
  }]
}];

const reports= [
  {
    id: 1,
    username: "kkntaun",
    type: "Payment",
    date: "12-Mar-2022",
    status: "Approved",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  },
  {
    id: 2,
    username: "aobapirak",
    type: "Comment",
    date: "12-Mar-2022",
    status: "Approved",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  },
  {
    id: 3,
    username: "neenbaebae",
    type: "Payment",
    date: "13-Mar-2022",
    status: "Approved",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  },
  {
    id: 4,
    username: "ssoniaaas ",
    type: "Article",
    date: "13-Mar-2022",
    status: "Rejected",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  },
  {
    id: 5,
    username: "prariyap",
    type: "Article",
    date: "14-Mar-2022",
    status: "Approved",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  },
  {
    id: 6,
    username: "prariyap",
    type: "Comment",
    date: "15-Mar-2022",
    status: "Approved",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  },
  {
    id: 7,
    username: "kkntaun",
    type: "Payment",
    date: "15-Mar-2022",
    status: "Approved",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  },
  {
    id: 8,
    username: "aobapirak",
    type: "Comment",
    date: "15-Mar-2022",
    status: "Rejected",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  },
  {
    id: 9,
    username: "neenbaebae",
    type: "Article",
    date: "15-Mar-2022",
    status: "Pending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  },
  {
    id: 10,
    username: "kkntaun",
    type: "Payment",
    date: "16-Mar-2022",
    status: "Pending",
    description: "Lorem ipsum dolor sit amet, "
  },
  {
    id: 11,
    username: "aobapirak",
    type: "Comment",
    date: "16-Mar-2022",
    status: "Pending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  },
  {
    id: 12,
    username: "neenbaebae",
    type: "Payment",
    date: "16-Mar-2022",
    status: "Pending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  },
  {
    id: 13,
    username: "ssoniaaas ",
    type: "Article",
    date: "16-Mar-2022",
    status: "Pending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  },
  {
    id: 14,
    username: "prariyap",
    type: "Article",
    date: "16-Mar-2022",
    status: "Pending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  },
  {
    id: 15,
    username: "prariyap",
    type: "Comment",
    date: "17-Mar-2022",
    status: "Pending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet nulla facilisi morbi tempus i"
  }]

export { adsArticles, favCategory, blogList, likeArray, paymentApprove, getComments, createComment, updateComment, deleteComment, walletData, reports}