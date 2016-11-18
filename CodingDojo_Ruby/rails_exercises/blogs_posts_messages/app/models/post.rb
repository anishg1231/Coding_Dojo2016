class Post < ActiveRecord::Base
  belongs_to :blog
  has_many :messages
  validates_length_of :title, :maximum => 255, :minimum => 7, presence: true
  validates :content, presence: true
end
