class SolarSystem
  attr_accessor :name, :planets

  def initialize
    @name = name
    @planets = %w[Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune]
  end

  def count_planets
    @planets.count
  end

  def super_nova
    @planets.clear
  end
end

class Planet < SolarSystem
  attr_accessor :description, :population
  def add_planets
    @planets.push(planet)
  end
end
