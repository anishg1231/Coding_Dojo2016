class SongsController < ApplicationController
  def index
    @songs = Song.all.order(created_at: :desc)
    @user = User.find(session[:user_id])
  end

  def new
  end

  def create
    @song = Song.create(title: params[:title], artist: params[:artist])

    if @song.errors.full_messages.empty?
      puts "Success"
      redirect_to '/songs'
    else
      puts "Bad Info"
      flash[:errors] = @song.errors.full_messages
      redirect_to '/songs'
    end
  end

  def show
    @song = Song.find(params[:id])
    @user = User.find(session[:user_id])
  end
end
