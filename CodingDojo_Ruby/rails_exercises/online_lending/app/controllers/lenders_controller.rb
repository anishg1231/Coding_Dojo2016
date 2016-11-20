class LendersController < ApplicationController
  def index
    @lenders = Lender.all
  end

  def new
  end

  def create
    @lender = Lender.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], password: params[:password], money: params[:money])

    if @lender.errors.full_messages.empty?
      puts "success"
      # session['user_id'] = user.id
      redirect_to '/sessions/new'
    else
      puts "Bad info"
      flash[:errors] = @lender.errors.full_messages
      redirect_to '/'
    end
  end

  def show
    @lender = Lender.find(params[:id])
    @borrowers = Borrower.all
    # redirect_to "/lenders"
  end
end
