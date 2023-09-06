import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
FormsModule

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit{

  isPlaying: boolean = false;
  audioPlayer: HTMLAudioElement = new Audio();
  volume: number = 50;
  //Se define la ruta del archivo de audio.
  audioSource: string = '../assets/music/example.mp3';
  currentTime: string = '00:00';
  duration: string = '00:00';
  seekValue: number = 0;
  
  constructor() {
    this.audioPlayer.src = this.audioSource;
  }

  ngOnInit() {
    this.audioPlayer.addEventListener('timeupdate', () => {
      this.updateTime();
    });
  }
  updateTime() {
    this.currentTime = this.formatTime(Math.floor(this.audioPlayer.currentTime));
    this.duration = this.formatTime(Math.floor(this.audioPlayer.duration));
    this.seekValue = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  seekTo(event: Event) {
    const target = event.target as HTMLInputElement;
    const seekTime = (parseFloat(target.value) / 100) * this.audioPlayer.duration;
    this.audioPlayer.currentTime = seekTime;
    this.updateTime();
  }


    // Función para reproducir o pausar la canción cuando se hace clic en el botón.
    togglePlayPause() {
      if (this.isPlaying) {
        this.audioPlayer.pause();
      } else {
        this.audioPlayer.play();
      }
      this.isPlaying = !this.isPlaying;
    }

    
  }

