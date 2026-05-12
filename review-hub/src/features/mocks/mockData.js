export const pullRequests = 
[
  {
    id: 1042,
    type: "feat",
    title: "migrate auth layer to JWT with refresh token rotation",
    author: {
      name: "ankit.k",
      avatar: "AK",
    },
    openedAt: "2h ago",
    base: "main",

    labels: [
      {
        name: "auth",
        color: "#e6ccff",
      },
      {
        name: "breaking",
        color: "#ffe0cc",
      },
    ],

    reviewers: {
      count: 2,
      status: "reviewing",
    },

    stats: {
      filesChanged: 4,
      additions: 312,
      deletions: 89,
      comments: 7,
    },

    reviewStatus: {
      label: "In review",
      type: "in-review",
    },
  },

  {
    id: 1041,
    type: "fix",
    title: "virtual list height recalculation on window resize",
    author: {
      name: "sara.r",
      avatar: "SR",
    },
    openedAt: "5h ago",
    base: "develop",

    labels: [
      {
        name: "perf",
        color: "#cce5ff",
      },
      {
        name: "ui",
        color: "#ccffcc",
      },
    ],

    reviewers: {
      count: 1,
      status: "approved",
    },

    stats: {
      filesChanged: 1,
      additions: 18,
      deletions: 4,
      comments: 2,
    },

    reviewStatus: {
      label: "Approved",
      type: "approved",
    },
  },

  {
    id: 1040,
    type: "chore",
    title: "add Lighthouse CI, bundle size budget, accessibility checks",
    author: {
      name: "priya.l",
      avatar: "PL",
    },
    openedAt: "1d ago",
    base: "main",

    labels: [
      {
        name: "ci/cd",
        color: "#cccccc",
      },
    ],

    reviewers: {
      count: 0,
      status: "none",
    },

    stats: {
      filesChanged: 6,
      additions: 201,
      deletions: 14,
      comments: 11,
    },

    reviewStatus: {
      label: "Changes requested",
      type: "changes-requested",
    },
  },

  {
    id: 1039,
    type: "refactor",
    title: "extract design token layer into packages/tokens",
    author: {
      name: "ankit.k",
      avatar: "AK",
    },
    openedAt: "2d ago",
    base: "main",

    labels: [],

    reviewers: {
      count: 0,
      status: "draft",
    },

    stats: {
      filesChanged: 22,
      additions: 1204,
      deletions: 890,
      comments: 0,
    },

    reviewStatus: {
      label: "Draft",
      type: "draft",
    },
  },

  {
    id: 1038,
    type: "feat",
    title: "implement optimistic UI updates for task mutations",
    author: {
      name: "devansh.p",
      avatar: "DP",
    },
    openedAt: "3d ago",
    base: "develop",

    labels: [
      {
        name: "frontend",
        color: "#cce5ff",
      },
      {
        name: "react-query",
        color: "#ffccff",
      },
    ],

    reviewers: {
      count: 3,
      status: "reviewing",
    },

    stats: {
      filesChanged: 9,
      additions: 455,
      deletions: 103,
      comments: 18,
    },

    reviewStatus: {
      label: "In review",
      type: "in-review",
    },
  },

  {
    id: 1037,
    type: "fix",
    title: "resolve memory leak in websocket subscription cleanup",
    author: {
      name: "megha.s",
      avatar: "MS",
    },
    openedAt: "4d ago",
    base: "release/v2",

    labels: [
      {
        name: "bug",
        color: "#ffcccc",
      },
      {
        name: "realtime",
        color: "#e6ccff",
      },
    ],

    reviewers: {
      count: 2,
      status: "approved",
    },

    stats: {
      filesChanged: 5,
      additions: 92,
      deletions: 41,
      comments: 6,
    },

    reviewStatus: {
      label: "Approved",
      type: "approved",
    },
  },
];