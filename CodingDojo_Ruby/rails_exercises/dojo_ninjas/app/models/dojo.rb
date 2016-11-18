class Dojo < ActiveRecord::Base
  has_many :ninjas
  validates :name, :city, presence: true
  validates_length_of :state, :maximum => 2, :minimum => 2, presence: true
end
