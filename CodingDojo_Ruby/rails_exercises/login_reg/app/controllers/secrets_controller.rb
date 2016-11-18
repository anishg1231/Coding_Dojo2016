class SecretsController < ApplicationController
  def index
    @secrets = Secret.all
  end

  def create
    @secret = Secret.create(messages: params[:new_secret], user_id: session[:user_id])
    flash["success"] = "Successfully created..."
    redirect_to secrets_path
  end

  def destroy
    @secret = Secret.find(params[:id]).destroy
    redirect_to "/users/#{session[:user_id]}"
  end

  def update
    @secret = Secret.find(params[:id])
    redirect_to secrets_path

  end

end
