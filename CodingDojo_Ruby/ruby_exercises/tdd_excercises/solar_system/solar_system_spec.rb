require_relative "solar_system"

RSpec.describe Planet do
  it "has a add_planets" do
    expect
  end
end

RSpec.describe SolarSystem do
  planets = SolarSystem.new
  it "has a count planets method" do
    expect(planets.count_planets).to eq(8)
  end
  it "has a super_nova method" do
    expect(planets.super_nova).to eq([])
  end
end
