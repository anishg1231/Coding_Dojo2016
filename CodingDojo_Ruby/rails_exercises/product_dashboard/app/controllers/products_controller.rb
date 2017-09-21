class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def new

  end

  def create
    @products = Product.create(name: params[:name], description: params[:description], pricing: params[:pricing])
    redirect_to '/'
  end

  def show
    @product = Product.find(params[:id])
  end

  def edit
    @product = Product.find(params[:id])

  end

  def update
    @product = Product.find(params[:id])
    @product.update(name: params[:name], description: params[:description], pricing: params[:pricing])

    redirect_to '/'
  end

  def destroy
    @product = Product.find(params[:id]).destroy
    redirect_to '/'
  end

end
