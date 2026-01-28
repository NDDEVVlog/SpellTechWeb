// src/data.js

// 1. IMPORT TỪ CÁC FILE RIÊNG LẺ (Đúng chuẩn cấu trúc của bạn)
import DevlogGodot from './posts/DevlogGodot';
import ArtDuckKing from './posts/ArtDuckKing';

import CyberOdyssey from './products/CyberOdyssey';
import DuckKingdom from './products/DuckKingdom';
import SceneSwitcherTool_V2 from './products/SceneSwitcherTool_V2';

// 2. DATA PRODUCTS
export const productsData = [
  {
    id: "cyber-odyssey",
    slug: "cyber-odyssey",
    title: "Cyber Odyssey",
    genre: "RPG / Open World",
    status: "Live",
    releaseDate: "2024",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
    desc: "A futuristic RPG where you play as a rogue AI trying to find its creator.",
    ContentComponent: CyberOdyssey, // Sử dụng component đã import
    features: ["Open World", "Ray Tracing Support", "Multiple Endings"]
  },
  {
    id: "duck-kingdom",
    slug: "duck-kingdom",
    title: "Duck Kingdom",
    genre: "Simulation",
    status: "Live",
    releaseDate: "2023",
    img: "https://images.unsplash.com/photo-1555864326-5cf22ef123cf?q=80&w=2671&auto=format&fit=crop",
    desc: "Build a kingdom solely for ducks.",
    ContentComponent: DuckKingdom,
    features: ["Quack Physics", "Bread Economy", "Goose Raids"]
  },
  {
    id: "scene-switcher-tool-v2",
    slug: "scene-switcher-tool-v2",
    title: "Scene Switcher Tool V2",
    genre: "Tool",
    status: "Beta",
    releaseDate: "TBA",
    img: "https://images.unsplash.com/photo-1635326444826-06c8f711e7c5?q=80&w=2670&auto=format&fit=crop",
    desc: "A powerful tool for switching scenes in Unity Development.",
    ContentComponent: SceneSwitcherTool_V2, 
    features: ["Tool ", "TagManager Integration", "ToolBar Access" ]
  }
];

// 3. DATA BLOGS
export const blogsData = [
  {
    id: "why-godot",
    slug: "why-godot",
    date: "JAN 15, 2025",
    author: "NDDevGame",
    title: "Devlog #1: Why we switched to Godot Engine",
    tag: "Tech",
    excerpt: "Unity was fun, but open source is the future.",
    ContentComponent: DevlogGodot // Sử dụng component đã import
  },
  {
    id: "art-process-duck",
    slug: "art-process-duck",
    date: "DEC 20, 2024",
    author: "Sora",
    title: "Art Process: Creating the Duck King",
    tag: "Art",
    excerpt: "Creating the main character from sketch to 3D model.",
    ContentComponent: ArtDuckKing
  }
];