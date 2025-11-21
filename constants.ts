import { ClientData } from "./types";

export const clients: ClientData[] = [
  {
    id: "obby",
    name: "OBBY",
    tagline: "Geosocial Networking",
    problem: "Create a suite of sounds for their platform that would make the experience feel familiar to a networking app yet standout in it's sophistication.",
    solution: "We created an airy and refined sonic pallet to match the assuredness of Obby's personality. The sound set blends knocking percussive elements and simple harmonic timbres, giving it polished confidence assuredness. The primary cues of match and message have familiar harmonic voicing, yet stand out slightly with their texture.",
    themeColor: "bg-[#ff5500]",
    sounds: [
      { name: "Match", type: "Alert", function: "Successful match based on shared interests and activities", previewNote: "523.25", waveType: "sine" }, // C5
      { name: "Message", type: "Alert", function: "Message from new friend", previewNote: "659.25", waveType: "sine" }, // E5
      { name: "Activity", type: "UI", function: "Chosing activities at the start of the use journey. You will only hear this sound once.", previewNote: "783.99", waveType: "triangle" }, // G5
      { name: "Participate", type: "UI", function: "Participating in a group activity with friends; rewarded with discounts", previewNote: "1046.50", waveType: "sine" } // C6
    ]
  },
  {
    id: "eva",
    name: "EVA",
    tagline: "Rideshare",
    problem: "Create distinctive sound set that alerted drivers of various types of orders without looking at their phone.",
    solution: "We chose woody and rounded sounds to create this sound set. The pallet it inviting and warm, but also attention grabbing. We drew inspiration from aspen stands; a community of hundreds trees that make up one living organism.",
    themeColor: "bg-[#5555ff]",
    sounds: [
      { name: "Open App", type: "Confirmation", function: "Driver opens application", previewNote: "220", waveType: "triangle" },
      { name: "Marijuana", type: "Alert", function: "Pickup request: Medical", previewNote: "329.63", waveType: "square" },
      { name: "Food", type: "Alert", function: "Pickup request: Food Delivery", previewNote: "392.00", waveType: "sawtooth" },
      { name: "Item", type: "Alert", function: "Pickup request: Parcel", previewNote: "440", waveType: "triangle" },
      { name: "People", type: "Alert", function: "Pickup request: Passenger", previewNote: "493.88", waveType: "sine" },
      { name: "Promotion", type: "Confirmation", function: "New promotion available", previewNote: "587.33", waveType: "sine" },
      { name: "Cash Out", type: "UI", function: "Driver initiates cash out", previewNote: "880", waveType: "sine" },
    ]
  },
  {
    id: "elysium",
    name: "Elysium",
    tagline: "XR Social Platform",
    problem: "Elysium is a complex XR creation environment where users can populate worlds.",
    solution: "We focused on spatial audio cues and synthetic textures that feel futuristic yet grounded, allowing users to navigate 3D space intuitively.",
    themeColor: "bg-[#4a3030]", // Dark Coffee Brown
    sounds: [
      { name: "Pin", type: "UI", function: "Pin object in 3D space", previewNote: "150", waveType: "sawtooth" },
      { name: "Create Fence", type: "UI", function: "Define boundary area", previewNote: "200", waveType: "square" },
      { name: "Select", type: "UI", function: "Highlight object", previewNote: "350", waveType: "triangle" },
      { name: "Create Asset", type: "UI", function: "Instantiate new item", previewNote: "600", waveType: "sine" },
      { name: "Delete Asset", type: "UI", function: "Remove item", previewNote: "100", waveType: "sawtooth" },
    ]
  }
];