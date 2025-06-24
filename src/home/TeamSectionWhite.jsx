import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';
import { motion, AnimatePresence } from 'framer-motion';

// Add global CSS for flip cards
const flipCardStyles = `
  /* Hide scrollbars on Face Cards section */
  .team_section {
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    height: 100vh !important;
    max-height: 100vh !important;
  }
  
  /* Override JotForm styles */
  .jfForm-wrapper {
    padding-top: 0 !important;
  }
  
  /* Override JotForm card max-height */
  .jfCard {
    max-height: 558.28px !important;
  }
  
  .team_wrapper {
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    height: 100% !important;
    max-height: 100vh !important;
  }
  
  .team_content {
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    height: 100% !important;
    max-height: 100vh !important;
  }
  
  /* Container for all cards */
  .team-cards-container {
    position: relative;
    width: 100%;
    height: 550px;
    max-width: 1100px;
    margin: 0 auto;
    overflow: visible !important;
  }

  /* Single card */
  .flip-card {
    background-color: transparent;
    width: 230px;
    height: 380px;
    perspective: 1200px;
    position: absolute;
    transition: all 0.4s ease;
    cursor: pointer;
    transform: translateX(-50%);
    will-change: transform;
    opacity: 1;
    margin: 0 7.5px; /* Add horizontal margin for spacing */
  }
  
  /* Position classes for the grid layout */
  .position-0 {
    left: calc(50% - 460px - 22.5px);
    top: 0;
    z-index: 4;
    opacity: 1;
  }
  
  .position-1 {
    left: calc(50% - 230px - 7.5px);
    top: 0;
    z-index: 3;
    opacity: 1;
  }
  
  .position-2 {
    left: calc(50% + 7.5px);
    top: 0;
    z-index: 2;
    opacity: 1;
  }
  
  .position-3 {
    left: calc(50% + 230px + 22.5px);
    top: 0;
    z-index: 1;
    opacity: 1;
  }
  
  /* Stacked position classes */
  .team-cards-container.stack-mode .flip-card.selected {
    left: 7%;
    top: 0;
    z-index: 10;
    opacity: 1;
    transition: all 0.4s ease;
  }
  
  .team-cards-container.stack-mode .flip-card.stacked-1 {
    left: 7%;
    top: 15px;
    transform: translateX(-47%);
    z-index: 9;
    opacity: 0.95;
    transition: all 0.4s ease;
  }
  
  .team-cards-container.stack-mode .flip-card.stacked-2 {
    left: 7%;
    top: 30px;
    transform: translateX(-44%);
    z-index: 8;
    opacity: 0.9;
    transition: all 0.4s ease;
  }
  
  .team-cards-container.stack-mode .flip-card.stacked-3 {
    left: 7%;
    top: 45px;
    transform: translateX(-41%);
    z-index: 7;
    opacity: 0.85;
    transition: all 0.4s ease;
  }
  
  /* Card flip state */
  .flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg) !important;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.4s ease;
    transform-style: preserve-3d;
  }
  
  /* Card faces */
  .flip-card-front, 
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: opacity 0.2s ease;
    backface-visibility: hidden;
  }
  
  /* Front side - visible by default */
  .flip-card-front {
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    overflow: hidden;
    opacity: 1;
    z-index: 2;
  }
  
  /* Back side - hidden by default */
  .flip-card-back {
    background-color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    z-index: 1;
    transform: rotateY(180deg);
  }
  
  .flip-card-front .card-image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  
  /* Desktop hover - opacity change with flip animation simulation */
  @media (min-width: 769px) {
    .flip-card {
      perspective: 1000px;
    }
    
    .flip-card-inner {
      transition: transform 0.4s ease;
    }
    
    .flip-card-front, 
    .flip-card-back {
      transition: opacity 0.2s ease;
    }
    
    /* Only apply hover effects to cards that are NOT selected or stacked */
    .flip-card:not(.selected):not([class*="stacked-"]):hover .flip-card-inner {
      transform: rotateY(180deg);
    }
    
    .flip-card:not(.selected):not([class*="stacked-"]):hover .flip-card-front {
      opacity: 0;
    }
    
    .flip-card:not(.selected):not([class*="stacked-"]):hover .flip-card-back {
      opacity: 1;
    }
    
    /* Selected and stacked cards should stay flipped to show photos */
    .flip-card.selected .flip-card-front,
    .flip-card[class*="stacked-"] .flip-card-front {
      opacity: 0;
    }
    
    .flip-card.selected .flip-card-back,
    .flip-card[class*="stacked-"] .flip-card-back {
      opacity: 1;
    }
    
    .flip-card.selected .flip-card-inner,
    .flip-card[class*="stacked-"] .flip-card-inner {
      transform: rotateY(180deg);
    }
  }
  
  /* Mobile Playing Card Stack - New Framer Motion Approach */
  .mobile-card-stack {
    position: relative;
    width: 280px;
    height: 400px;
    margin: 0 auto;
    margin-left: calc(50% - 140px + 10px); /* Move 10px to the right */
    display: none;
    touch-action: pan-y; /* Allow vertical scrolling through the stack */
    overflow: visible !important; /* Allow cards to extend outside during drag */
  }
  
  /* Mobile swipe indicators */
  .mobile-swipe-indicator {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    opacity: 0.4;
    animation: pulseArrow 2s ease-in-out infinite;
    cursor: pointer;
    z-index: 1000;
  }
  
  .mobile-swipe-indicator:hover {
    opacity: 0.7;
  }
  
  .mobile-swipe-indicator:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  .mobile-swipe-indicator.left {
    left: -40px;
    border-right: 12px solid #329ec7;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
  
  .mobile-swipe-indicator.right {
    right: -25px;
    border-left: 12px solid #329ec7;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
  
  @keyframes pulseArrow {
    0%, 100% {
      opacity: 0.3;
      transform: translateY(-50%) scale(1);
    }
    50% {
      opacity: 0.7;
      transform: translateY(-50%) scale(1.1);
    }
  }
  
  .mobile-card {
    position: absolute;
    width: 260px;
    height: 380px;
    border-radius: 16px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    touch-action: pan-y; /* Allow vertical scrolling by default */
  }
  
  .mobile-card.mobile-card-0 {
    touch-action: manipulation; /* Allow clicks and horizontal panning for top card */
  }
  
  .mobile-card:active {
    cursor: grabbing;
  }
  
  .mobile-card.mobile-card-0:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease;
  }
  
  .mobile-card .flip-card-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.4s ease;
    transform-style: preserve-3d;
  }
  
  .mobile-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  @media (max-width: 768px) {
    .mobile-card-stack {
      display: block;
      overflow: visible !important;
    }
    
    /* Hide Swiper on mobile */
    .mobile-only-swiper {
      display: none !important;
    }
    
    /* Mobile info panel - appears below card stack */
    .mobile-info-panel {
      display: block !important;
      position: relative !important;
      left: auto !important;
      top: auto !important;
      transform: none !important;
      width: 100% !important;
      max-width: 100% !important;
      margin: 10px auto 0 !important;
      padding: 0 15px 10px !important;
      background-color: transparent !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      text-align: center !important;
      opacity: 1 !important;
      visibility: visible !important;
      min-height: 120px !important;
      overflow: visible !important;
    }
    
    .mobile-info-panel h3 {
      font-size: 24px !important;
      margin-bottom: 5px !important;
      line-height: 1.1 !important;
      font-weight: 900 !important;
      color: #293a8d !important;
    }
    
    .mobile-info-panel h4 {
      font-size: 16px !important;
      margin-bottom: 25px !important;
      line-height: 1.1 !important;
      color: #293a8d !important;
    }
    
    .mobile-info-panel p {
      font-size: 13px !important;
      line-height: 1.2 !important;
      margin-top: -20px !important;
      margin-bottom: -30px !important;
    }
    
    .mobile-info-panel .bio-text {
      margin-bottom: -30px !important;
    }
    
    .mobile-info-panel .skills-list {
      justify-content: center !important;
      margin-top: 10px !important;
      gap: 6px !important;
    }
    
    .mobile-info-panel .skill-tag {
      font-size: 11px !important;
      padding: 2px 6px !important;
    }
    
    /* Completely hide desktop elements on mobile */
    .team-cards-container {
      display: none !important;
      height: 0 !important;
    }
    
    /* Hide the desktop wrapper completely on mobile */
    .team_content > div[style*="height: 550px"] {
      display: none !important;
      height: 0 !important;
    }
    
    .stack-info-panel {
      display: none !important;
    }
    
    .back-to-grid {
      display: none !important;
    }
    
    /* Make the entire section more compact on mobile */
    .team_section {
      min-height: auto !important;
      height: auto !important;
      overflow-x: hidden !important; /* Prevent horizontal scrolling */
      overflow-y: hidden !important; /* Prevent vertical scrolling */
      padding-bottom: 0 !important;
      margin-bottom: 0 !important;
      max-height: 100vh !important;
    }
    
    /* Adjust spacing for mobile */
    .team_content {
      padding: 10px 5px 0 !important;
      justify-content: flex-start !important;
      height: 689px !important;
      minHeight: 689px !important;
      maxHeight: 689px !important;
      overflow: visible !important;
    }
    
    /* Specific styles for devices under 400px */
    @media (max-width: 400px) {
      .team_content {
        padding: 45px 5px 0 !important;
      }
    }
    
    /* Reduce title margins on mobile */
    .team_content h2 {
      margin-bottom: 3px !important;
      font-size: clamp(28px, 6vw, 45px) !important;
    }
    
    .team_content p {
      margin-bottom: 10px !important;
      font-size: clamp(13px, 4vw, 16px) !important;
    }
    
    /* Hide arrow on mobile */
    .team_section > div:last-child {
      display: none !important;
    }
    
    /* Show mobile line break only on mobile */
    .mobile-break {
      display: inline !important;
    }
  }
  
  /* Ensure desktop styles are preserved */
  @media (min-width: 769px) {
    /* Hide mobile line break on desktop */
    .mobile-break {
      display: none;
    }
    
    .team_section {
      min-height: 100vh;
    }
    
    .team_content {
      padding: 40px 5px;
      justify-content: center;
      min-height: 80vh;
    }
    
    .team_content h2 {
      font-size: clamp(40px, 5vw, 70px);
      margin-bottom: 15px;
    }
    
    .team_content p {
      font-size: clamp(18px, 3vw, 30px);
      margin-bottom: 40px;
    }
    
    .mobile-card-stack {
      display: none;
    }
    
    .mobile-info-panel {
      display: none;
    }
  }
  
  /* Responsive grid for different screen sizes */
  @media (max-width: 1100px) and (min-width: 769px) {
    .position-0 {
      left: calc(50% - 345px - 22.5px);
    }
    
    .position-1 {
      left: calc(50% - 115px - 7.5px);
    }
    
    .position-2 {
      left: calc(50% + 115px + 7.5px);
    }
    
    .position-3 {
      left: calc(50% + 345px + 22.5px);
    }
    
    .team-cards-container {
      height: 800px;
    }
    
    /* Adjust stack info panel for smaller screens */
    .stack-info-panel {
      left: 65%;
      width: 50%;
    }
  }
  
  /* Back button positioning - moved to the right of the stack */
  .team-cards-container.stack-mode + .back-to-grid {
    position: absolute;
    left: 25%;
    top: 420px;
    transform: translateX(-50%);
  }
  
  /* Stack info panel - appears to the right of the stack */
  .stack-info-panel {
    position: absolute;
    left: 65%;
    top: 0;
    transform: translate(-50%, 0);
    width: 40%;
    max-width: 450px;
    opacity: 0;
    transition: opacity 0.6s ease 0.3s;
    color: #293a8d;
    text-align: left;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .stack-info-panel.visible {
    opacity: 1;
  }
  
  .stack-info-panel h3 {
    margin: 0 0 5px 0;
    color: #293a8d;
    font-size: 32px;
    line-height: 1.2;
    font-weight: 900;
  }
  
  .stack-info-panel h4 {
    margin: 0 0 20px 0;
    color: #293a8d;
    font-size: 20px;
    font-weight: normal;
  }
  
  .stack-info-panel p {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
  }
  
  .stack-info-panel .bio-text {
    margin-bottom: 20px;
  }
  
  .stack-info-panel .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
  }
  
  .stack-info-panel .skill-tag {
    background-color: rgba(50, 158, 199, 0.1);
    color: #329ec7;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 14px;
  }
  
  /* Mobile tap - simple opacity change */
  .mobile-card.flipped .flip-card-front {
    opacity: 0;
    visibility: hidden;
    transform: rotateY(180deg);
  }
  
  .mobile-card.flipped .flip-card-back {
    opacity: 1;
    visibility: visible;
    transform: rotateY(0deg);
  }
  
  .mobile-card .flip-card-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.4s ease;
    transform-style: preserve-3d;
    perspective: 1000px;
  }
  
  .mobile-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
  }

  .mobile-card .flip-card-front,
  .mobile-card .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition: transform 0.4s ease;
  }

  .mobile-card .flip-card-back {
    transform: rotateY(180deg);
  }
  
  .flip-card-back .photo-container {
    flex: 1;
    overflow: hidden;
    width: 100%;
    height: 100%; /* Ensure it takes full height */
    position: relative; /* Add relative positioning for overlay */
  }
  
  .flip-card-back .photo-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  /* White opacity overlay on team member photos */
  .flip-card-back .photo-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(41, 58, 141, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%); /* Gradient from dark blue bottom to white top */
    border: 4px solid transparent;
    border-image: linear-gradient(to top, rgba(41, 58, 141, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%) 1; /* Gradient border from dark blue bottom to white top */
    pointer-events: none; /* Don't interfere with interactions */
    z-index: 1;
  }
  
  /* Card info overlay for names and titles on hover */
  .card-info-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%);
    color: white;
    padding: 20px 15px 15px;
    text-align: center;
    z-index: 2; /* Ensure it appears above the white overlay */
  }
  
  /* Hide card overlay on mobile - names/titles should only be in info panel */
  @media (max-width: 768px) {
    .card-info-overlay {
      display: none !important;
    }
  }
  
  /* Hide card overlay for selected and stacked cards on desktop */
  @media (min-width: 769px) {
    .flip-card.selected .card-info-overlay,
    .flip-card[class*="stacked-"] .card-info-overlay {
      display: none !important;
    }
  }
  
  .card-info-overlay h3 {
    margin: 0 0 5px 0;
    font-size: 18px;
    font-weight: 900;
    line-height: 1.2;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }
  
  .card-info-overlay h4 {
    margin: 0;
    font-size: 14px;
    font-weight: normal;
    opacity: 0.9;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  }
`;

// Team member data with character animations and photos
const teamMembers = [
  {
    name: "Sam Morrow",
    title: "CCO",
    photo: "/images/team/Sam-Back .png", // Note: filename has space before extension
    character: "/images/team/Sam-Front.png",
    characterBack: "/images/team/Sam-Back .png"
  },
  {
    name: "Noah Morrow",
    title: "CTO, DEV",
    photo: "/images/team/Noah-Back.png",
    character: "/images/team/Noah-Front.png",
    characterBack: "/images/team/Noah-Back.png"
  },
  {
    name: "Darby Shaw",
    title: "AD, BFA",
    photo: "/images/team/Darby-Back.png", // Back photo is available
    character: "/images/team/Darby-Front.png",
    characterBack: "/images/team/Darby-Back.png"
  },
  {
    name: "Liam Ellis",
    title: "AI, ML, UX",
    photo: "/images/team/Laim-Back.png", // Note: typo in filename
    character: "/images/team/Liam-Front.png",
    characterBack: "/images/team/Laim-Back.png"
  }
];

// Add animation variants
const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 1000,
    scale: 0.8,
    rotate: 5
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.05 + (i * 0.05),
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      y: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  })
};

export default function TeamSectionWhite({ paused, arrowClick }) {
  // State to store the current order of team members
  const [teamMembersOrder, setTeamMembersOrder] = useState([...teamMembers]);
  const [selectedMemberName, setSelectedMemberName] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  
  // Mobile card stack state - New Framer Motion approach
  const [mobileCardOrder, setMobileCardOrder] = useState([...teamMembers]);
  const [draggedCardIndex, setDraggedCardIndex] = useState(null);
  const [animatingDirection, setAnimatingDirection] = useState(null); // 'forward' or 'backward'
  const [flippedCards, setFlippedCards] = useState(new Set()); // Track which cards are flipped
  const [isDragging, setIsDragging] = useState(false); // Track if currently dragging
  const [selectedMobileCard, setSelectedMobileCard] = useState(null); // Track selected card for info display
  

  
  // Card stack positions and rotations for organic look
  const getCardTransform = (index) => {
    // More organic, varied offsets for each card position
    const organicOffsets = [
      { x: 0, y: 0, rotate: 0, scale: 1 }, // Top card - perfect alignment
      { x: -5, y: 3, rotate: -4, scale: 0.98 },
      { x: 8, y: 6, rotate: 6, scale: 0.96 },
      { x: -12, y: 9, rotate: -2, scale: 0.94 },
      { x: 3, y: 12, rotate: 8, scale: 0.92 },
      { x: -8, y: 15, rotate: -6, scale: 0.90 },
      { x: 15, y: 18, rotate: 3, scale: 0.88 },
      { x: -6, y: 21, rotate: -8, scale: 0.86 },
      { x: 10, y: 24, rotate: 5, scale: 0.84 },
      { x: -14, y: 27, rotate: -3, scale: 0.82 },
      { x: 7, y: 30, rotate: 7, scale: 0.80 }
    ];
    
    // Use predefined organic offsets if available, otherwise calculate
    const baseOffset = organicOffsets[index] || {
      x: Math.sin(index * 1.3) * 16,
      y: index * 3.5,
      rotate: (Math.sin(index * 0.9) * 9) + (index * 0.8),
      scale: Math.max(0.75, 1 - (index * 0.03))
    };
    
    return {
      x: baseOffset.x,
      y: baseOffset.y,
      rotate: baseOffset.rotate,
      scale: baseOffset.scale,
      zIndex: 100 - index
    };
  };
  
  // Handle drag end - move card to back of stack
  const handleDragEnd = (cardIndex) => {
    const newOrder = [...mobileCardOrder];
    const draggedCard = newOrder.splice(cardIndex, 1)[0];
    newOrder.push(draggedCard); // Move to back
    setMobileCardOrder(newOrder);
    setDraggedCardIndex(null);
    
    // Check if the new top card should be selected (if it's flipped)
    const newTopCard = newOrder[0];
    if (flippedCards.has(newTopCard.name)) {
      setSelectedMobileCard(newTopCard.name);
    } else {
      setSelectedMobileCard(null);
    }
  };
  
  // Handle arrow click to cycle cards
  const handleArrowClick = (direction) => {
    // Prevent multiple clicks during animation
    if (animatingDirection) return;
    
    // Set animation state
    setAnimatingDirection(direction);
    
    // After animation completes, update the order
    setTimeout(() => {
      const newOrder = [...mobileCardOrder];
      
      if (direction === 'forward') {
        // Move top card to back (same as drag)
        const topCard = newOrder.shift();
        newOrder.push(topCard);
      } else if (direction === 'backward') {
        // Move bottom card to top
        const bottomCard = newOrder.pop();
        newOrder.unshift(bottomCard);
      }
      
      setMobileCardOrder(newOrder);
      setAnimatingDirection(null);
      
      // Check if the new top card should be selected (if it's flipped)
      const newTopCard = newOrder[0];
      if (flippedCards.has(newTopCard.name)) {
        setSelectedMobileCard(newTopCard.name);
      } else {
        setSelectedMobileCard(null);
      }
    }, 100); // Reduced from 200 to 100 for faster transition
  };
  
  // Handle card tap to flip
  const handleMobileCardTap = (memberName) => {
    console.log('Card tap detected for:', memberName);
    
    // Toggle selected state for info display
    if (selectedMobileCard === memberName) {
      setSelectedMobileCard(null); // Hide info if same card clicked
    } else {
      setSelectedMobileCard(memberName); // Show info for clicked card
    }
    
    // Toggle flip state for the tapped card
    setFlippedCards(prev => {
      const newFlippedCards = new Set(prev);
      if (newFlippedCards.has(memberName)) {
        newFlippedCards.delete(memberName);
        console.log('Flipping card back to front:', memberName);
      } else {
        newFlippedCards.add(memberName);
        console.log('Flipping card to back:', memberName);
      }
      return newFlippedCards;
    });
  };

  // Handle card click to expand view
  const handleCardClick = (memberName) => {
    if (selectedMemberName === memberName) {
      handleCloseSelected();
    } else {
      setSelectedMemberName(memberName);
      
      // Show button and info panel after animation
      setTimeout(() => {
        setShowButton(true);
        setShowInfo(true);
      }, 400);
    }
  };
  
  // Handle closing the selected card with animation
  const handleCloseSelected = () => {
    // Hide button and info first
    setShowButton(false);
    setShowInfo(false);
    
    // Reorder the array to put the selected member at the front
    const newOrder = [...teamMembersOrder];
    const selectedIndex = newOrder.findIndex(m => m.name === selectedMemberName);
    const selectedItem = newOrder.splice(selectedIndex, 1)[0];
    newOrder.unshift(selectedItem);
    setTeamMembersOrder(newOrder);
    
    // Reset selected member
    setTimeout(() => {
      setSelectedMemberName(null);
    }, 600);
  };
  
  // Get the selected member data for the info panel
  const selectedMemberData = selectedMemberName !== null 
    ? (mobileCardOrder.find(m => m.name === selectedMemberName) || teamMembersOrder.find(m => m.name === selectedMemberName))
    : null;
    
  // Determine card classes based on selection state
  const getCardClasses = (memberName) => {
    let classes = ["flip-card"];
    
    // Add position class if not in stack mode
    if (!selectedMemberName) {
      const index = teamMembersOrder.findIndex(m => m.name === memberName);
      classes.push(`position-${index}`);
    } else {
      // Add selected or stacked classes
      if (memberName === selectedMemberName) {
        classes.push("selected", "flipped");
      } else {
        // Find position in the stacked order
        const stackIndex = teamMembersOrder
          .filter(m => m.name !== selectedMemberName)
          .findIndex(m => m.name === memberName);
        classes.push(`stacked-${stackIndex + 1}`, "flipped");
      }
    }
    
    return classes.join(" ");
  };
  
  return (
    <div className="team_section white_background" style={{ 
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      height: '100vh',
      maxHeight: '100vh'
    }}>
      {/* Include the flip card styles */}
      <style dangerouslySetInnerHTML={{ __html: flipCardStyles }} />
      
      {/* Animation background with glimmer and lines - same as modus operandi */}
      <div className="animation-back">
        <div className="glimmer"></div>
        <div className="lines">
          <svg xmlns="http://www.w3.org/2000/svg" className="center" height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon pathLength="100" className="path" fill="transparent" stroke="black" points="0 0,0 100,100 100,100 0"></polygon>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="top-left" height="50%" width="50%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon pathLength="100" className="path-top-left" fill="transparent" stroke="black" points="100 0, 0 0,0 100,100 100"></polygon>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="bottom-right" height="50%" width="50%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon pathLength="100" className="path-bottom-right" fill="transparent" stroke="black" points="0 100,100 100, 100 0, 0 0"></polygon>
          </svg>
          <img src="../images/logo.png" className="logo-top" />
          <img src="../images/logo.png" className="logo-bottom" />
        </div>
      </div>
      
      <div className="team_wrapper container" style={{ maxWidth: '1100px', width: '100%', margin: '0 auto', overflow: 'hidden', height: '100%' }}>
        <div className="team_content" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px 5px 0',
          position: 'relative',
          height: '689px',
          minHeight: '689px',
          maxHeight: '689px'
        }}>
          <h2 style={{ 
            color: '#293a8d', 
            fontSize: '36px', 
            marginBottom: '60px', 
            maxWidth: '800px', 
            textAlign: 'center',
            fontStretch: 'condensed'
          }}>
            <span style={{ fontWeight: 'normal' }}>What You're Dealing With.</span>
          </h2>
          
          {/* New Mobile Playing Card Stack with Framer Motion - Moved up */}
          <div className="mobile-card-stack">
            {/* Swipe indicators */}
            <div 
              className="mobile-swipe-indicator left"
              onClick={() => handleArrowClick('backward')}
            ></div>
            <div 
              className="mobile-swipe-indicator right"
              onClick={() => handleArrowClick('forward')}
            ></div>
            
            <AnimatePresence>
              {mobileCardOrder.map((member, index) => {
                const transform = getCardTransform(index);
                const isDragged = draggedCardIndex === index;
                const isAnimatingOut = animatingDirection && index === 0;
                
                let animateTransform = transform;
                if (isAnimatingOut) {
                  animateTransform = {
                    x: animatingDirection === 'forward' ? 200 : -200,
                    y: transform.y,
                    rotate: animatingDirection === 'forward' ? 15 : -15,
                    scale: 0.8,
                    zIndex: 200
                  };
                }
                
                return (
                  <motion.div
                    key={`mobile-${member.name}`}
                    className={`mobile-card mobile-card-${index} ${flippedCards.has(member.name) ? 'flipped' : ''}`}
                    drag={index === 0 ? "x" : false}
                    dragMomentum={false}
                    dragElastic={0.2}
                    dragConstraints={{ 
                      left: -150, 
                      right: 150 
                    }}
                    initial={{ ...animateTransform, opacity: 0, y: 1000 }}
                    animate={!paused ? { ...animateTransform, opacity: 1, y: 0 } : { ...animateTransform, opacity: 0, y: 1000 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.1 + (index * 0.1),
                      duration: 0.6
                    }}
                    whileDrag={{
                      scale: 1.05,
                      rotate: 5,
                      zIndex: 200,
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                      transition: { duration: 0.01 }
                    }}
                    dragTransition={{ 
                      bounceStiffness: 3000, // Increased from 2000 for faster bounce
                      bounceDamping: 15, // Adjusted for better bounce control
                      power: 0.8, // Added power parameter for more immediate response
                      timeConstant: 200 // Added timeConstant for faster completion
                    }}
                    onDragStart={() => {
                      setDraggedCardIndex(index);
                      setIsDragging(true);
                    }}
                    onDragEnd={(event, info) => {
                      const horizontalDragDistance = Math.abs(info.offset.x);
                      if (horizontalDragDistance > 50) {
                        handleDragEnd(index);
                      }
                      setTimeout(() => {
                        setIsDragging(false);
                      }, 50); // Reduced from 100 to 50 for faster state update
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (index === 0 && !isDragging) {
                        handleMobileCardTap(member.name);
                      }
                    }}
                    style={{
                      zIndex: transform.zIndex,
                      pointerEvents: index === 0 ? 'auto' : 'none'
                    }}
                  >
                    <div className="flip-card-inner">
                      {/* Front - Character Animation */}
                      <div className="flip-card-front">
                        <div className="card-image">
                          <img 
                            src={member.character} 
                            alt={`${member.name}`} 
                            style={{ 
                              width: '100%', 
                              height: '100%',
                              objectFit: 'cover' 
                            }} 
                          />
                        </div>
                      </div>
                      
                      {/* Back - Team Member Photo */}
                      <div className="flip-card-back">
                        <div className="photo-container">
                          <img 
                            src={member.photo} 
                            alt={member.name} 
                          />
                        </div>
                        <div className="card-info-overlay">
                          <h3>{member.name}</h3>
                          <h4>{member.title}</h4>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
          {/* Mobile Info Panel - always shows top card info */}
          <div className="mobile-info-panel">
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: selectedMobileCard === mobileCardOrder[0].name ? 'space-between' : 'center', 
              width: '100%', 
              gap: '10px' 
            }}>
              <h3 style={{ textAlign: selectedMobileCard === mobileCardOrder[0].name ? 'left' : 'center' }}>
                {mobileCardOrder[0].name}
              </h3>
              {/* Mobile LinkedIn Icon - Only show for Sam, Liam, and Darby when card is flipped */}
              {selectedMobileCard === mobileCardOrder[0].name && mobileCardOrder[0].name !== "Noah Morrow" && (
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    const linkedInUrls = {
                      "Sam Morrow": "https://www.linkedin.com/in/mrwcreations/",
                      "Liam Ellis": "https://www.linkedin.com/in/heyitsliam/",
                      "Darby Shaw": "https://www.linkedin.com/in/darby-shaw-8a3a7ba2/"
                    };
                    window.open(linkedInUrls[mobileCardOrder[0].name], '_blank');
                  }}
                >
                  <path 
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" 
                    fill="#293a8d"
                  />
                </svg>
              )}
            </div>
            <h4 style={{ textAlign: selectedMobileCard === mobileCardOrder[0].name ? 'left' : 'center' }}>
              {mobileCardOrder[0].title}
            </h4>
            
            {/* Only show bio text when a card is selected */}
            {selectedMobileCard === mobileCardOrder[0].name && (
              <div className="bio-text">
                <p style={{ textAlign: 'left' }}>
                  {mobileCardOrder[0].name === "Sam Morrow" && 
                    "The creative force behind Clubhaus, Sam sets the vision, tone, and aesthetic for everything we build. He blends strategy with style, making sure every project hits hard and looks good doing it."}
                  {mobileCardOrder[0].name === "Darby Shaw" && 
                    "Darby brings the fine art edge to our digital world, with a BFA to back it up. She leads design with taste, intention, and a killer sense of composition. If it looks effortlessly cool, she probably made it."}
                  {mobileCardOrder[0].name === "Noah Morrow" && 
                    "Noah decodes the matrix and turns wild ideas into functional, fast-loading realities. He's fluent in frameworks, allergic to bloated code, and always two steps ahead of the tech curve. Basically, if it clicks, scrolls, or loads—it's Noah."}
                  {mobileCardOrder[0].name === "Liam Ellis" && 
                    "Liam is our machine whisperer, turning prompts into power tools. He prototypes, refines, and automates like it's second nature, making AI actually useful. Expect big brain energy and a surprisingly human-centered approach to all things technical."}
                </p>
              </div>
            )}
          </div>
          
          {/* Desktop version - all cards with absolute positioning */}
          <div style={{ position: 'relative', width: '100%', height: '550px' }}>
            <div className={`team-cards-container ${selectedMemberName ? 'stack-mode' : ''}`}>
              <AnimatePresence>
                {teamMembersOrder.map((member, index) => (
                  <motion.div 
                    key={`${member.name}`}
                    className={getCardClasses(member.name)}
                    onClick={() => handleCardClick(member.name)}
                    variants={cardVariants}
                    initial="hidden"
                    animate={!paused ? "visible" : "hidden"}
                    custom={index}
                  >
                    <div className="flip-card-inner">
                      {/* Front - Character Animation */}
                      <div className="flip-card-front">
                        <div className="card-image">
                          <img 
                            src={member.character} 
                            alt={`${member.name}`} 
                            style={{ 
                              width: '100%', 
                              height: '100%',
                              objectFit: 'cover' 
                            }} 
                          />
                        </div>
                      </div>
                      
                      {/* Back - Team Member Photo */}
                      <div className="flip-card-back">
                        <div className="photo-container">
                          <img 
                            src={member.photo} 
                            alt={member.name} 
                          />
                        </div>
                        <div className="card-info-overlay">
                          <h3>{member.name}</h3>
                          <h4>{member.title}</h4>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Info panel that appears when card is selected */}
            {selectedMemberData && (
              <div className={`stack-info-panel ${showInfo ? 'visible' : ''}`}>
                {/* Close X Icon - Top Right Corner */}
                <div className="close-icon-container" style={{ 
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  zIndex: 10,
                  cursor: 'pointer'
                }}
                onClick={handleCloseSelected}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M18 6L6 18M6 6L18 18" 
                      stroke="#293a8d" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: showInfo ? 'space-between' : 'center', 
                  width: '100%', 
                  gap: '10px', 
                  marginBottom: '5px' 
                }}>
                  <h3 style={{ textAlign: showInfo ? 'left' : 'center' }}>
                    {selectedMemberData.name}
                  </h3>
                  {/* LinkedIn Icon - Only show for Sam, Liam, and Darby when card is flipped */}
                  {showInfo && selectedMemberData.name !== "Noah Morrow" && (
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        const linkedInUrls = {
                          "Sam Morrow": "https://www.linkedin.com/in/mrwcreations/",
                          "Liam Ellis": "https://www.linkedin.com/in/heyitsliam/",
                          "Darby Shaw": "https://www.linkedin.com/in/darby-shaw-8a3a7ba2/"
                        };
                        window.open(linkedInUrls[selectedMemberData.name], '_blank');
                      }}
                    >
                      <path 
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" 
                        fill="#293a8d"
                      />
                    </svg>
                  )}
                </div>
                <h4 style={{ textAlign: showInfo ? 'left' : 'center' }}>
                  {selectedMemberData.title}
                </h4>
                
                <div className="bio-text">
                  <p style={{ textAlign: 'left' }}>
                    {selectedMemberData.name === "Sam Morrow" && 
                      "The creative force behind Clubhaus, Sam sets the vision, tone, and aesthetic for everything we build. He blends strategy with style, making sure every project hits hard and looks good doing it."}
                    {selectedMemberData.name === "Darby Shaw" && 
                      "Darby brings the fine art edge to our digital world, with a BFA to back it up. She leads design with taste, intention, and a killer sense of composition. If it looks effortlessly cool, she probably made it."}
                    {selectedMemberData.name === "Noah Morrow" && 
                      "Noah decodes the matrix and turns wild ideas into functional, fast-loading realities. He's fluent in frameworks, allergic to bloated code, and always two steps ahead of the tech curve. Basically, if it clicks, scrolls, or loads—it's Noah."}
                    {selectedMemberData.name === "Liam Ellis" && 
                      "Liam is our machine whisperer, turning prompts into power tools. He prototypes, refines, and automates like it's second nature, making AI actually useful. Expect big brain energy and a surprisingly human-centered approach to all things technical."}
                  </p>
                </div>
                
                <p style={{ textAlign: 'left' }}>Core skills:</p>
                <div className="skills-list">
                  <span className="skill-tag">Strategic Thinking</span>
                  <span className="skill-tag">Problem Solving</span>
                  <span className="skill-tag">Client Relations</span>
                  <span className="skill-tag">Team Leadership</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Mobile version with swiper */}
          <div className="team_carousel_container mobile-only-swiper" style={{ maxWidth: '1200px', margin: '40px auto 0' }}>
            <Swiper
              modules={[Navigation, FreeMode]}
              spaceBetween={30}
              navigation
              slidesPerView={1}
              centeredSlides={false}
              initialSlide={0}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }
              }}
              style={{ paddingTop: '20px', paddingBottom: '50px' }}
            >
              {teamMembersOrder.map((member, index) => (
                <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                  <div 
                    className="flip-card"
                    onClick={() => handleCardClick(member.name)}
                  >
                    <div className="flip-card-inner">
                      {/* Front - Character Animation */}
                      <div className="flip-card-front">
                        <div className="card-image">
                          <img 
                            src={member.character} 
                            alt={`${member.name}`} 
                            style={{ 
                              width: '100%', 
                              height: '100%',
                              objectFit: 'cover' 
                            }} 
                          />
                        </div>
                      </div>
                      
                      {/* Back - Team Member Photo */}
                      <div className="flip-card-back">
                        <div className="photo-container">
                          <img 
                            src={member.photo} 
                            alt={member.name} 
                          />
                        </div>
                        <div className="card-info-overlay">
                          <h3>{member.name}</h3>
                          <h4>{member.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      
      {/* Arrow to scroll to next section */}
      <div 
        onClick={arrowClick}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer'
        }}
      >
        <div className="container_2">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </div>
    </div>
  );
} 