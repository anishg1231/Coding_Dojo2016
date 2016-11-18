require 'rails_helper'
feature "guest user creates an account" do
  scenario "successfully creates a new user account" do
    visit "User#index"
    fill_in "user_first_name", with: "Foo"
    fill_in "user_last_name", with: "Bar"
    fill_in "user_email", with: "foo@bar.com"
    click_button "Create User"
    expect(page).to have_content "User successfully created"
  end
end
