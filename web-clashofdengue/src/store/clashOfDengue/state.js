export default function () {
  return {
    toggleMateri: false,
    images: [
      require('@/assets/wallpaperImage1.jpg'),
      require('@/assets/wallpaperImage2.jpg'),
      require('@/assets/wallpaperImage3.jpeg'),
    ],
    currentIndex: 0,
    //Posisi crusor default
    cursorX: 50,
    cursorY: 50,
    percentCrusor: { x: 0, y: 0 },
  };
}
