class Ninja < ActiveRecord::Base
  belongs_to :dojo
  validates :first_name, :last_name, length: { in: 2..20 }, presence: true
end
