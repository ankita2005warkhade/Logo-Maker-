import React, { useEffect, useContext, useState } from 'react';
import { UpdateStorageContext } from '../context/UpdateStorageContext'; // Corrected path for src/context
import { icons } from 'lucide-react';
import html2canvas from 'html2canvas';

const LogoPreview = ({ downloadIcon }) => {
  const [storageValue, setStorageValue] = useState({
    icon: 'Star', // Default icon
    iconColor: '#000000', // Default color
    iconSize: 100, // Default size
    iconRotate: 0, // Default rotation
    bgPadding: 20, // Default padding
    bgRounded: 10, // Default border radius
    bgColor: '#FFFFFF', // Default background color
  });
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    // This effect runs on initial mount and whenever updateStorage changes
    try {
      const storageData = localStorage.getItem('value');
      if (storageData) {
        const parsedData = JSON.parse(storageData);

        // Check if bgColor is in oklch format and replace with a safe default
        if (parsedData.bgColor && typeof parsedData.bgColor === 'string' && parsedData.bgColor.includes('oklch')) {
          console.warn("Detected 'oklch' color in localStorage. Defaulting to #FFFFFF for compatibility.");
          parsedData.bgColor = '#FFFFFF'; // Default to a safe color
        }

        setStorageValue(prev => ({ ...prev, ...parsedData })); // Merge with defaults
      }
    } catch (error) {
      console.error("Error parsing localStorage 'value':", error);
    }
  }, [updateStorage]);

  useEffect(() => {
    // This effect runs only when downloadIcon changes to a new truthy value
    if (downloadIcon) {
      downloadPngLogo();
    }
  }, [downloadIcon]);

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById('downloadLogoDiv');

    if (downloadLogoDiv) {
      html2canvas(downloadLogoDiv, {
        backgroundColor: null // Set to null for transparent background if desired
      }).then(canvas => {
        const pngImage = canvas.toDataURL('image/png');
        const downloadlink = document.createElement('a');
        downloadlink.href = pngImage;
        downloadlink.download = 'logo_express.png';
        document.body.appendChild(downloadlink); // Append to body to ensure it's in DOM
        downloadlink.click();
        document.body.removeChild(downloadlink); // Clean up the element
      }).catch(error => {
        console.error("Error capturing logo with html2canvas:", error);
      });
    } else {
      console.error("Element with ID 'downloadLogoDiv' not found.");
    }
  };

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return null; // Return null if icon not found
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  };

  // Determine the background color to use, ensuring it's not 'oklch'
  const safeBgColor = storageValue?.bgColor && typeof storageValue.bgColor === 'string' && storageValue.bgColor.includes('oklch')
    ? '#FFFFFF' // Fallback to a safe color
    : storageValue?.bgColor;

  return (
    <div className='flex items-center justify-center min-h-screen p-6 bg-gray-100'>
      <div
        className='w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white shadow-lg rounded-xl flex items-center justify-center overflow-hidden'
        style={{
          padding: storageValue?.bgPadding,
          outline: `2px solid ${safeBgColor}`, // Use safeBgColor for outline
          outlineOffset: '-5px',
        }}
      >
        <div
          id="downloadLogoDiv" // ID for html2canvas
          className='w-full h-full flex justify-center items-center transition-all duration-300 ease-in-out'
          style={{
            borderRadius: storageValue?.bgRounded,
            background: safeBgColor, // Use safeBgColor for background
          }}
        >
          <Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
