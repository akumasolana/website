import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Video from '../assets/shutter.mp4';

function Header() {
  const chatContainerRef = useRef(null);
  const chatInputRef = useRef(null);
  const chatButtonRef = useRef(null);

  const handleChat = (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    const chatContainer = chatContainerRef.current;
    chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
  };

  const handleChatInput = (event) => {
    if (event.key === 'Enter' && chatInputRef.current.value.trim() !== '') {
      event.preventDefault();
      flashPageOnInput();
      blurChatBox();
    }
  };

  const handleChatBlur = () => {
    const chatContainer = chatContainerRef.current;
    const chatInput = chatInputRef.current;

    chatContainer.style.display = 'none';
    chatInput.value = '';
  };

  const handleClickOutside = useCallback((event) => {
    const chatContainer = chatContainerRef.current;
    const chatButton = chatButtonRef.current;

    if (
      chatContainer &&
      !chatContainer.contains(event.target) &&
      event.target !== chatButton
    ) {
      blurChatBox();
    }
  }, []);

  const handleClickAnywhere = useCallback((event) => {
    const randomTrigger = Math.random();
    if (randomTrigger < 0.01) {
      flashPage();
    }
    if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A') {
      const buttonTrigger = Math.random();
      if (buttonTrigger < 0.02) {
        flashPage();
      }
    }
  }, []);

  const flashPage = () => {
    const body = document.body;
    const originalContent = body.innerHTML;
    
    const flashMessage = `
      <div class="flash-message">
        I am behind you...
      </div>
    `;
    
    let flashCount = 0;
    const flashInterval = setInterval(() => {
      body.innerHTML = flashCount % 2 === 0 ? flashMessage : originalContent;
      flashCount++;
      
      if (flashCount === 6) {
        clearInterval(flashInterval);
        window.location.href = window.location.href;
      }
    }, 100);
  };

  const flashPageOnInput = () => {
    const body = document.body;
    const originalContent = body.innerHTML;
  
    const flashMessage = `
      <div class="flash-message">
        I am behind you...
      </div>
    `;
  
    const videoMessage = `
      <div class="flash-message-video">
        <video id="flashVideo" src="${Video}" autoplay playsInline></video>
      </div>
    `;
  
    let flashCount = 0;
    let flashDuration = 33;
    let flashInterval = 600;
  
    const flash = () => {
      body.innerHTML = flashMessage;
      setTimeout(() => {
        body.innerHTML = originalContent;
        flashCount++;
  
        if (flashCount < 10) {
          flashInterval *= 0.7;
          setTimeout(flash, flashInterval);
        } else {
          body.innerHTML = videoMessage;
          const flashVideo = document.getElementById('flashVideo');
          if (flashVideo) {
            flashVideo.play().catch(error => {
              console.error('Error playing video:', error);
              // Handle the error and provide an alternative behavior
              // For example, you can display an error message or fallback to an image
              body.innerHTML = `
                <div class="flash-message">
                  Look Behind You...
                </div>
              `;
              setTimeout(() => {
                window.location.href = window.location.href; // Add this line
              }, 2000); // Adjust the delay as needed
            });
          }
        }
      }, flashDuration);
    };
  
    flash();
  };
  
  const blurChatBox = () => {
    const chatContainer = chatContainerRef.current;
    const chatInput = chatInputRef.current;

    chatContainer.style.display = 'none';
    chatInput.value = '';
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickAnywhere);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickAnywhere);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickAnywhere, handleClickOutside]);

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/memes">Memes</Link></li>
          <li><Link to="/tokenomics">Tokenomics</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/team">Our Team</Link></li>
          <li>
            <a href="#" className="chat-btn" onClick={(event) => handleChat(event)} ref={chatButtonRef}>
              Chat
            </a>
            <div className="chat-container" ref={chatContainerRef}>
              <input
                className="chat-input"
                type="text"
                placeholder="Tell me..."
                onKeyDown={handleChatInput}
                onBlur={handleChatBlur}
                ref={chatInputRef}
              />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;