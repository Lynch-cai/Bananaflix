class Video_player{
    constructor(){
        this.$video_player = document.querySelector('.js_video_player')
        this.$video = this.$video_player.querySelector('video')
        this.$play_pause_button = this.$video_player.querySelector('.js_play_pause_button')
        this.$play_pause_button_icon = this.$play_pause_button.querySelectorAll('svg')
        this.set_play_pause()
        this.$volume_button = this.$video_player.querySelector('.js_volume_button')
        this.$volume_button_muted = this.$volume_button.querySelector('.js_volume_button_muted')
        this.$volume_slider_container = this.$video_player.querySelector('.js_volume_slider_container')
        this.$volume_slider_min = this.$volume_slider_container.querySelector('.js_volume_slider_min')
        this.$volume_slider_max = this.$volume_slider_container.querySelector('.js_volume_slider_max')
        this.$volume_slider_bar_container = this.$volume_slider_container.querySelector('.js_volume_slider_bar_container')
        this.$volume_slider_bar = this.$volume_slider_bar_container.querySelector('.js_volume_slider_bar')
        this.$volume_slider_bar_level = this.$volume_slider_bar_container.querySelector('.js_volume_slider_bar_level')
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
    set_volume_min_max(){
        if (this.$video.volume > 0){
            this.$video.volume = 0
            this.$volume_button_muted.classList.remove('inactive')
            window.requestAnimationFrame(()=>{
                window.requestAnimationFrame(()=>{
                    this.$volume_button_muted.classList.add('active')
                })
            })

        }
        else if(this.$video.volume == 0){
            this.$video.volume = 1
            this.$volume_button_muted.classList.remove('active')
            window.requestAnimationFrame(()=>{
                window.requestAnimationFrame(()=>{
                    this.$volume_button_muted.classList.add('inactive')
                })
            })
        }
    }
    set_volume(){
        // volume button - set volume min & max
        this.$volume_button.addEventListener(
            'click',
            ()=>{
                this.set_volume_min_max()
            }
        )
        // set volume min
        this.$volume_slider_min.addEventListener(
            'click',
            () => {
                this.$video.volume = 1
                this.set_volume_min_max()
            }
        )
        // set volume max
        this.$volume_slider_max.addEventListener(
            'click',
            ()=>{
                this.$video.volume = 0
                this.set_volume_min_max()
            }
        )
        this.$volume_slider_bar
    }

}



const video_player = new Video_player()