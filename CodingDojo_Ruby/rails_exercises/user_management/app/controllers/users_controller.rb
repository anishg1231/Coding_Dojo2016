class UsersController < ApplicationController
  def index
    @users = User.all
    puts @users.inspect
  end
end
