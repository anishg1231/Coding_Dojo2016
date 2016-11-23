class UsersController < ApplicationController
  def new
  end

  def create
    @user = User.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], password: params[:password])

    if @user.errors.full_messages.empty?
      session[:user_id] = @user.id
      puts "Success"
      redirect_to '/songs'
    else
      puts "Bad Info"
      flash[:errors] = @user.errors.full_messages
      redirect_to '/'
    end
  end

  def show
    @user = User.find(session[:user_id])
    @song = Playlist.find_by(user_id: @user.id, song_id: @user)
  end

end
