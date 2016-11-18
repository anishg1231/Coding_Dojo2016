class Message < ActiveRecord::Base
  belongs_to :post
  validates_length_of :message, :maximum => 255, :minimum => 15, presence: true
  validates :author, presence: true
end
