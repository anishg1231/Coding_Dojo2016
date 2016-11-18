require 'rails_helper'

describe UsersController do
  it "routes/users to the users controller" do
    expect(:get => "/users/index").to route_to(:controller => "users", :action => "index")
  end
end
