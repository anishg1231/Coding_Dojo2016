class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
    # redirect_to products_show_path
  end

  def new
    @categories = Category.all
  end

  def edit
    @product = Product.find(params[:id])
    @categories = Category.all
    render 'products/edit'
  end

  def destroy
    @product = Product.find(params[:id]).destroy
    redirect_to '/'

  end

  def create
    puts product_params[:category]
    category = Category.find(product_params[:category])
    product = Product.new(name: params[:name], description: products_params[:description], pricing: products_params[:pricing], category: category)
   if product.save
     redirect_to "/products"
   else
     flash[:errors] = product.errors.full_messages
     redirect_to "/products/new"
   end
    # puts @category
    # @product = Product.create(product_params)
    # # @product.category_id = category_id_num
    # puts params
    # redirect_to '/'
  end

  def update
    @categories = Category.find(product_params[:category])
    @product = Product.find(params[:id])
    @product.update(product_params)
    redirect_to '/'
  end

  private
  def product_params
   params.require(:product).permit(:name, :description, :pricing, :category)
  end
end
