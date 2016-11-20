class SessionsController < ApplicationController
  def new
  end

  def login
    @lender = Lender.find_by(email: params[:email])
    if @lender && @lender.authenticate(params[:password])
      session['lender_id'] = @lender.id
      redirect_to "/lenders/#{@lender.id}"
    else
      flash[:errors] = ["Invalid Combination"]
      redirect_to '/'
    end
  end

  def login_borrower
    @borrower = Borrower.find_by(email: params[:email])
    if @borrower && @borrower.authenticate(params[:password])
      session['borrower_id'] = @borrower.id
      redirect_to "/borrowers/#{@borrower.id}"
      puts params
    else
      flash[:errors] = @borrower.errors.full_messages
      redirect_to '/'
    end
  end


end
