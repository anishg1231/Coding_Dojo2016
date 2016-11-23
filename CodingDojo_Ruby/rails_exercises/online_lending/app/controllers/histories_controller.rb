class HistoriesController < ApplicationController
  def create
    puts 'I MADE IT :)'
    puts params[:id]
    puts params[:borrower_id]
    @history = History.create(amount: params[:amount],lender_id: params[:id], borrower_id: params[:borrower_id])
    redirect_to "/lenders/#{params[:id]}"
  end
end
