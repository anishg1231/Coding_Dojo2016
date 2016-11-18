class Project
  #code here
  def initialize(project_name, description)
    @project_name = project_name
    @description = description
  end
  def elevator_pitch
    puts "Project name is #{@project_name}"
    puts "Desscription:  #{@description}"
  end
end
project1 = Project.new("Project 1", "Description 1")
puts project1.name

# Create a Project Class that has the following attributes: Project name, Project description. There should also be a method in there called elevator_pitch which should state what the project name is and what the project description is.
