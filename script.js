function playMusic() {
            const music = document.getElementById("bgmusic");
            // this command "unlocks" the audio on the first click/touch
            music.play().then(() => {
                console.log("music started perfectly");
                //stop listening once it's playing so it doesn't restart on every click
                document.removeEventListener('click', playMusic);
                document.removeEventListener('touchstart', playMusic);
            }).catch(error =>{
                console.log("waiting for her to xlick anywhere to start...");
            });
        }
        //trigger the music on any click or screen touch
        document.addEventListener('click', playMusic);
        document.addEventListener('touchstart', playMusic);