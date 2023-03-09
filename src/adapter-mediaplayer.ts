/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía, Diego Herrera Mendoza
 * @since Mar 09 2023
 * @desc Adapter pattern demo. Media Player.
 */

'use strict';

/** @desc MediaPlayer interface */
interface MediaPlayer {
  /**
   * @desc Play an audio file.
   * @param audioType - file extension
   * @param fileName - file name/path
   */
  play(audioType: string, fileName: string): void;
}

/** @desc AdvancedMediaPlayer interface */
class AdvancedMediaPlayer {	
  /**
   * @desc Play a vlc audio file.
   * @param fileName - file name/path
   */
  playVlc(fileName: string): void {}

  /**
   * @desc Play a mp4 audio file.
   * @param fileName - file name/path
   */
  playMp4(fileName: string): void {}
}

/** @desc VlcPlayer class. Implements AdvancedMediaPlayer interface */
class VlcPlayer implements AdvancedMediaPlayer{
  /**
   * @desc Play a vlc audio file.
   * @param fileName - file name/path
   */
  playVlc(fileName: string): void {
    console.log('Playing vlc file. Name: '+ fileName);		
  }
  /**
   * @desc Forced override. Does nothing.
   * @param fileName - file name/path
   */
  playMp4(fileName: string): void {}
}

/** @desc Mp4Player class. Implements AdvancedMediaPlayer interface */
class Mp4Player implements AdvancedMediaPlayer{
  /**
   * @desc Play a mp4 audio file.
   * @param fileName - file name/path
   */
  playMp4(fileName: string): void {
    console.log('Playing mp4 file. Name: '+ fileName);		
  }
  /**
   * @desc Forced override. Does nothing.
   * @param fileName - file name/path
   */
  playVlc(fileName: string): void {}
}

/** @desc MediaAdapter interface */
class MediaAdapter implements MediaPlayer {
  private advancedMusicPlayer: AdvancedMediaPlayer;

  /** 
   * @desc Create a MediaAdapter object
   * @param audioType - audio file extension
   */
  constructor(audioType: string){  
    this.advancedMusicPlayer = new AdvancedMediaPlayer();
    let type: string = audioType.toLowerCase();
    if(type === 'vlc'){
      this.advancedMusicPlayer = new VlcPlayer();      
    }
    else if (type === 'mp4'){
      this.advancedMusicPlayer = new Mp4Player();
    }	
  }

  /**
   * @desc Play an audio file.
   * @param audioType - file extension
   * @param fileName - file name/path
   */
  public play(audioType: string, fileName: string) : void {  
    let type: string = audioType.toLowerCase();
    if(type === 'vlc'){
      this.advancedMusicPlayer.playVlc(fileName);
    }
    else if(type === 'mp4'){
      this.advancedMusicPlayer.playMp4(fileName);
    }
    else {
      console.log('Invalid media. ' + audioType + ' format not supported');
    }
  }
}

/** @desc AudioPlayer class */
class AudioPlayer implements MediaPlayer {  
  /**
   * @desc Create an AudioPlayer object
   */
  constructor(
    private mediaAdapter: MediaAdapter = new MediaAdapter('')
    ){}

  /**
   * @desc Play an audio file.
   * @param audioType - file extension
   * @param fileName - file name/path
   */
  public play(audioType: string, fileName: string): void {
    let type: string = audioType.toLowerCase();
    if(type === 'mp3'){
      console.log('Playing mp3 file. Name: ' + fileName);			
    }
    else {
      this.mediaAdapter = new MediaAdapter(audioType);
      this.mediaAdapter.play(audioType, fileName);
    }
  }   
}

function main() {
  let audioPlayer: AudioPlayer = new AudioPlayer();
  audioPlayer.play('mp3', 'beyond the horizon.mp3');
  audioPlayer.play('mp4', 'alone.mp4');
  audioPlayer.play('vlc', 'far far away.vlc');
  audioPlayer.play('avi', 'mind me.avi');
}
main();
