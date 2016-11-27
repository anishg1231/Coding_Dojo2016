class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(name: params[:name], alias: params[:alias], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])

    if @user.errors.full_messages.empty?
      puts "success"
      # session['user_id'] = user.id
      redirect_to '/'
    else
      puts "Bad info"
      flash[:errors] = @user.errors.full_messages
      redirect_to '/'
    end
  end

  def show
    @user = User.find(params[:id])
  end
end
