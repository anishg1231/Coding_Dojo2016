class SessionsController < ApplicationController
  def new
  end

  def login
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session['user_id'] = @user.id
      redirect_to "/users/#{@user.id}"
    else
      flash[:errors] = ["Invalid Combination"]
      redirect_to '/'
    end
  end

  def destroy
  end
end
