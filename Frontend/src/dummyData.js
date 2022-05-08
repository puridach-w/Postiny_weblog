
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
const blogList = [{
  id: 1,
  author_id: 2,
  title: '7 CSS tools you should be using',
  category: 'technology',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  authorName: 'John Doe',
  authorAvatar: 'https://picsum.photos/200/500',
  createdAt: 'June 03, 2021',
  cover: 'https://picsum.photos/1920/1080',
  subRequired: '0',
},
{
  id: 2,
  author_id: 1,
  title: 'Milan Places That Highlight The City',
  category: 'music',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  authorName: 'John Doe',
  authorAvatar: 'https://picsum.photos/400/300',
  createdAt: 'June 03, 2021',
  cover: 'https://picsum.photos/1910/1080',
  subRequired: '1',
},
{
  id: 3,
  author_id: 3,
  title: 'Art & Perception',
  category: 'art',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  authorName: 'John Doe',
  authorAvatar: 'https://picsum.photos/500/200',
  createdAt: 'June 03, 2021',
  cover: 'https://picsum.photos/1900/1080',
  subRequired: '1',
},
{
  id: 4,
  author_id: 4,
  title: 'ADVENTURE IN YOU',
  category: 'art & design',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  authorName: 'John Doe',
  authorAvatar: 'https://picsum.photos/200/700',
  createdAt: 'June 03, 2021',
  cover: 'https://picsum.photos/1890/1080',
  subRequired: '1',
},
{
  id: 5,
  author_id: 3,
  title: 'Loaded BBQ Baked Potatoes',
  category: 'sports',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  authorName: 'John Doe',
  authorAvatar: 'https://picsum.photos/600/700',
  createdAt: 'June 03, 2021',
  cover: 'https://picsum.photos/1880/1080',
  subRequired: '0',
},
{
  id: 6,
  author_id: 2,
  title: 'Beyond the Beach',
  category: 'music',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  authorName: 'John Doe',
  authorAvatar: 'https://picsum.photos/800/900',
  createdAt: 'June 03, 2021',
  cover: 'https://picsum.photos/1870/1080',
  subRequired: '0',
},
{
  id: 7,
  author_id: 1,
  title: 'Online Shopping - An Alternative to Shopping in the Mall',
  category: 'Beauty',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  authorName: 'John Doe',
  authorAvatar: 'https://picsum.photos/100/500',
  createdAt: 'June 03, 2021',
  cover: 'https://picsum.photos/1860/1080',
  subRequired: '1',
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

const userInfo = [{
    user_id: 1,
    role_id: 1,
    username: "iamkonsuay",
    password: "konsuayngingi",
    email: "ks@gmail.com",
    firstname: "Konsuay",
    lastname: "Ruayjung",
    DOB: "2002-02-02",
    gender: "F",
    phone_number: "0880770909",
    profile_pic: "ponyreg.png",
    bio: "Yark la ork kaa pi sao",
    coin_balance: "100",
    created_at: "2022-04-04 11:03:04",
    updated_at: "2022-04-04 11:30:04"
},
{
    user_id: 2,
    role_id: 1,
    username: "jimmy",
    password: "hahahaha",
    email: "jn@gmail.com",
    firstname: "Jimmy",
    lastname: "Nelson",
    DOB: "2002-05-05",
    gender: "M",
    phone_number: "0630147582",
    profile_pic: "profilesample.jpg",
    bio: "Deadline is faster than karma :(",
    coin_balance: "50",
    created_at: "2022-02-04 11:03:04",
    updated_at: "2022-04-04 09:30:04"
},
{
    user_id: 3,
    role_id: 1,
    username: "buerjung",
},
{
    user_id: 4,
    role_id: 1,
    username: "anjing",
},
{
    user_id: 5,
    role_id: 1,
    username: "gobok",
},
];

// top 5 article data
const topArticle = [{
  id: 1,
  title: '7 CSS tools you should be using',
  category: 'technology',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  authorName: 'John Doe',
  cover: 'https://picsum.photos/1920/1080',
  like: '320',
  comment: '51',
},
{
  id: 2,
  title: 'Milan Places That Highlight The City',
  category: 'music',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  authorName: 'Sonia Gautam',
  cover: 'https://picsum.photos/1910/1080',
  like: '290',
  comment: '25',
},
{
  id: 3,
  title: 'Art & Perception',
  category: 'art',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  authorName: 'Neeracha Seehawong',
  cover: 'https://picsum.photos/1900/1080',
  like: '215',
  comment: '49',
},
{
  id: 4,
  title: 'ADVENTURE IN YOU',
  category: 'art & design',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  authorName: 'Apirak Senarak',
  cover: 'https://picsum.photos/1890/1080',
  like: '98',
  comment: '15',
},
{
  id: 5,
  title: 'Loaded BBQ Baked Potatoes',
  category: 'sports',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  authorName: 'Puridach Wutthihathaithamrong',
  cover: 'https://picsum.photos/1880/1080',
  like: '52',
  comment: '32',
},
];

const topSubscribedUser = [{
  id: 1,
  firstname: 'Christina',
  lastname: 'Koch',
  newSubCount: '89',
  category: 'Technology',
  authorAvatar: 'https://picsum.photos/200/500',
},
{
  id: 2,
  authorAvatar: 'https://picsum.photos/400/300',
  firstname: 'Ethan',
  lastname: 'Allen',
  newSubCount: '70',
  category: 'Art',
},
{
  id: 3,
  authorAvatar: 'https://picsum.photos/500/200',
  firstname: 'Lily',
  lastname: 'Watson',
  newSubCount: '34',
  category: 'Music',
},
{
  id: 4,
  authorAvatar: 'https://picsum.photos/200/700',
  firstname: 'Dewayne',
  lastname: 'Bancroft',
  newSubCount: '21',
  category: 'Technology',
},
{
  id: 5,
  authorAvatar: 'https://picsum.photos/600/700',
  firstname: 'Issac',
  lastname: 'Hambleton',
  newSubCount: '12',
  category: 'Game',
},
];

export { adsArticles, favCategory, userInfo, topArticle,topSubscribedUser, blogList, likeArray, paymentApprove, getComments, createComment, updateComment, deleteComment, walletData, reports}