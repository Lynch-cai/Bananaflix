class Video_player{
    constructor(){
        this.$video_player = document.querySelector('.js_video_player')
        this.$video = this.$video_player.querySelector('video')
        this.$play_pause_button = this.$video_player.querySelector('.js_play_pause_button')
        this.$play_pause_button_icon = this.$play_pause_button.querySelectorAll('svg')
        this.set_play_pause()
        this.
        this.set_volume()
    }
    // play pause button
    set_play_pause(){
        this.$play_pause_button.addEventListener(
            'click', 
            ()=>{
                this.$play_pause_button_icon.forEach(($, key)=>{
                    $.classList.toggle('fade-out')
                    if (key == 0 && this.$play_pause_button_icon[key].classList.contains('fade-out'))
                        this.$video.play()
                    else if (key == 1 && this.$play_pause_button_icon[key].classList.contains('fade-out'))
                        this.$video.pause()
                })
            }
        )
    }
    set_volume(){
        
    }
}



const video_player = new Video_player()