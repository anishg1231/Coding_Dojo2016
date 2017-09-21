require 'rails_helper'

RSpec.describe Product, :type => :model do
  it "requires a name" do
    product = Product.new(name: "")
    product.valid?

    expect(product.errors[:name].any?).to eq(true)
  end

  it "requires a pricing" do
    product = Product.new(pricing: "")
    product.valid?

    expect(product.errors[:pricing].any?).to eq(true) 
  end

  it "requires a description" do
    product = Product.new(description: "")
    product.valid?

    expect(product.errors[:description].any?).to eq(true)
  end

  describe "relationships" do
    it "belongs to a category" do
      category = Category.create(name: "Category1")
      product = category.products.create(name: "Product1", description: "Product1 description", pricing: 10.00)
      expect(product.category).to eq(category)
    end
  end
end
