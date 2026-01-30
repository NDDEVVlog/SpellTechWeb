// src/data.js

// 1. IMPORT TỪ CÁC FILE RIÊNG LẺ (Đúng chuẩn cấu trúc của bạn)
import DevlogGodot from './posts/DevlogGodot';
import ArtDuckKing from './posts/ArtDuckKing';

import CyberOdyssey from './products/CyberOdyssey';
import DuckKingdom from './products/DuckKingdom';
import SceneSwitcherTool_V2 from './products/SceneSwitcherTool_V2';

import SceneSwitcherCardImage from '/Product/SceneSwitcher/CoverPicture.png';

// 2. DATA PRODUCTS
export const productsData = [
  {
    id: 1,
    slug: 'scene-switcher-v2',
    title: 'Scene Switcher Tool V2',
    genre: 'Tools / Productivity',
    desc: 'The ultimate scene management tool for Unity. Switch scenes, organize bookmarks, and streamline your workflow.',
    img: SceneSwitcherCardImage, // Ảnh demo
    status: 'Live',
    releaseDate: 'Jan 15, 2024',
    features: [
      'Smart Bookmarking System',
      'Additive Scene Loading',
      'Instant Search & Filter',
      'Toolbar Integration',
      'No Code Required'
    ],
    // --- CẤU HÌNH NÚT BẤM ---
    customButtonText: "Get on Asset Store", // Chữ hiển thị
    customLink: "https://assetstore.unity.com/", // Link đích
    
    // Component hiển thị nội dung chi tiết
    ContentComponent: SceneSwitcherTool_V2 
  },
  {
    id: "scene-switcher-tool-v1",
    slug: "scene-switcher-tool-v1",
    title: "Scene Switcher Tool V1",
    genre: "Tool",
    status: "Beta",
    releaseDate: "TBA",
    img: SceneSwitcherCardImage,
    desc: "A powerful tool for switching scenes in Unity Development.",
    ContentComponent: SceneSwitcherTool_V2, 
    features: ["Tool ", "TagManager Integration", "ToolBar Access" ]
  }
];

// 3. DATA BLOGS
export const blogsData = [
  // {
  //   id: "why-godot",
  //   slug: "why-godot",
  //   date: "JAN 15, 2025",
  //   author: "NDDevGame",
  //   title: "Devlog #1: Why we switched to Godot Engine",
  //   tag: "Tech",
  //   excerpt: "Unity was fun, but open source is the future.",
  //   ContentComponent: DevlogGodot // Sử dụng component đã import
  // },
  // {
  //   id: "art-process-duck",
  //   slug: "art-process-duck",
  //   date: "DEC 20, 2024",
  //   author: "Sora",
  //   title: "Art Process: Creating the Duck King",
  //   tag: "Art",
  //   excerpt: "Creating the main character from sketch to 3D model.",
  //   ContentComponent: ArtDuckKing
  // }
];