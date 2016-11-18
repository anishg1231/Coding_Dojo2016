require_relative 'human'

class Wizard < Human

  def initialize
    @health = 50
    @intelligence = 25
  end

  def heal
    @health += 10
  end

  def fireball(obj)
    attack(obj)
    obj.health -= 20
  end
end
