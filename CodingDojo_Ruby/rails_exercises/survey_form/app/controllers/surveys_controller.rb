class SurveysController < ApplicationController
  def index
    #show all
    @surveys = Survey.all
  end

  def show
    @survey = Survey.find(params[:id])
    #show one
  end

  def new
    # new form temp
  end

  def create
    # when you hit the create button which will create the form
    @survey = Survey.create(name: params[:name], location: params[:location], language: params[:language], comment: params[:comment])
    redirect_to root_path
  end
end
