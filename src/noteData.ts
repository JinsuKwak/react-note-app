import { v4 } from "uuid";

const notes = [
  {
    title: "Note 1 title",
    content: "Note 1 content",
    tags: [{ tagName: "coding", id: v4() }],
    color: "#cce0ff",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "17/09/23 10:47 PM",
    createdTime: 1695012446659,
    editedTime: null,
    id: v4(),
  },
  {
    title: "Note 2 title",
    content: "Note 2 content",
    tags: [{ tagName: "exercise", id: v4() }],
    color: "#ffcccc",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "17/09/23 10:52 PM",
    createdTime: 1695012743190,
    editedTime: null,
    id: v4(),
  },
];

export default notes;
