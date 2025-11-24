import { Section } from './types';

export const EXERCISE_DATA: Section[] = [
  {
    id: 'I',
    title: 'I. Dạng 1: Chia Động Từ (Chọn đáp án đúng nhất)',
    questions: [
      {
        id: 1,
        question: "What ______ (you/do) ______ at the moment?",
        options: ["do you do", "are you doing", "is you doing", "does you do"],
        correctIndex: 1
      },
      {
        id: 2,
        question: "Listen! Someone ______ (sing) ______ a very beautiful song.",
        options: ["is singing", "sings", "are singing", "singing"],
        correctIndex: 0
      },
      {
        id: 3,
        question: "My little brother ______ (not/cry) ______. He is laughing happily.",
        options: ["doesn't cry", "aren't crying", "is not crying", "not crying"],
        correctIndex: 2
      },
      {
        id: 4,
        question: "We ______ (have) ______ a picnic on the beach next Sunday.",
        options: ["has", "is having", "are having", "having"],
        correctIndex: 2
      },
      {
        id: 5,
        question: "The baby ______ (sleep) ______ now. Please be quiet.",
        options: ["sleeps", "is sleeping", "are sleeping", "sleeping"],
        correctIndex: 1
      },
      {
        id: 6,
        question: "Look! The prices ______ (go) ______ up constantly these days.",
        options: ["is going", "go", "are going", "goes"],
        correctIndex: 2
      },
      {
        id: 7,
        question: "He ______ (always/interrupt) ______ me when I am talking.",
        options: ["always interrupts", "is always interrupting", "are always interrupting", "always is interrupting"],
        correctIndex: 1
      },
      {
        id: 8,
        question: "They ______ (not/come) ______ to the party tomorrow night.",
        options: ["don't come", "aren't coming", "doesn't come", "isn't coming"],
        correctIndex: 1
      },
      {
        id: 9,
        question: "______ (be) ______ you ______ (learn) ______ Spanish this semester?",
        options: ["Do / learn", "Are / learning", "Is / learning", "Are / learn"],
        correctIndex: 1
      },
      {
        id: 10,
        question: "I ______ (read) ______ a fascinating novel by a Vietnamese author these days.",
        options: ["read", "am reading", "reads", "are reading"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'II',
    title: 'II. Dạng 2: Phân Biệt Stative Verbs và Action Verbs',
    questions: [
      {
        id: 11,
        question: "John ______ (not/understand) ______ the instruction right now.",
        options: ["isn't understanding", "doesn't understand", "aren't understanding", "don't understand"],
        correctIndex: 1
      },
      {
        id: 12,
        question: "The flower ______ (smell) ______ so sweet.",
        options: ["is smelling", "smells", "are smelling", "smell"],
        correctIndex: 1
      },
      {
        id: 13,
        question: "She ______ (think) ______ that the new boss is too strict.",
        options: ["thinks", "is thinking", "are thinking", "think"],
        correctIndex: 0
      },
      {
        id: 14,
        question: "We ______ (not/need) ______ any more help at the moment.",
        options: ["are not needing", "doesn't need", "don't need", "isn't needing"],
        correctIndex: 2
      },
      {
        id: 15,
        question: "______ (Do) ______ you ______ (recognize) ______ the man in the black suit?",
        options: ["Are / recognizing", "Do / recognize", "Are / recognize", "Is / recognizing"],
        correctIndex: 1
      },
      {
        id: 16,
        question: "My coffee ______ (taste) ______ slightly bitter.",
        options: ["is tasting", "tastes", "are tasting", "taste"],
        correctIndex: 1
      },
      {
        id: 17,
        question: "I ______ (see) ______ my dentist this afternoon. (Sắp xếp, có kế hoạch)",
        options: ["see", "am seeing", "sees", "are seeing"],
        correctIndex: 1
      },
      {
        id: 18,
        question: "He ______ (be) ______ very rude today. (Tính cách tạm thời)",
        options: ["is", "being", "are", "is being"],
        correctIndex: 3
      },
      {
        id: 19,
        question: "They ______ (not/agree) ______ with the manager's proposal.",
        options: ["don't agree", "aren't agreeing", "doesn't agree", "not agree"],
        correctIndex: 0
      },
      {
        id: 20,
        question: "______ (Do) ______ she ______ (remember) ______ to call her mother?",
        options: ["Is / remembering", "Does / remember", "Do / remember", "Are / remembering"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'III',
    title: 'III. Dạng 3: Quy Tắc Thêm -ING và Sửa Lỗi',
    questions: [
      {
        id: 21,
        question: "Động từ nào sau đây sai khi thêm -ING?",
        options: ["Write → Writing", "Die → Dyeing", "Prefer → Preferring", "Travel → Traveling"],
        correctIndex: 1
      },
      {
        id: 22,
        question: "Chọn câu sử dụng Hiện tại Tiếp Diễn đúng ngữ pháp.",
        options: ["Where are the children playing at?", "Is she cooking a delicious meal now?", "I'm not wanting to go out tonight.", "He is always come late to school."],
        correctIndex: 1
      },
      {
        id: 23,
        question: "Động từ SIT khi chia Hiện tại Tiếp Diễn là:",
        options: ["Siting", "Sitting", "Sitted", "Sitsing"],
        correctIndex: 1
      },
      {
        id: 24,
        question: "Lỗi sai trong câu: 'I am having a beautiful house near the lake.' là:",
        options: ["am having", "near the lake", "a beautiful house", "Không có lỗi"],
        correctIndex: 0
      },
      {
        id: 25,
        question: "Lỗi sai trong câu: 'Look! The cat jumps over the fence.' là:",
        options: ["Look!", "the cat", "jumps", "over the fence"],
        correctIndex: 2
      },
      {
        id: 26,
        question: "Trong câu nào sau đây, ALWAYS được dùng để chỉ sự khó chịu?",
        options: ["My mother always bakes cookies on Sunday.", "He is always forgetting to lock the door.", "The boss always holds a meeting on Monday.", "We always go camping in the summer."],
        correctIndex: 1
      },
      {
        id: 27,
        question: "Động từ BEGIN khi chia Hiện tại Tiếp Diễn là:",
        options: ["Begining", "Beginnings", "Beginning", "Beginging"],
        correctIndex: 2
      },
      {
        id: 28,
        question: "Chọn câu diễn tả hành động đã sắp xếp trước trong tương lai.",
        options: ["We watch a movie every weekend.", "I am doing my laundry later this evening.", "The train leaves at 6 p.m.", "She is tall and thin."],
        correctIndex: 1
      },
      {
        id: 29,
        question: "Từ nào là dấu hiệu nhận biết của Hiện tại Tiếp Diễn trong câu sau: 'They are staying in a hotel for a few weeks at present.'",
        options: ["They", "in a hotel", "for a few weeks", "at present"],
        correctIndex: 3
      },
      {
        id: 30,
        question: "Chia động từ trong ngoặc (phủ định, Stative Verb): My grandparents ______ (not/believe) ______ in ghosts.",
        options: ["aren't believing", "don't believe", "doesn't believe", "isn't believing"],
        correctIndex: 1
      }
    ]
  }
];