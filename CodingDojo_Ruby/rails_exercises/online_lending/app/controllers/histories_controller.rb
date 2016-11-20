class HistoriesController < ApplicationController
  def create
    @history = History.create(amount: params[:amount],lender_id: params[:id], borrower_id: params[:borrower_id] )
    redirect_to "/lenders/#{params[:id]}"
  end
end
