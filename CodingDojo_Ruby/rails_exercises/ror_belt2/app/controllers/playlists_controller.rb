class PlaylistsController < ApplicationController
  def create
      @playlist = Playlist.create(user_id: session[:user_id], song_id: params[:song_id])
      redirect_to '/songs'
  end
end
