class LikesController < ApplicationController
  def create
    @like = Like.create(user_id: session[:user_id], secret_id: params[:secret_id], like: true)
    redirect_to secrets_path
  end

  def destroy
    @like = Like.find(params[:id]).destroy
    redirect_to secrets_path
  end
end
