class BorrowersController < ApplicationController
  def index
    @borrowers = Borrower.all
  end

  def new
  end

  def create
    @borrower = Borrower.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], password: params[:password], money: params[:amount_needed], purpose: params[:purpose], description: params[:description])
    puts @borrower

    if @borrower.errors.full_messages.empty?
      puts "success"
      # session['user_id'] = user.id
      redirect_to '/sessions/new'
    else
      puts "Bad info"
      flash[:errors] = @borrower.errors.full_messages
      redirect_to '/'
    end
  end

  def show
    @borrower = Borrower.find(params[:id])
  end
end
