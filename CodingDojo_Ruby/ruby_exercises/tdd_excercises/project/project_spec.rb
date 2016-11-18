# we are going to have to include our project class in our spec file
require_relative 'project'

# now we could start Rspec

#this line enacts that Rspec library and calls the describe method that takes in the class project, when doing so it expects to do something
RSpec.describe Project do
  #now we can have Rspec test our Project class
  it 'has a getter and setter for name attribute' do
    #now we cant test our Project class
    #lets create a new project and make sure we can set the name attribute
    project = Project.new("Project Name", "I am a project")
    project.project_name = "Changed Name"
    # we should be able to run the code, now lets make sure it's changed.
    #we run the expect method on our porjects name and expect our project name ot now equal the value of changed name, this returns true and false
    expect(project.project_name). to eq('Changed Name')
  end
end
