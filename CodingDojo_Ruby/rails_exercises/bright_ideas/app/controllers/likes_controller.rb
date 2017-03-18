class LikesController < ApplicationController
  def create
    @like = Like.create(user_id: session[:user_id], idea_id: params[:idea_id])
    if @like.errors.full_messages.empty?
      puts "Success"
      redirect_to ideas_path
    else
      puts "Bad Info"
      flash[:errors] = @like.errors.full_messages
      redirect_to ideas_path
    end
  end
end
