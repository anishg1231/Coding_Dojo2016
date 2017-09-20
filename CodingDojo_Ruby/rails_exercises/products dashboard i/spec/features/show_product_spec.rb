require "rails_helper"
RSpec.describe "product page" do
  it "displays all the information about the product" do
    category = Category.create(name: "Category")
    product = category.products.create(name: "Product1", description: "Product1 description", pricing: 100)
    visit "/products"
    click_link "Show"
    expect(current_path).to eq("/products/#{product.id}")
    expect(page).to have_text("Product1")
    expect(page).to have_text("Product1 description")
    expect(page).to have_text("Category")
    expect(page).to have_text("$100.00")
  end
end