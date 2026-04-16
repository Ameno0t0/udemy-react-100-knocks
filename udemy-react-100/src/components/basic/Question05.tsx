const DynamicImage = () => {
  const imageUrl = "https://placehold.co/150";
  const altText = "サンプル画像";
  const baseWidth = 150;
  const isLarge = true;
  const acturelWidth = isLarge ? baseWidth * 2 : baseWidth;
  const acturelDataSize = isLarge? "large" : "small";
  
  return(
    <div>
      <img 
        src={imageUrl}
        alt={altText}
        width={acturelWidth}
        data-size={acturelDataSize}
      />

    </div>
  );
}

export default DynamicImage;