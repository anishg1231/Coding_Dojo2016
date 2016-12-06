require "rails_helper"

RSpec.describe "listing products" do
  it "displays list of products" do
    c = Category.create(name: "Footwear")
    c1 = Category.create(name: "Electronics")
    c.products.create(name: "Shoe", description: "Walking", pricing: 10.00)
    c1.products.create(name: "Headphones", description: "For Music", pricing: 8.00)
    visit "/products"
    expect(page).to have_text("Shoe")
    expect(page).to have_text("Footwear")
    expect(page).to have_text("$10.00")
    expect(page).to have_text("Headphones")
    expect(page).to have_text("Electronics")
    expect(page).to have_text("$8.00")
  end
end