class IdeasController < ApplicationController
  def index
    @ideas = Idea.all.order(created_at: :desc)
  end

  def new
  end

  def create
    @idea = Idea.create(idea: params[:new_idea], user_id: session[:user_id])
    redirect_to ideas_path
  end

  def update
  end

  def show
    @each_idea = Idea.find(params[:id])
  end

  def destroy
    @idea = Idea.find(params[:id]).destroy
    redirect_to ideas_path
  end
end
