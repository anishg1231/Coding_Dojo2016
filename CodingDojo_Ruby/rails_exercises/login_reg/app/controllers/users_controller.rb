class UsersController < ApplicationController
  def new
    @user = User.new
  end
  def create
    @user = User.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])

    if @user.errors.full_messages.empty?
      puts "success"
      # session['user_id'] = user.id
      redirect_to '/sessions/new'
    else
      puts "Bad info"
      flash[:errors] = @user.errors.full_messages
      redirect_to '/'
    end
  end

  def success

  end

  def show
    @user = User.find(params[:id])
  end

end
