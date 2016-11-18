class Project
  #code here
  attr_accessor :project_name, :description, :name

  def initialize(project_name, description, name)
    @team = []
    @project_name = project_name
    @description = description
    @name = name
  end
  def elevator_pitch
    "#{@project_name}, #{@description}"
  end
  def add_to_team
    @team.push(@name)
    return @team
  end
end
