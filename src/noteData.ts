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
    date: "09/17/23 2.55 PM",
    createdTime: new Date("Sat Sep 17  2023 14:55:22").getTime(),
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
    date: "09/18/23 2.55 PM",
    createdTime: new Date("Sun Sep 18  2023 14:55:22").getTime(),
    editedTime: null,
    id: v4(),
  },
];

export default notes;
