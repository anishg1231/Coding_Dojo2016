require "rails_helper"

RSpec.describe "deleting a product" do
  it "deletes a product and redirects to products page" do
    category = Category.create(name: "Category1")
    product = category.products.create(name: "Product1", description: "Product1 description", pricing: 100)
    visit "/products"
    expect(page).to have_text("Product1")
    expect(page).to have_text("Category1")
    click_button "Destroy"
    expect(page).to_not have_text("Product1")
    expect(page).to_not have_text("Category1")
  end
end