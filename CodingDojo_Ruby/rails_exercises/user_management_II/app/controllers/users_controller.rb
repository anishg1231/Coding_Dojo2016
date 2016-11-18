class UsersController < ApplicationController
  def index
    @users = User.all
    puts @users.inspect
  end

  def new

  end

  def create
     @users = User.create(first_name: params[:first_name], last_name: params[:last_name], email_address: params[:email_address], password: params[:password])

     if @users.errors.full_messages.empty?
       redirect_to '/'
     else
       puts "ERRORS" * 20
       puts @users.errors.full_messages
       flash[:errors] = @users.errors.full_messages
       redirect_to '/users/new'
     end
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(first_name: params[:first_name], last_name: params[:last_name], email_address: params[:email_address], password: params[:password])

    redirect_to '/'
  end

  def destroy
    @user = User.find(params[:id]).destroy
    redirect_to '/'
  end
end
