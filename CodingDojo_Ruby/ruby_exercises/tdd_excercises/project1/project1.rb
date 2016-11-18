class Project
  attr_accessor :name, :description
  
  def name=(name)
    @name = name
  end

  def description=(description)
    @description = description
  end

  def name
    @name
  end

  def description
    @description
  end

  def elevator_pitch
    "#{@name}, #{@description}"
  end
end
