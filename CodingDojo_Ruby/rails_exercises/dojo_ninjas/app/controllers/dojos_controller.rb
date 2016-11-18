class DojosController < ApplicationController
  def index
    @dojos = Dojo.all
    render json: Dojo.all
  end

  def new
    @dojos = Dojo.new
  end
end
